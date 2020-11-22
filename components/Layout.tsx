import React from "react";
import Head from "next/head";
import Header from "./Header";
import { createGlobalStyle } from "styled-components";

type LayoutProps = {
  title?: string;
};

const Layout: React.FC<LayoutProps> = ({ children, title }) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Header />
    {children}
    <GlobalStyle />
  </div>
);

export default Layout;

const GlobalStyle = createGlobalStyle`
    body {
    --background1: #fffffe;
    --background2: #f2eef5;
    --background3: #DAE6E0;

    --headline: #181818;
    --paragraph: #2e2e2e;
    --lightText: #646e80;

    --primary: #4fc4cf;
    --secondary: #994ff3;
    --tiertiary: #fbdd74;

    --lightOutline: #f4f4f2;
    --darkOutline: #727272;
    font-family: "Trebuchet MS", Arial, Helvetica, sans-serif
    }

    h1, h2, h3, h4, h5 {
      color: var(--headline);
    }

    h2 {
    font-size: 1.7em;
    line-height: 28px;
    }

    *:focus {
        outline: none;
    }

    button, input{
        display: inline-block;
        border: none;
        padding: 0;
        margin: 0;
        text-decoration: none;
        background: inherit;
        color: inherit; 
        }


    .centered{
    display: flex;
    justify-content: center;
    align-items: center
    }
    .visually-hidden {
        position: absolute;
        height: 1px;
        width: 1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        white-space: nowrap;
    }
`;
