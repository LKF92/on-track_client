/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getLabel
// ====================================================

export interface getLabel_label_releases {
  __typename: "ShortRelease";
  id: string;
  format: string | null;
  label: string | null;
  title: string | null;
  year: number | null;
  artist: string | null;
}

export interface getLabel_label {
  __typename: "Label";
  name: string | null;
  id: string;
  image: string | null;
  releases: (getLabel_label_releases | null)[];
}

export interface getLabel {
  label: getLabel_label | null;
}

export interface getLabelVariables {
  id: string;
}
