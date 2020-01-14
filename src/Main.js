import React from "react";
import App from "./App";
import Board from "./Board";

class Title extends React.Component {
  render() {
    return (
      <div className="Title">
        <h1>짱구 게임</h1>
        <App />

      </div>
    );
  }
}
class Main extends React.Component {
  render() {
    return (
      <div>
        <Title />
        <Board />
      </div>
    );
  }
}

export default Main;
