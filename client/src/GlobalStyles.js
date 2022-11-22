import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  * {
    box-sizing:border-box;
    scroll-padding: 60px;
    @media ${(props) => props.theme.MediaQueries.l.query} {
      scroll-padding: 0px;
    }
  }

  body {
    padding:0;
    margin:0;
    background: #F5F5F5;
  }

  a {
      text-decoration:none;
  }

  a:hover {
    text-decoration:none;
  }

  ul {
    margin:0;
    padding:0;
    list-style:none;
  }

  img {
    max-width:100%;
    height:auto;
  }

  h1,h2,h3,h4,h5,h6,p{
    margin:0;
    padding:0;
  }

  main {
    margin: 0 auto;
    @media ${(props) => props.theme.MediaQueries.m.query} {
      /* max-width: 768px; */
    }
    @media ${(props) => props.theme.MediaQueries.l.query} {
      /* max-width: 1600px; */
    }
  }
`;

export default GlobalStyle;
