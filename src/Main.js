import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import App from "./App";
import Board from "./Board";
import Background from './wallpaper.jpg';

class Title extends React.Component {
  render() {
    return (
      <div className="Title">
        <StyledH1>짱구의 카드게임</StyledH1>
        <App />
      </div>
    );
  }
}
class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gameStart: false
    }
    this.handleHomeClick = this.handleHomeClick.bind(this);
  }
  handleClick() {
    console.log("Started");
    this.setState({
      gameStart: true
    })
  }
  handleHomeClick() {
    console.log("finished");
    this.setState({
      gameStart: false
    })
  }
  render() {
    return (
      <div>
        <GlobalStyle />
        {this.state.gameStart ? (
          <Board onClick={() => this.handleHomeClick()}/>
        ) : (
          <div>
            <Title />
            <StyledButton onClick={() => this.handleClick()}>
              게임 시작
            </StyledButton>
          </div>
        )}
      </div>
    );
  }
}

const StyledH1 = styled.h1`
  position: absolute;
  width: 100%;
  text-align: center;
  color: #24292E;
  font-size: 400%;
  top: 80px;
`;

const GlobalStyle = createGlobalStyle`
  body {
  background-image : url(${Background});
  background-repeat : no-repeat;
  background-size : cover;
  overflow-x: hidden;
  user-select: none;
  }
`;

const StyledButton = styled.div`

  background-color: #333333;
  color: white;
  text-align: center;
  width:150px;
  height:40px;
  padding: 15px;
  position:absolute;
  left:50%;
  top:420px;
  margin-left:-75px;
  margin-top:-20px;
  opacity: 0.9;
  font-size: 170%;
  border-radius: 10%;
`;
export default Main;
