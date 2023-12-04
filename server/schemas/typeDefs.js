const typeDefs = `
  type member {
    _id: ID
    name: String
    email: String
    password: String
    workouts: [String]!
    
  }

  type Auth {
    token: ID!
    profile: Profile
  }

  type Query {
    members: [Member]!
    member(memberId: ID!): Member
    # Because we have the context functionality in place to check a JWT and decode its data, we can use a query that will always find and return the logged in user's data
    me: Member
  }

  type Mutation {
    addMember(name: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth

    addWorkout(profileId: ID!, workout: String!): Member
    removeMember: Member
    removeWorkout(workout: String!): Member
  }
`;

module.exports = typeDefs;