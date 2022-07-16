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
    }
  }
`
