import { gql } from "@apollo/client";

const ARTIST_QUERY = gql`
  query getArtist($id: ID!) {
    artist(id: $id) {
      name
      id
      image
      aliases {
        resourceUrl
        id
        name
      }
      releases {
        id
        year
        artist
        label
        format
      }
      members {
        name
        id
      }
      urls
      groups {
        id
        name
        active
        resourceUrl
      }
      profile
      namevariations
    }
  }
`;

const LABEL_QUERY = gql`
  query getLabel($id: ID!) {
    label(id: $id) {
      name
      id
      image
      releases {
        id
        format
        label
        title
        year
        artist
      }
    }
  }
`;

const RELEASE_QUERY = gql`
  query getRelease($id: ID!) {
    release(id: $id) {
      id
      title
      tracklist {
        duration
        type
        title
        position
      }
      country
      year
      label
      artists {
        name
        id
      }
      labels {
        id
        name
        image
        releases {
          id
          title
          artist
        }
      }
      videos {
        duration
        title
        uri
      }
      genres
      styles
      formats
      released_formatted
    }
  }
`;

const USER_QUERY = gql`
  query getUser($id: ID!) {
    user(id: $id) {
      id
      username
      email
      password
      email
      favEPs
      favLabels
      favArtists
    }
  }
`;

const SEARCH_QUERY = gql`
  query search($searchQuery: String!, $searchType: String) {
    search(searchQuery: $searchQuery, searchType: $searchType) {
      id
      title
      type
      thumb
    }
  }
`;

export { ARTIST_QUERY, LABEL_QUERY, RELEASE_QUERY, USER_QUERY, SEARCH_QUERY };
