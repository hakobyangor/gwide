import * as Types from '@gwide/client/generated/graphql-types';

import { gql } from 'urql';
import * as Urql from 'urql';
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type SignUpMutationVariables = Types.Exact<{
  args: Types.RegisterInput;
}>;


export type SignUpMutation = { __typename?: 'Mutation', signUp: { __typename?: 'User', id: string, firstName: string, lastName: string, email: string } };

export type LoginMutationVariables = Types.Exact<{
  args: Types.LoginInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'User', id: string, firstName: string, lastName: string, email: string, image?: string | null } };

export type LogoutMutationVariables = Types.Exact<{ [key: string]: never; }>;


export type LogoutMutation = { __typename?: 'Mutation', logout: { __typename?: 'User', id: string, firstName: string, lastName: string, email: string, image?: string | null } };


export const SignUpDocument = gql`
    mutation SignUp($args: RegisterInput!) {
  signUp(signUpInput: $args) {
    id
    firstName
    lastName
    email
  }
}
    `;

export function useSignUpMutation() {
  return Urql.useMutation<SignUpMutation, SignUpMutationVariables>(SignUpDocument);
};
export const LoginDocument = gql`
    mutation Login($args: LoginInput!) {
  login(loginInput: $args) {
    id
    firstName
    lastName
    email
    image
  }
}
    `;

export function useLoginMutation() {
  return Urql.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument);
};
export const LogoutDocument = gql`
    mutation Logout {
  logout {
    id
    firstName
    lastName
    email
    image
  }
}
    `;

export function useLogoutMutation() {
  return Urql.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument);
};