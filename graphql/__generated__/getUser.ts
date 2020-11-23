/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getUser
// ====================================================

export interface getUser_user {
  __typename: "User";
  id: string;
  username: string;
  email: string;
  password: string;
  favEPs: string[];
  favLabels: string[];
  favArtists: string[];
}

export interface getUser {
  user: getUser_user | null;
}

export interface getUserVariables {
  id: string;
}
