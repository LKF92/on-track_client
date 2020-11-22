import React from "react";
import styled from "styled-components";
import Favourite from "../../icon/Heart";
import EmptyLabel from "../../images/icon-label.png";
import { SearchResult } from "../Search";

type Props = {
  searchResults: SearchResult[];
  setSearchResults: React.Dispatch<React.SetStateAction<SearchResult[]>>;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
};

export default function ({ searchResults, setSearchResults, setSearch }: Props) {
  return (
    <ResultsList>
      {searchResults.map((result, index) => {
        return (
          <ResultLink
            to={"/artist/" + result.id}
            key={index}
            onClick={() => {
              setSearchResults([]);
              setSearch("");
            }}
          >
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
  );
}

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
