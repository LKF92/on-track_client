/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getRelease
// ====================================================

export interface getRelease_release_tracklist {
  __typename: "Track";
  duration: string | null;
  type: string | null;
  title: string | null;
  position: string | null;
}

export interface getRelease_release_artists {
  __typename: "Artist";
  name: string | null;
  id: string;
}

export interface getRelease_release_labels_releases {
  __typename: "ShortRelease";
  id: string;
  title: string | null;
  artist: string | null;
}

export interface getRelease_release_labels {
  __typename: "Label";
  id: string;
  name: string | null;
  image: string | null;
  releases: (getRelease_release_labels_releases | null)[];
}

export interface getRelease_release_videos {
  __typename: "Video";
  duration: number | null;
  title: string | null;
  uri: string | null;
}

export interface getRelease_release {
  __typename: "CompleteRelease";
  id: string;
  title: string | null;
  tracklist: (getRelease_release_tracklist | null)[] | null;
  country: string | null;
  year: number | null;
  label: string | null;
  artists: (getRelease_release_artists | null)[] | null;
  labels: (getRelease_release_labels | null)[] | null;
  videos: (getRelease_release_videos | null)[] | null;
  genres: (string | null)[] | null;
  styles: (string | null)[] | null;
  formats: (string | null)[] | null;
  released_formatted: string | null;
}

export interface getRelease {
  release: getRelease_release | null;
}

export interface getReleaseVariables {
  id: string;
}
