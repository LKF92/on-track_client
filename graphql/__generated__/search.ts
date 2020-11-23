/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: search
// ====================================================

export interface search_search {
  __typename: "SearchResult";
  id: string;
  title: string | null;
  type: string | null;
  thumb: string | null;
}

export interface search {
  search: (search_search | null)[];
}

export interface searchVariables {
  searchQuery: string;
  searchType?: string | null;
}
