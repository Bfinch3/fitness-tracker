const { Member } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
    Query: {
      member: async () => {
        return Member.find();
      },
  
      member: async (parent, { memberId }) => {
        return Member.findOne({ _id: memberId });
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
    }
}