const { User, Workout } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
    Query: {
      user: async () => {
        return User.find();
      },
  
      user: async (parent, { userId }) => {
        return User.findOne({ _id: userId });
      },
      workout: async () => {
        return Workout.find();
      },
      workout: async (parent, {userId}) => {
        return Workout.findOne({_id: userId});
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
              {_id: memeberId},
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
        reomoveUser: async (parent, args, context) => {
          if (context.user) {
            return User.findOneAndDelete({_id: context.user._id});
          }
          throw AuthenticationError;
        },
        //this allows us to remove a skill
        removeSkill: async (parent, { workout}, context) =>{
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