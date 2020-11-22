import React, { useState, useEffect } from "react";
import Link from "next/link";
import styled from "styled-components";
import SearchIcon from "../icon/SearchIcon";
import { LoadingOutlined } from "@ant-design/icons";
import Favourite from "../icon/Heart";
import EmptyCover from "../images/icon-label.png";
import useDebounce from "../utils/useDebounce";
import { useLazyQuery } from "@apollo/client";
import { SEARCH_QUERY } from "../graphql/queries";

export interface SearchResult {
  id: string;
  title: string;
  type: string;
  thumb: string;
}

export type SearchType = "artist" | "label";

export default () => {
  const [search, setSearch] = useState("");
  const [searchType, setSearchType] = useState<SearchType | null>(null);
  const DebouncedValue = useDebounce(search, 500);
  const [getSearch, { loading, data, networkStatus }] = useLazyQuery(SEARCH_QUERY, {
    variables: searchType
      ? { searchQuery: DebouncedValue, searchType }
      : { searchQuery: DebouncedValue },
    notifyOnNetworkStatusChange: true,
    fetchPolicy: "network-only",
  });

  useEffect(() => {
    if (search.length >= 2) {
      getSearch();
    }
  }, [search]);

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
      {search.length >= 2 && networkStatus === 7 && data ? (
        <ResultsList>
          {data.search.map((result: SearchResult, index) => {
            return (
              <Link
                href={
                  result.type === "artist"
                    ? `/artist/${encodeURIComponent(result.id)}`
                    : `/label/${encodeURIComponent(result.id)}`
                }
                passHref
              >
                <Result key={index} onClick={() => setSearch("")}>
                  <div className="cover">
                    <img src={result.thumb || EmptyCover} alt={result.title + " picture"} />
                  </div>
                  <div className="result">
                    <h4 className="result-title">{result.title}</h4>
                    <p className="result-type">{result.type}</p>
                  </div>
                  <div className="favourite">
                    <Favourite size={20} />
                  </div>
                </Result>
              </Link>
            );
          })}
        </ResultsList>
      ) : null}
    </Search>
  );
};
const Search = styled.div`
  width: 300px;
`;

const SearchBar = styled.div`
  padding: 5px 0;
  display: flex;
  box-sizing: border-box;
  align-items: center;
  overflow: hidden;
  background: white;
  /* border: 1px solid var(--lightOutline); */
  border-radius: 5px;

  button {
    margin: 0 5px;
    border: none;
    background: white;
  }

  input {
    border: none;
    width: 100%;
    background: white;
    text-indent: 10px;
  }
`;
const ResultsList = styled.div`
  width: 300px;
  max-height: 75vh;
  overflow: scroll;
  background: var(--white);
  position: absolute;
  box-shadow: 0 10px 15px 0 var(--darkOutline);
`;
const Result = styled.a`
  height: 70px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid var(--lightOutline);
  border-bottom: 2px solid white;
  background: var(--background1);
  &:hover {
    background: var(--background3);
  }

  .cover {
    height: 100%;
    width: 70px;
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
      font-size: 0.95em;
    }
    .result-type {
      font-size: 0.8em;
      color: var(--lightText);
      font-style: italic;
      &::first-letter {
        text-transform: capitalize;
      }
    }
  }

  .favourite {
    margin-right: 10px;
  }
`;
