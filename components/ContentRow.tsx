import React, { useState, useEffect } from "react";
import styled from "styled-components";
import {
  getArtist_artist_aliases,
  getArtist_artist_groups,
  getArtist_artist_members,
  getArtist_artist_releases,
} from "../graphql/__generated__/getArtist";
import {} from "../graphql/__generated__/getLabel";

interface Props {
  name?: string;
  namevariations?: string;
  image?: string;
  aliases?: getArtist_artist_aliases;
  profile?: string;
  releases?: getArtist_artist_releases;
  members?: getArtist_artist_members;
  urls: string[];
  groups?: getArtist_artist_groups;
}

const ContentRow = ({ title, content }: Props) => {
  return (
    <Content>
      <span className="title">{title}</span>
      <span className="content">{content}</span>
    </Content>
  );
};

export default ContentRow;

const Content = styled.div`
  .title {
    display: inline-block;
    width: 100px;
  }
`;
