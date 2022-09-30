import { gql } from 'urql'

const GET_USER = gql`
  query GetUser($args: UserWhereUniqueInput!) {
    user(where: $args) {
      id
      firstName
      lastName
      email
    }
  }
`

const GET_USERS = gql`
  query GetUsers {
    users {
      id
      firstName
      lastName
      email
    }
  }
`

const GET_CURRENT_USER = gql`
  query GetCurrentUser {
    currentUser {
      id
      firstName
      lastName
      email
      image
      bio
    }
  }
`
