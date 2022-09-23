import * as Types from '@gwide/client/generated/graphql-types';

import { gql } from 'urql';
import * as Urql from 'urql';
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type GetToursByCountryQueryVariables = Types.Exact<{
  countryId: Types.Scalars['Float'];
}>;


export type GetToursByCountryQuery = { __typename?: 'Query', getToursByCountry: Array<{ __typename?: 'Tour', id: string, name: string, format: Types.TourFormat, type: Types.TourType, rating?: number | null, price: number, description: string, image: string, currency: { __typename?: 'Currency', name: string }, tourCity?: Array<{ __typename?: 'TourCity', city: { __typename?: 'City', id: string, name: string, country: { __typename?: 'Country', name: string, id: string } } }> | null, tourLanguage?: Array<{ __typename?: 'TourLanguage', language: { __typename?: 'Language', id: string, name: string } }> | null, tourTourCategory?: Array<{ __typename?: 'TourTourCategory', tourCategory: { __typename?: 'TourCategory', id: string, name: string } }> | null, guide: { __typename?: 'User', firstName: string, lastName: string, role: Types.UserRole, image?: string | null, country?: { __typename?: 'Country', name: string } | null, tour?: Array<{ __typename?: 'Tour', id: string, name: string, price: number, maxCapacity: number, currency: { __typename?: 'Currency', name: string }, _count: { __typename?: 'TourCount', tourCity: number, tourLanguage: number } }> | null } }> };


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
    `;

export function useGetToursByCountryQuery(options: Omit<Urql.UseQueryArgs<GetToursByCountryQueryVariables>, 'query'>) {
  return Urql.useQuery<GetToursByCountryQuery>({ query: GetToursByCountryDocument, ...options });
};