import React from "react";
import App from "./App";

class Title extends React.Component {
  render() {
    return (
      <div className="Title">
        <h1>My Blog</h1>
        <App />
        <h2>소희야 사랑해♥</h2>
      </div>
    );
  }
}
class Main extends React.Component {
  render() {
    return <Title />;
  }
}

export default Main;
