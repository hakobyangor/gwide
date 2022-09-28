import { gql } from 'urql'

const GET_TOURS_BY_COUNTRY = gql`
  query GetToursByCountry($countryId: Float!) {
    getToursByCountry(countryId: $countryId) {
      id
      name
      format
      type
      rating
      price
      description
      image
      currency {
        name
      }
      tourCity {
        city {
          id
          name
          country {
            name
            id
          }
        }
      }
      tourLanguage {
        language {
          id
          name
        }
      }
      tourTourCategory {
        tourCategory {
          id
          name
        }
      }
      guide {
        country {
          name
        }
        firstName
        lastName
        role
        image
        tour {
          id
          name
          price
          maxCapacity
          currency {
            name
          }

          _count {
            tourCity
            tourLanguage
          }
        }
      }
    }
  }
`