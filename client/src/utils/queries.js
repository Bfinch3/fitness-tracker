import { gql } from '@apollo/client';

export const QUERY_WORKOUT = gql`
query Workout($workoutId: ID!) {
    workout(workoutId: $workoutId) {
      workoutTitle
      workoutType
      workoutText
      url
      createdAt
      comments {
        createdAt
        name
        commentBody
        _id
      }
      commentCount
      _id
    }
  }`

export const QUERY_WORKOUTS = gql`
query Query($userId: ID!, $type: String) {
    workouts(userId: $userId, type: $type) {
      workoutTitle
      workoutType
      workoutText
      _id
    }
  }
`

export const QUERY_EMAIL = gql`
query Query($searchTerm: String!) {
    friendEmail(searchTerm: $searchTerm) {
      name
      _id
      email
    }
  }`

export const QUERY_ME = gql`
query Query {
    me {
      name
      _id
      createdAt
      email
      workouts {
        workoutTitle
        workoutText
        workoutType
        url
        createdAt
        comments {
          commentBody
          name
          createdAt
        }
        commentCount
      }
      friends {
        name
        _id
        email
      }
    }
  }`