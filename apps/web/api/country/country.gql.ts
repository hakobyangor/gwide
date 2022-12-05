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
const GET_CITY_BY_ID = gql`
  query GetCityById($cityId: Float!) {
    getCityById(cityId: $cityId) {
      id
      name
      status
      country {
        name
      }
    }
  }
`
