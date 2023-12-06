const { User, Workout, Reaction } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
    Query: {
      users: async () => {
        return User.find();
      },
  
      user: async (parent, { user }) => {
        return User.findOne({ user });
      },
     
      workout: async (parent, {workoutId}) => {
        return Workout.findOne({_id: workoutId});
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
        addWorkout: async (parent, {userId, workout}, context) => {
          if (context.user){
            return User.findOneAndUpdate(
              {_id: userId},
              {
                $addToSet: { workouts: workout },
              },
              {
                new: true,
                runValidators: true,
              }
            );
          }
          
        },

        //This allows us to remove a user
        removeUser: async (parent, args, context) => {
          if (context.user) {
            return User.findOneAndDelete({_id: context.user._id});
          }
          throw AuthenticationError;
        },
        //this allows us to remove a skill
        removeWorkout: async (parent, { workout}, context) =>{
          if (context.user) {
            return User.findOneAndUpdate(
              {_id: context.user._id},
              {$pull: { workouts: workout } },
              {new: true}
            );
          }
          throw AuthenticationError;
        },
    },
};

module.exports = resolvers