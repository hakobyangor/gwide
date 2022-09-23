import * as Types from '@gwide/client/generated/graphql-types';

import { gql } from 'urql';
import * as Urql from 'urql';
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type GetCountriesQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetCountriesQuery = { __typename?: 'Query', getCountries: Array<{ __typename?: 'Country', id: string, name: string }> };


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