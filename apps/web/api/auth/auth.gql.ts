import { gql } from 'urql'

const SIGN_UP = gql`
  mutation SignUp($args: RegisterInput!) {
    signUp(signUpInput: $args) {
      id
      firstName
      lastName
      email
    }
  }
`

const LOGIN = gql`
  mutation Login($args: LoginInput!) {
    login(loginInput: $args) {
      id
      firstName
      lastName
      email
      image
    }
  }
`

const LOGOUT = gql`
  mutation Logout {
    logout {
      id
      firstName
      lastName
      email
      image
    }
  }
`
