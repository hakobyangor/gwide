import * as Types from '@gwide/client/generated/graphql-types'

import { gql } from 'urql'
import * as Urql from 'urql'
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>
export type GetToursByCountryQueryVariables = Types.Exact<{
  countryId: Types.Scalars['Float']
}>

export type GetToursByCountryQuery = {
  __typename?: 'Query'
  getToursByCountry: Array<{
    __typename?: 'Tour'
    id: string
    name: string
    format: Types.TourFormat
    type: Types.TourType
    rating?: number | null
    price: number
    description: string
    image: string
    currency: { __typename?: 'Currency'; name: string }
    tourCity?: Array<{
      __typename?: 'TourCity'
      city: {
        __typename?: 'City'
        id: string
        name: string
        country: { __typename?: 'Country'; name: string; id: string }
      }
    }> | null
    tourLanguage?: Array<{
      __typename?: 'TourLanguage'
      language: { __typename?: 'Language'; id: string; name: string }
    }> | null
    tourTourCategory?: Array<{
      __typename?: 'TourTourCategory'
      tourCategory: { __typename?: 'TourCategory'; id: string; name: string }
    }> | null
    guide: {
      __typename?: 'User'
      id: string
      firstName: string
      lastName: string
      role: Types.UserRole
      image?: string | null
      country?: { __typename?: 'Country'; name: string } | null
      tour?: Array<{
        __typename?: 'Tour'
        id: string
        name: string
        price: number
        maxCapacity: number
        currency: { __typename?: 'Currency'; name: string }
        _count: { __typename?: 'TourCount'; tourCity: number; tourLanguage: number }
      }> | null
    }
  }>
}

export type GetHomeToursQueryVariables = Types.Exact<{ [key: string]: never }>

export type GetHomeToursQuery = {
  __typename?: 'Query'
  getHomeTours: Array<{
    __typename?: 'Tour'
    id: string
    name: string
    format: Types.TourFormat
    description: string
    type: Types.TourType
    image: string
    rating?: number | null
    price: number
    favoriteTour?: Array<{ __typename?: 'FavoriteTour'; tourId: number }> | null
    tourCity?: Array<{
      __typename?: 'TourCity'
      city: { __typename?: 'City'; id: string; name: string }
    }> | null
    tourLanguage?: Array<{
      __typename?: 'TourLanguage'
      language: { __typename?: 'Language'; id: string; name: string }
    }> | null
    tourTourCategory?: Array<{
      __typename?: 'TourTourCategory'
      tourCategory: { __typename?: 'TourCategory'; id: string; name: string }
    }> | null
    guide: {
      __typename?: 'User'
      id: string
      firstName: string
      lastName: string
      role: Types.UserRole
      image?: string | null
      country?: { __typename?: 'Country'; name: string } | null
      tour?: Array<{
        __typename?: 'Tour'
        id: string
        name: string
        price: number
        maxCapacity: number
        currency: { __typename?: 'Currency'; name: string }
      }> | null
    }
  }>
}

export type GetToursQueryVariables = Types.Exact<{
  getToursInput: Types.GetToursInput
}>

export type GetToursQuery = {
  __typename?: 'Query'
  getTours: Array<{
    __typename?: 'Tour'
    id: string
    name: string
    format: Types.TourFormat
    image: string
    type: Types.TourType
    rating?: number | null
    price: number
    tourImage?: Array<{ __typename?: 'TourImage'; name: string; image: string }> | null
    favoriteTour?: Array<{ __typename?: 'FavoriteTour'; tourId: number }> | null
    tourCity?: Array<{
      __typename?: 'TourCity'
      city: { __typename?: 'City'; id: string; name: string }
    }> | null
    tourLanguage?: Array<{
      __typename?: 'TourLanguage'
      language: { __typename?: 'Language'; id: string; name: string }
    }> | null
    tourTourCategory?: Array<{
      __typename?: 'TourTourCategory'
      tourCategory: { __typename?: 'TourCategory'; id: string; name: string }
    }> | null
    guide: {
      __typename?: 'User'
      firstName: string
      lastName: string
      role: Types.UserRole
      image?: string | null
      country?: { __typename?: 'Country'; name: string } | null
      tour?: Array<{
        __typename?: 'Tour'
        id: string
        name: string
        price: number
        maxCapacity: number
        currency: { __typename?: 'Currency'; name: string }
        _count: { __typename?: 'TourCount'; tourCity: number; tourLanguage: number }
      }> | null
    }
  }>
}

export const GetToursByCountryDocument = gql`
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
        id
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

export function useGetToursByCountryQuery(
  options: Omit<Urql.UseQueryArgs<GetToursByCountryQueryVariables>, 'query'>
) {
  return Urql.useQuery<GetToursByCountryQuery>({ query: GetToursByCountryDocument, ...options })
}
export const GetHomeToursDocument = gql`
  query GetHomeTours {
    getHomeTours {
      id
      name
      format
      description
      type
      image
      rating
      price
      favoriteTour {
        tourId
      }
      tourCity {
        city {
          id
          name
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
        id
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
        }
      }
    }
  }
`

export function useGetHomeToursQuery(
  options?: Omit<Urql.UseQueryArgs<GetHomeToursQueryVariables>, 'query'>
) {
  return Urql.useQuery<GetHomeToursQuery>({ query: GetHomeToursDocument, ...options })
}
export const GetToursDocument = gql`
  query GetTours($getToursInput: GetToursInput!) {
    getTours(getToursInput: $getToursInput) {
      id
      name
      format
      image
      type
      rating
      price
      tourImage {
        name
        image
      }
      favoriteTour {
        tourId
      }
      tourCity {
        city {
          id
          name
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
      }
    }
  }
`

export function useGetToursQuery(
  options: Omit<Urql.UseQueryArgs<GetToursQueryVariables>, 'query'>
) {
  return Urql.useQuery<GetToursQuery>({ query: GetToursDocument, ...options })
}
