import * as Types from '@gwide/client/generated/graphql-types';

import { gql } from 'urql';
import * as Urql from 'urql';
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type GetUserQueryVariables = Types.Exact<{
  args: Types.UserWhereUniqueInput;
}>;


export type GetUserQuery = { __typename?: 'Query', user: { __typename?: 'User', id: string, firstName: string, lastName: string, email: string } };

export type GetUsersQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetUsersQuery = { __typename?: 'Query', users: Array<{ __typename?: 'User', id: string, firstName: string, lastName: string, email: string }> };

export type GetCurrentUserQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetCurrentUserQuery = { __typename?: 'Query', currentUser: { __typename?: 'User', id: string, firstName: string, lastName: string, email: string, image?: string | null, bio?: string | null } };

export type UpdateUserMutationVariables = Types.Exact<{
  data: Types.UpdateUserInput;
}>;


export type UpdateUserMutation = { __typename?: 'Mutation', updateUser: { __typename?: 'User', firstName: string } };


export const GetUserDocument = gql`
    query GetUser($args: UserWhereUniqueInput!) {
  user(where: $args) {
    id
    firstName
    lastName
    email
  }
}
    `;

export function useGetUserQuery(options: Omit<Urql.UseQueryArgs<GetUserQueryVariables>, 'query'>) {
  return Urql.useQuery<GetUserQuery>({ query: GetUserDocument, ...options });
};
export const GetUsersDocument = gql`
    query GetUsers {
  users {
    id
    firstName
    lastName
    email
  }
}
    `;

export function useGetUsersQuery(options?: Omit<Urql.UseQueryArgs<GetUsersQueryVariables>, 'query'>) {
  return Urql.useQuery<GetUsersQuery>({ query: GetUsersDocument, ...options });
};
export const GetCurrentUserDocument = gql`
    query GetCurrentUser {
  currentUser {
    id
    firstName
    lastName
    email
    image
    bio
  }
}
    `;

export function useGetCurrentUserQuery(options?: Omit<Urql.UseQueryArgs<GetCurrentUserQueryVariables>, 'query'>) {
  return Urql.useQuery<GetCurrentUserQuery>({ query: GetCurrentUserDocument, ...options });
};
export const UpdateUserDocument = gql`
    mutation updateUser($data: UpdateUserInput!) {
  updateUser(data: $data) {
    firstName
  }
}
    `;

export function useUpdateUserMutation() {
  return Urql.useMutation<UpdateUserMutation, UpdateUserMutationVariables>(UpdateUserDocument);
};