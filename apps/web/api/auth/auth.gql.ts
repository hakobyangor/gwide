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

const VERIFY_EMAIL = gql`
  mutation VerifyEmail($args: verifyEmail!) {
    verifyEmail(verifyEmail: $args) {
      id
      firstName
      email
      lastName
    }
  }
`

const RESET_PASSWORD_EMAIL = gql`
  mutation ResetPasswordEmail($args: UserWhereUniqueInput!) {
    resetPasswordEmail(where: $args) {
      id
      firstName
      email
      lastName
    }
  }
`

const RESET_PASSWORD = gql`
  mutation ResetPassword($args: resetPassword!) {
    resetPassword(resetPassword: $args) {
      id
      firstName
      email
      lastName
    }
  }
`

const CHECK_RESET_PASSWORD_HASH = gql`
  query checkResetPasswordHash($args: verifyEmail!) {
    checkResetPasswordHash(checkResetPasswordHash: $args)
  }
`
