import React from "react";
import styled from "styled-components";
import { useQuery } from "@apollo/client";
import User from "../icon/User";
import { ARTIST_QUERY } from "../graphql/queries";
import Search from "./Search";

interface HeaderProps {}

const Header = (props: HeaderProps) => {
  const { loading, error, data } = useQuery(ARTIST_QUERY, { variables: { id: 1455442 } });

  if (loading) return <p>... fetching data ...</p>;
  if (error) return <p>...something went wrong... {JSON.stringify(error)}</p>;

  return (
    <MyHeader>
      <div>
        <Search />
      </div>
      <div className="user centered">
        <User />
      </div>
    </MyHeader>
  );
};

export default Header;

const MyHeader = styled.header`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 10px 50px;
  background: var(--background3);

  .user {
    margin-left: 50px;
  }
`;
