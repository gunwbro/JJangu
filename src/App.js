import React from "react";
import "./App.css";

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
      <div className="Clock">
        <span>{this.state.date.toLocaleTimeString()}</span>
      </div>
    );
  }
}
class App extends React.Component {
  render() {
    return <Clock />;
  }
}

export default App;
