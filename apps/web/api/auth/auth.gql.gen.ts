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


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'User', id: string, firstName: string, lastName: string, email: string } };


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
  }
}
    `;

export function useLoginMutation() {
  return Urql.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument);
};