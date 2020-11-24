import React from "react";
import styled from "styled-components";
import Layout from "../../components/Layout";
import EmptyLabel from "../../images/icon-label.png";
import { ARTIST_QUERY } from "../../graphql/queries";
import { getArtist, getArtistVariables } from "../../graphql/__generated__/getArtist";
import { initializeApollo } from "../../lib/apolloClient";
import { GetServerSideProps, GetServerSidePropsContext } from "next";

interface Props {
  data: getArtist;
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { artistID } = context.params;

  const apolloClient = initializeApollo();
  const { data } = await apolloClient.query({
    query: ARTIST_QUERY,
    variables: { id: artistID },
  });

  return {
    props: { data }, // will be passed to the page component as props
  };
}

const artist = ({ data }: Props) => {
  const {
    name,
    namevariations,
    image,
    aliases,
    profile,
    releases,
    members,
    urls,
    groups,
  } = data?.artist;
  return (
    <Layout>
      <ArtistDetails>
        <div className="artist-pic centered">
          <img src={image || EmptyLabel} alt={`${name} cover`} />
        </div>
        <div className="artist-details">
          <h2>{name}</h2>
        </div>
      </ArtistDetails>
    </Layout>
  );
};

export default artist;

const ArtistDetails = styled.section`
  display: flex;

  .artist-pic {
    max-width: 200px;
    max-height: 200px;
    img {
      object-fit: contain;
      width: 100%;
      height: 100%;
    }
  }

  .artist-details {
    margin-left: 10px;
  }
`;
