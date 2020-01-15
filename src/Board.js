import React from "react";
import styled from "styled-components";

function Puzzle(props) {
  return (
    <StyledPuzzle onClick={props.onClick} value={props.value}>
      {props.value ? "1" : "0"}
    </StyledPuzzle>
  );
}

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      puzzles: Array(12).fill(false)
    };
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
      />
    );
  }
  render() {
    return (
      <Wrap>
        <StyledBoard>
          {this.renderPuzzle(0)}
          {this.renderPuzzle(1)}
          {this.renderPuzzle(2)}
          {this.renderPuzzle(3)}

          {this.renderPuzzle(4)}
          {this.renderPuzzle(5)}
          {this.renderPuzzle(6)}
          {this.renderPuzzle(7)}

          {this.renderPuzzle(8)}
          {this.renderPuzzle(9)}
          {this.renderPuzzle(10)}
          {this.renderPuzzle(11)}
        </StyledBoard>
      </Wrap>
    );
  }
}

const StyledPuzzle = styled.div`
  background-color: ${props => (props.value ? '#313C52' : '#2B4872')};
  color: white;
  border-radius: 8%;
  text-align: center
`;
const Wrap = styled.div`
  position: absolute;
  top: 200px;
  width: 100%;
`;
const StyledBoard = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
  grid-auto-rows: minmax(100px, auto);
  width: 500px;
  margin: 0 auto;
`;
export default Board;
