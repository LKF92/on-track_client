/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getArtist
// ====================================================

export interface getArtist_artist_aliases {
  __typename: "Alias";
  resourceUrl: string | null;
  id: string;
  name: string | null;
}

export interface getArtist_artist_releases {
  __typename: "ShortRelease";
  id: string;
  year: number | null;
  artist: string | null;
  label: string | null;
  format: string | null;
}

export interface getArtist_artist_members {
  __typename: "Artist";
  name: string | null;
  id: string;
}

export interface getArtist_artist_groups {
  __typename: "Group";
  id: string;
  name: string | null;
  active: boolean | null;
  resourceUrl: string | null;
}

export interface getArtist_artist {
  __typename: "Artist";
  name: string | null;
  id: string;
  image: string | null;
  aliases: (getArtist_artist_aliases | null)[] | null;
  releases: (getArtist_artist_releases | null)[] | null;
  members: (getArtist_artist_members | null)[] | null;
  urls: (string | null)[] | null;
  groups: (getArtist_artist_groups | null)[] | null;
  profile: string | null;
  namevariations: (string | null)[] | null;
}

export interface getArtist {
  artist: getArtist_artist | null;
}

export interface getArtistVariables {
  id: string;
}
