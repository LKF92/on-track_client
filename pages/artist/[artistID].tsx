import React from "react";
import styled from "styled-components";
import Layout from "../../components/Layout";
import EmptyLabel from "../../images/icon-label.png";
import ContentRow from "../../components/ContentRow";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import { ARTIST_QUERY } from "../../graphql/queries";
import { getArtist, getArtistVariables } from "../../graphql/__generated__/getArtist";

interface Props {}

const artist = (props: Props) => {
  const router = useRouter();
  console.log("router", router);
  const { artistID } = router.query;

  const { data, loading, error } = useQuery<getArtist, getArtistVariables>(ARTIST_QUERY, {
    variables: { id: artistID.toString() },
  });
  if (error) return <p> ... something went wrong ... {JSON.stringify(error)}</p>;
  if (loading) return <Layout>...fetching...</Layout>;
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
      {loading ? (
        <p>... fetching data ... </p>
      ) : (
        <ArtistDetails>
          <div className="artist-pic centered">
            <img src={image || EmptyLabel} alt={`${name} cover`} />
          </div>
          <div className="artist-details">
            <h2>{name}</h2>
          </div>
        </ArtistDetails>
      )}
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
