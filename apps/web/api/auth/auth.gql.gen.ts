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

export type VerifyEmailMutationVariables = Types.Exact<{
  args: Types.VerifyEmail;
}>;


export type VerifyEmailMutation = { __typename?: 'Mutation', verifyEmail: { __typename?: 'User', id: string, firstName: string, email: string, lastName: string } };

export type ResetPasswordEmailMutationVariables = Types.Exact<{
  args: Types.UserWhereUniqueInput;
}>;


export type ResetPasswordEmailMutation = { __typename?: 'Mutation', resetPasswordEmail: { __typename?: 'User', id: string, firstName: string, email: string, lastName: string } };

export type ResetPasswordMutationVariables = Types.Exact<{
  args: Types.ResetPassword;
}>;


export type ResetPasswordMutation = { __typename?: 'Mutation', resetPassword: { __typename?: 'User', id: string, firstName: string, email: string, lastName: string } };

export type CheckResetPasswordHashQueryVariables = Types.Exact<{
  args: Types.VerifyEmail;
}>;


export type CheckResetPasswordHashQuery = { __typename?: 'Query', checkResetPasswordHash: boolean };


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
export const VerifyEmailDocument = gql`
    mutation VerifyEmail($args: verifyEmail!) {
  verifyEmail(verifyEmail: $args) {
    id
    firstName
    email
    lastName
  }
}
    `;

export function useVerifyEmailMutation() {
  return Urql.useMutation<VerifyEmailMutation, VerifyEmailMutationVariables>(VerifyEmailDocument);
};
export const ResetPasswordEmailDocument = gql`
    mutation ResetPasswordEmail($args: UserWhereUniqueInput!) {
  resetPasswordEmail(where: $args) {
    id
    firstName
    email
    lastName
  }
}
    `;

export function useResetPasswordEmailMutation() {
  return Urql.useMutation<ResetPasswordEmailMutation, ResetPasswordEmailMutationVariables>(ResetPasswordEmailDocument);
};
export const ResetPasswordDocument = gql`
    mutation ResetPassword($args: resetPassword!) {
  resetPassword(resetPassword: $args) {
    id
    firstName
    email
    lastName
  }
}
    `;

export function useResetPasswordMutation() {
  return Urql.useMutation<ResetPasswordMutation, ResetPasswordMutationVariables>(ResetPasswordDocument);
};
export const CheckResetPasswordHashDocument = gql`
    query checkResetPasswordHash($args: verifyEmail!) {
  checkResetPasswordHash(checkResetPasswordHash: $args)
}
    `;

export function useCheckResetPasswordHashQuery(options: Omit<Urql.UseQueryArgs<CheckResetPasswordHashQueryVariables>, 'query'>) {
  return Urql.useQuery<CheckResetPasswordHashQuery>({ query: CheckResetPasswordHashDocument, ...options });
};