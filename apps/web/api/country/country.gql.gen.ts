import * as Types from '@gwide/client/generated/graphql-types';

import { gql } from 'urql';
import * as Urql from 'urql';
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type GetCountriesQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetCountriesQuery = { __typename?: 'Query', getCountries: Array<{ __typename?: 'Country', id: string, name: string }> };

export type GetHomeCountriesQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetHomeCountriesQuery = { __typename?: 'Query', getHomeCountries: Array<{ __typename?: 'Country', id: string, name: string }> };

export type GetCitiesQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetCitiesQuery = { __typename?: 'Query', getCities: Array<{ __typename?: 'City', id: string, name: string, status: Types.Status, country: { __typename?: 'Country', name: string, id: string } }> };

export type GetCityByIdQueryVariables = Types.Exact<{
  cityId: Types.Scalars['Float'];
}>;


export type GetCityByIdQuery = { __typename?: 'Query', getCityById: { __typename?: 'City', id: string, name: string, status: Types.Status, country: { __typename?: 'Country', name: string } } };


export const GetCountriesDocument = gql`
    query GetCountries {
  getCountries {
    id
    name
  }
}
    `;

export function useGetCountriesQuery(options?: Omit<Urql.UseQueryArgs<GetCountriesQueryVariables>, 'query'>) {
  return Urql.useQuery<GetCountriesQuery>({ query: GetCountriesDocument, ...options });
};
export const GetHomeCountriesDocument = gql`
    query GetHomeCountries {
  getHomeCountries {
    id
    name
  }
}
    `;

export function useGetHomeCountriesQuery(options?: Omit<Urql.UseQueryArgs<GetHomeCountriesQueryVariables>, 'query'>) {
  return Urql.useQuery<GetHomeCountriesQuery>({ query: GetHomeCountriesDocument, ...options });
};
export const GetCitiesDocument = gql`
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
    `;

export function useGetCitiesQuery(options?: Omit<Urql.UseQueryArgs<GetCitiesQueryVariables>, 'query'>) {
  return Urql.useQuery<GetCitiesQuery>({ query: GetCitiesDocument, ...options });
};
export const GetCityByIdDocument = gql`
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
    `;

export function useGetCityByIdQuery(options: Omit<Urql.UseQueryArgs<GetCityByIdQueryVariables>, 'query'>) {
  return Urql.useQuery<GetCityByIdQuery>({ query: GetCityByIdDocument, ...options });
};