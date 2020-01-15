import React from "react";
import styled from "styled-components";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      counter: 0
    };
  }
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    )
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  
  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <StyledClock>
        <span>{this.state.date.toLocaleTimeString()}</span>
      </StyledClock>
    );
  }
}
class App extends React.Component {
  render() {
    return <Clock />;
  }
}

const StyledClock = styled.div`
  position: absolute;
  color: #333333;
  font-size: 150%;
  top: 130px;
  text-align: center;
  font-weight: bolder;
  width: 100%;
`;

export default App;
