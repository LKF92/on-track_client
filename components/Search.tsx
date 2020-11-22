import React, { useState, useEffect } from "react";
import Link from "next/link";
import styled from "styled-components";
import SearchIcon from "../icon/SearchIcon";
import { LoadingOutlined } from "@ant-design/icons";
import Favourite from "../icon/Heart";
import EmptyLabel from "../images/icon-label.png";
import useDebounce from "../utils/useDebounce";
import { useLazyQuery } from "@apollo/client";
import { SEARCH_QUERY } from "../graphql/queries";

export interface SearchResult {
  id: number;
  title: string;
  type: string;
  thumb: string;
}

export type SearchType = "artist" | "label";

export default () => {
  const [search, setSearch] = useState("");
  const [searchType, setSearchType] = useState<SearchType | null>(null);
  const debouncedSearchTerm = useDebounce(search, 500);
  const variables = searchType
    ? { searchQuery: debouncedSearchTerm, searchType }
    : { searchQuery: debouncedSearchTerm };
  const [getSearch, { loading, data, error }] = useLazyQuery(SEARCH_QUERY, {
    variables,
  });
  console.log(error);

  useEffect(() => {
    if (debouncedSearchTerm.length > 2) {
      console.log("send request to getSearch()");

      getSearch();
    } // eslint-disable-next-line
  }, [debouncedSearchTerm]);

  console.log(loading, data);

  return (
    <Search>
      <SearchBar>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={(e) => (e.keyCode === 13 ? getSearch() : null)}
        />
        <button className="centered" type="button" onClick={() => getSearch()}>
          {loading ? <LoadingOutlined /> : <SearchIcon />}
        </button>
      </SearchBar>
      {!loading && data && (
        <ResultsList>
          {data.map((result: SearchResult, index) => {
            return (
              <ResultLink to={"/artist/" + result.id} key={index} onClick={() => setSearch("")}>
                <div className="cover">
                  <img src={result.thumb || EmptyLabel} alt={result.title + " picture"} />
                </div>
                <div className="result">
                  <div className="result-title">{result.title}</div>
                  <div className="result-type">{result.type}</div>
                </div>
                <div className="favourite">
                  <Favourite />
                </div>
              </ResultLink>
            );
          })}
        </ResultsList>
      )}
    </Search>
  );
};
const Search = styled.div`
  width: 300px;
`;

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
    background: white;
    text-indent: 10px;
  }
`;

const ResultLink = styled(Link)`
  height: 75px;
  display: flex;
  align-items: center;
  border: 1px solid var(--outline);
  border-top: 2px solid var(--white);

  &:hover {
    background: var(--secondaryBackground);
  }

  .cover {
    height: 100%;
    width: 75px;
    img {
      object-fit: cover;
      height: 100%;
      width: 100%;
    }
  }
  .result {
    padding: 10px;
    flex: 1;
    .result-title {
      font-weight: bold;
    }
    .result-type {
      color: grey;
      font-style: italic;
    }
  }

  .favourite {
    margin-right: 10px;
  }
`;

const ResultsList = styled.div`
  width: 300px;
  background: var(--white);
  position: absolute;
`;
