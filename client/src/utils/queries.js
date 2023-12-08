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
        username
        commentBody
        _id
      }
      commentCount
      _id
    }
  }`

export const QUERY_WORKOUTS = gql`
query Query($userId: ID!) {
    workouts(userId: $userId) {
      workoutTitle
      workoutType
      workoutText
    }
  }
`
