import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        name
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($name: String!, $email: String!, $password: String!) {
    addUser(name: $name, email: $email, password: $password) {
      token
      user {
        _id
        name
      }
    }
  }
`;

export const ADD_WORKOUT = gql`
mutation Mutation($workoutTitle: String!, $workoutText: String!, $workoutType: String!, $url: String!) {
  addWorkout(workoutTitle: $workoutTitle, workoutText: $workoutText, workoutType: $workoutType, url: $url) {
    workoutTitle
    workoutText
    workoutType
    url
    createdAt
    _id
  }
}
`;

export const REMOVE_WORKOUT = gql`
  mutation removeWorkout($workout: String!) {
    removeWorkout(workout: $workout) {
      _id
      name
      workouts
    }
  }
`;

export const ADD_COMMENT = gql`
mutation Mutation($commentBody: String!, $workoutId: ID!) {
  addComment(commentBody: $commentBody, workoutId: $workoutId) {
    commentBody
    createdAt
    commentAuthor
    _id
  }
}
`;

// Add a friend by their name
export const ADD_FRIEND = gql`
  mutation addFriend($name: String!) {
    addFriend(name: $name) {
      _id
      name
      friends
    }
  }
`;

// Remove a friend by their name
export const REMOVE_FRIEND = gql`
mutation RemoveFriend($name: String!) {
  removeFriend(name: $name) {
    _id
    name
    friends
  }
}
`;
