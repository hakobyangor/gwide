import { gql } from 'urql'

const GET_COUNTRIES = gql`
  query GetCountries {
    getCountries {
      id
      name
    }
  }
`
