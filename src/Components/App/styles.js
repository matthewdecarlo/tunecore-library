import styled, { createGlobalStyle } from 'styled-components/macro';

export const StyledApp = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  overflow: hidden;
`;

export const StyledTable = styled.table`
  display: table;
  border-collapse: collapse;
  border-spacing: 2px;
  border-color: grey;
  margin: 1rem;
  padding: 0;
  overflow: hidden;
  box-sizing: border-box;
  border-radius: 0.75rem;
  box-shadow: 0 0 0.15rem rgba(0, 0, 0, 0.24);
  text-transform: capitalize;
  transition: box-shadow 0.3s ease-in-out;

  & :hover,
  & :focus {
    box-shadow: 0 0.1rem 0.3rem rgba(0, 0, 0, 0.1),
      0 0.1rem 0.2rem rgba(0, 0, 0, 0.12);
  }

  & th:first-child,
  tr td:first-child {
    display: none;
  }
  tbody {
    display: block;
    height: calc(100vh - 6rem);
    overflow-y: scroll;
  }

  thead,
  tbody tr {
    display: table;
    width: 100%;
    table-layout: fixed;
  }

  thead {
    text-align: left;
    box-shadow: 0 0.3rem 0.6rem rgba(0, 0, 0, 0.16),
      0 0.3rem 0.6rem rgba(0, 0, 0, 0.23);
  }

  & th,
  & td {
    padding: 1rem;
    overflow: hidden;
  }

  & th {
    font-size: 18px;
    color: #fff;
    line-height: 1.4;
    background-color: rgb(80, 80, 80);
    padding-top: 18px;
    padding-bottom: 18px;
  }

  & tr {
    color: rgb(128, 128, 128);
    display: table-row;
    vertical-align: inherit;
    border-color: inherit;
  }

  & td > span {
    width: 100%;
    height: 100%;
    display: inline-block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    animation: marquee-reset;
    animation-play-state: paused;
    transform: translate(0%, 0);
  }

  & tr:hover,
  & tr:focus {
    font-weight: 600;
    color: rgb(256, 256, 256);
    background-color: rgb(126, 175, 226);
    box-shadow: 0 0.1rem 0.3rem rgba(0, 0, 0, 0.12),
      0 0.1rem 0.2rem rgba(0, 0, 0, 0.24);
    outline: none;
  }

  & td:hover > span,
  & td:focus > span {
    overflow: visible;
    text-overflow: inherit;
    animation: marquee 15s linear infinite;
    animation-play-state: running;
  }
`;

export const GlobalStyle = createGlobalStyle`
  body, html {
    align-items: stretch;
    display: flex;
    flex-direction: column;
    flex: 1 1 100%;
    font-family: arial;
    height: 100%;
    position: fixed;
    width: 100%;
    -webkit-overflow-scrolling: touch;
  }
  
  #root {
    height: 100%;
    display: flex;
  }

@keyframes marquee {
    0% {
        transform: translate(0%, 0);
    }    
    50% {
        transform: translate(-100%, 0);
    }
    50.001% {
        transform: translate(100%, 0);
    }
    100% {
        transform: translate(0%, 0);
    }
}
@keyframes marquee-reset {
    0% {
        transform: translate(0%, 0);
    }  
}
`;

StyledApp.displayName = 'StyledApp';
