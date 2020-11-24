import React from "react";
import styled from "styled-components";
import Link from "next/link";
import EmptyLabel from "../images/icon-label.png";
import {
  getArtist_artist_aliases,
  getArtist_artist_members,
  getArtist_artist_groups,
} from "../graphql/__generated__/getArtist";
import { DetailsType } from "../globals";
// import {} from "../graphql/__generated__/getLabel";

type ListItem = getArtist_artist_aliases | getArtist_artist_members | getArtist_artist_groups;

type Detail = {
  title: string;
  content: string | string[] | ListItem[];
};
interface Props {
  name: string;
  image: string | null;
  details: Detail[];
}

const DetailSection = ({ name, image, details }: Props) => {
  return (
    <Details>
      <div className="artist-pic centered">
        <img src={image || EmptyLabel} alt={`${name} cover`} />
      </div>
      <div className="artist-details">
        <div>
          <h1>{name}</h1>
        </div>
        <dl>
          {details
            .filter((detail) => detail?.content?.length || detail?.content)
            .map((data, index) => {
              const { title, content } = data;
              if (
                title === DetailsType.Aliases ||
                title === DetailsType.Groups ||
                title === DetailsType.Members ||
                title === DetailsType.Sublabel
              ) {
                return (
                  <div className={index % 2 === 0 ? "light-bg" : ""}>
                    <dt>{title}</dt>
                    <dd>
                      {(content as ListItem[]).map((element, index) => (
                        <span className="list-element" key={element.name}>
                          <Link href={`${element.id}`}>{element.name}</Link>
                          {index < content.length - 1 ? <>,</> : <>.</>}
                        </span>
                      ))}
                    </dd>
                  </div>
                );
              } else if (title === DetailsType.Urls) {
                return (
                  <div className={index % 2 === 0 ? "light-bg" : ""}>
                    <dt>{title}</dt>
                    <dd>
                      {(content as string[]).map((element, index) => (
                        <span className="list-element" key={index}>
                          {element}
                          {index < content.length - 1 ? <>,</> : <>.</>}
                        </span>
                      ))}
                    </dd>
                  </div>
                );
              } else {
                return (
                  <div className={index % 2 === 0 ? "light-bg" : ""}>
                    <dt>{title}</dt>
                    <dd>{content}</dd>
                  </div>
                );
              }
            })}
        </dl>
      </div>
    </Details>
  );
};

export default DetailSection;

const Details = styled.section`
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
    .light-bg {
      background: var(--background2);
    }
    dl > div {
      display: flex;

      & > dt {
        display: block;
        max-width: 150px;
        min-width: 150px;
        margin: 5px;
      }
    }
    .list-element {
      margin-right: 5px;
    }
  }
`;
