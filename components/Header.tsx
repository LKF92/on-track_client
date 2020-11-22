import React from "react";
import styled from "styled-components";
import User from "../icon/User";
import Search from "./Search";

interface HeaderProps {}

const Header = (props: HeaderProps) => {
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
