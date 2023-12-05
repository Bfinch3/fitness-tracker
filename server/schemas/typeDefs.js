const typeDefs = `
  type User {
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
    users: [User]!
    user(userId: ID!): User
    # Because we have the context functionality in place to check a JWT and decode its data, we can use a query that will always find and return the logged in user's data
    me: User
  }

  type Mutation {
    addUser(name: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth

    addWorkout(profileId: ID!, workout: String!): User
    removeUser: User
    removeWorkout(workout: String!): User
  }
`;

module.exports = typeDefs;