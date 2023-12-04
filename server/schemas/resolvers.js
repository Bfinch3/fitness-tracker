const { Member, Workout } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
    Query: {
      member: async () => {
        return Member.find();
      },
  
      member: async (parent, { memberId }) => {
        return Member.findOne({ _id: memberId });
      },
      workout: async () => {
        return Workout.find();
      },
      workout: async (parent, {memberId}) => {
        return Workout.findOne({_id: memberId});
      },
      // By adding context to our query, we can retrieve the logged in user without specifically searching for them
      me: async (parent, args, context) => {
        if (context.user) {
          return Member.findOne({ _id: context.user._id });
        }
        throw AuthenticationError;
      },
    },

    Mutation: {
      //this allows us to add new members
        addMember: async (parent, { name, email, password }) => {
          const member = await Member.create({ name, email, password });
          const token = signToken(member);
    
          return { token, member };
        },
        login: async (parent, { email, password }) => {
          const member = await Member.findOne({ email });
    
          if (!member) {
            throw AuthenticationError;
          }
    
          const correctPw = await member.isCorrectPassword(password);
    
          if (!correctPw) {
            throw AuthenticationError;
          }
    
          const token = signToken(member);
          return { token, member };
        },
        //this allows us to add a new workout
        addWorkout: async (parent, {memberId, workout}, context) => {
          if (context.user){
            return Member.findOneAndUpdate(
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

        //This allows us to remove a member
        reomoveMember: async (parent, args, context) => {
          if (context.user) {
            return Member.findOneAndDelete({_id: context.user._id});
          }
          throw AuthenticationError;
        },
        //this allows us to remove a skill
        removeSkill: async (parent, { workout}, context) =>{
          if (context.user) {
            return Member.findOneAndUpdate(
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