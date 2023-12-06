import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      profile {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_WORKOUT = gql`
  mutation addWorkout($memeberId: ID!, $workout: String!) {
    addWorkout(memberId: $memberId, workout: $workout) {
      _id
      name
      workouts
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
