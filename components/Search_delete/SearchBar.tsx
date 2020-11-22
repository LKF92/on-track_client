import React from "react";
import styled from "styled-components";
import SearchIcon from "../../icon/SearchIcon";
import { LoadingOutlined } from "@ant-design/icons";
import Favourite from "../../icon/Heart";
import EmptyLabel from "../../images/icon-label.png";
import { SearchType } from "../Search";
import { QueryLazyOptions } from "@apollo/client";

type SearchBarProps = {
  isLoading: boolean;
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  getSearch: (
    options?: QueryLazyOptions<{
      searchQuery: string;
      searchType: SearchType;
    }>
  ) => void;
};
export default ({ isLoading, search, setSearch, getSearch }: SearchBarProps) => {
  return (
    <SearchBar>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={(e) => (e.keyCode === 13 ? getSearch : null)}
      />
      <button className="centered" type="button" onClick={() => getSearch}>
        {isLoading ? <LoadingOutlined /> : <SearchIcon />}
      </button>
    </SearchBar>
  );
};
const SearchBar = styled.div`
  display: flex;
  box-sizing: border-box;
  align-items: center;
  overflow: hidden;
  background: var(--white);
  border: 1px solid var(--outline);
  border-radius: 5px;

  button {
    margin: 0 5px;
    border: none;
  }

  input {
    border: none;
    width: 100%;
    text-indent: 10px;
  }
`;
