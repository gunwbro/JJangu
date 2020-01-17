import React from "react";
import styled from "styled-components";

function Puzzle(props) {
  return (
    <StyledPuzzle onClick={props.onClick} value={props.value}>
      <div>
        <div>{props.value ? "1" : "0"}</div>
        <div>{props.number}</div>
      </div>
    </StyledPuzzle>
  );
}

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      puzzles: Array(12).fill(false),
      number: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
    };
  }

  componentDidMount() {
    this.setState({
      number: this.randomArrayGenerate()
    })
  }
  handleClick(i) {
    let puzzles = this.state.puzzles;
    puzzles[i] = !puzzles[i];
    this.setState({
      puzzles: puzzles
    });
  }
  renderPuzzle(i) {
    const currentValue = this.state.puzzles[i];
    return (
      <Puzzle
        onClick={() => this.handleClick(i)}
        value={currentValue}
        number={i}
      />
    );
  }
  randomArrayGenerate() {
    let arr = Array(12).fill(null);
    for (let i = 0; i < 12; i++) {
      if (i === 0) arr[i] = this.getRandom();
      else {
        while(true) {
          const num = this.getRandom();
          let flag = 0;
          for (let j = 0; j < i; j++) {
            if (arr[j] === num) {
              flag++
              break;
            }
          }
          if (flag === 0) {
            arr[i] = num;
            break;
          }
        }
      }
    }
    return arr;
  }

  getRandom() {
    return Math.floor(Math.random() * 12);
  }
  render() {
    return (
      <Wrap>
        <BackButton onClick={this.props.onClick}>홈으로</BackButton>
        <StyledBoard>
          {this.renderPuzzle(this.state.number[0])}
          {this.renderPuzzle(this.state.number[1])}
          {this.renderPuzzle(this.state.number[2])}
          {this.renderPuzzle(this.state.number[3])}

          {this.renderPuzzle(this.state.number[4])}
          {this.renderPuzzle(this.state.number[5])}
          {this.renderPuzzle(this.state.number[6])}
          {this.renderPuzzle(this.state.number[7])}

          {this.renderPuzzle(this.state.number[8])}
          {this.renderPuzzle(this.state.number[9])}
          {this.renderPuzzle(this.state.number[10])}
          {this.renderPuzzle(this.state.number[11])}
        </StyledBoard>
      </Wrap>
    );
  }
}

const StyledPuzzle = styled.div`
  background-color: ${props => (props.value ? '#313C52' : '#2B4872')};
  color: white;
  text-align: center;
`;
const Wrap = styled.div`
  position: absolute;
  top: 100px;
  width: 100%;
`;
const StyledBoard = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
  grid-auto-rows: minmax(120px, auto);
  width: 700px;
  margin: 0 auto;
`;

const BackButton = styled.div`
  background-color: #333333;
  color: white;
  text-align: center;
  width: 120px;
  height: 20px;
  padding: 15px;
  position: absolute;
  left: 50%;
  text-align: center;
  margin-left: -60px;
  margin-top: -10px;
  top: -70px;
  font-size: 100%;
`;
export default Board;
