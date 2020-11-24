import React from "react";
import styled from "styled-components";
import Layout from "../../components/Layout";
import { ARTIST_QUERY } from "../../graphql/queries";
import { getArtist } from "../../graphql/__generated__/getArtist";
import { initializeApollo } from "../../lib/apolloClient";
import { GetServerSidePropsContext } from "next";
import DetailSection from "../../components/DetailSection";
import { DetailsType } from "../../globals";

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
  const { name, profile, image, aliases, releases, members, urls, groups } = data?.artist;
  console.log(data.artist);

  return (
    <Layout>
      <ArtistPage>
        <DetailSection
          name={name}
          image={image}
          details={[
            { title: "Profile", content: profile },
            { title: DetailsType.Aliases, content: aliases },
            { title: DetailsType.Members, content: members },
            { title: DetailsType.Groups, content: groups },
            { title: DetailsType.Urls, content: urls },
          ]}
        />
      </ArtistPage>
    </Layout>
  );
};

export default artist;

const Discography = styled.section``;

const ArtistPage = styled.div``;
