import { gql } from '@apollo/client';

export const QUERY_MEMBERS = gql`
  query allMembers {
    Members {
      _id
      username
      email
      workouts
    }
  }
`;

export const QUERY_SINGLE_MEMBERS = gql`
  query singleMember($memberId: ID!) {
    member(memberId: $memeberId) {
      _id
      username
      email
      workouts
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
      workouts
    }
  }
`;
