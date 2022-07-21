import { CombinedError } from 'urql'

export const isAuthError = (error?: CombinedError) => {
  return error?.graphQLErrors.some(
    (error) => error.message === 'The entered e-mail or password are incorrect, please try again'
  )
}
