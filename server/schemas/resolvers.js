const { User, Workout, Comment } = require("../models");
const { signToken, AuthenticationError } = require("../utils/auth");

const resolvers = {
  Query: {
    users: async () => {
      return User.find();
    },
    user: async (parent, { userId }) => {
      return User.findOne({ _id: userId }).populate("workouts");
    },
    workout: async (parent, { workoutId }) => {
      return Workout.findOne({ _id: workoutId }).populate("comments");
    },
    workouts: async (parent, { userId }) => {
      const params = userId ? { userId } : {};
      return Workout.find(params).sort({ createdAt: -1 });
    },
    // By adding context to our query, we can retrieve the logged in user without specifically searching for them
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id });
      }
      throw AuthenticationError;
    },
  },
  Mutation: {
    //this allows us to add new users
    addUser: async (parent, { name, email, password }) => {
      const user = await User.create({ name, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });
      if (!user) {
        throw AuthenticationError;
      }
      const correctPw = await user.isCorrectPassword(password);
      if (!correctPw) {
        throw AuthenticationError;
      }
      const token = signToken(user);
      return { token, user };
    },
    //this allows us to add a new workout
    addWorkout: async (parent, { workoutTitle, workoutText, workoutType, url }, context) => {
      if (context.user) {
        const workout = await Workout.create({
          workoutTitle,
          workoutText,
          workoutType,
          url,
          userId: context.user._id,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          {
            $addToSet: { workouts: workout._id },
          },
          {
            new: true,
            runValidators: true,
          }
        );

        return workout;
      }
    },
    
    addFriend: async (_, { name }, { user }) => {
      if (!user) throw AuthenticationError;

      const currentUser = await findUserById(user._id);
      const friendUser = await User.findOne({ name });

      if (friendUser && !currentUser.friends.includes(friendUser.name)) {
        currentUser.friends.push(friendUser.name);
        await currentUser.save();
      }

      return currentUser;
    },
    
    removeFriend: async (_, { name }, { user }) => {
      if (!user) throw AuthenticationError;
    
      const currentUser = await findUserById(user._id);
      const friendUser = await User.findOne({ name });
    
      if (currentUser && friendUser) {
        const friendIndex = currentUser.friends.indexOf(friendUser._id);
        if (friendIndex !== -1) {
          currentUser.friends.splice(friendIndex, 1);
          await currentUser.save();
        }
      }
    
      return currentUser;
    },

    //This allows us to remove a user
    removeUser: async (parent, args, context) => {
      if (context.user) {
        return User.findOneAndDelete({ _id: context.user._id });
      }
      throw AuthenticationError;
    },
    //this allows us to remove a skill
    removeWorkout: async (parent, { workout }, context) => {
      if (context.user) {
        return User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { workouts: workout } },
          { new: true }
        );
      }
      throw AuthenticationError;
    },
    //This allows us to add a comment
    addComment: async (parent, { commentBody, workoutId }, context) => {
      if (context.user) {
        const comment = await Comment.create({
          commentBody,
          name: context.user.name,
        });
        const workout = await Workout.findOneAndUpdate(
          { _id: workoutId },
          { $addToSet: { comments: comment._id } },
          { new: true }
        );
        return comment;
      }
      throw AuthenticationError;
    },
    //This allows us to remove a comment
    removeComment: async (parent, { commentId, workoutId }, context) => {
      const comment = await Comment.deleteOne({ _id: commentId });
      const workout = await Workout.findOneAndUpdate(
        { _id: workoutId },
        { $pull: { comments: commentId } },
        { new: true }
      );
      return workout;
    },
  },
};

module.exports = resolvers;
