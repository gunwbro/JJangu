import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import App from "./App";
import Board from "./Board";

class Title extends React.Component {
  render() {
    return (
      <div className="Title">
        <StyledH1>짱구 게임</StyledH1>
        <App />
      </div>
    );
  }
}
class Main extends React.Component {
  render() {
    return (
      <div>
        <GlobalStyle />
        <Title />
        <Board />
      </div>
    );
  }
}

const StyledH1 = styled.h1`
  position: absolute;
  width: 100%;
  text-align: center;
  color: #333333;
  font-size: 300%;
`;

const GlobalStyle = createGlobalStyle`
body {
  background-color: #D6D7D9;
}
`;
export default Main;
