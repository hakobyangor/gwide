import { gql } from 'urql'

const GET_COUNTRIES = gql`
  query GetCountries {
    getCountries {
      id
      name
    }
  }
`

const GET_HOME_COUNTRIES = gql`
  query GetHomeCountries {
    getHomeCountries {
      id
      name
    }
  }
`

const GET_CITIES = gql`
  query getCities {
    getCities {
      id
      name
      status
      country {
        name
        id
      }
    }
  }
`
