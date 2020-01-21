import React from "react";
import styled from "styled-components";
import Puzzles0 from './JJanguPuzzle/0.jpg';
import Puzzles1 from './JJanguPuzzle/1.jpg';
import Puzzles2 from './JJanguPuzzle/2.jpg';
import Puzzles3 from './JJanguPuzzle/3.jpg';
import Puzzles4 from './JJanguPuzzle/4.jpg';
import Puzzles5 from './JJanguPuzzle/5.jpg';

function Puzzle(props) {
  return (
    <StyledPuzzle onClick={props.onClick} value={props.value} number={props.number} />
  );
}
class Board extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      puzzles: Array(12).fill(true),
      number: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
      clicked: 0,
      clickedPuzzle: Array(0).fill(null)
    };
  }
  componentDidMount() {
    this.setState({
      number: this.randomArrayGenerate()
    });
    setTimeout(() => this.initializing(), 1000);
  }
  initializing() {
    this.setState({
      puzzles: Array(12).fill(false)
    });
  }
  handleClick(i) {
    let puzzles = this.state.puzzles;
    let clickedPuzzle = this.state.clickedPuzzle;
    let clicked = this.state.clicked;

    if (puzzles[i] === false && clicked < 2) {
      puzzles[i] = true;
      clickedPuzzle.push(i);
      clicked++;
      this.setState({
        puzzles: puzzles,
        clicked: clicked,
        clickedPuzzle: clickedPuzzle
      });

      if (this.sameCard(clickedPuzzle[0], clickedPuzzle[1])) {
        console.log("같아");
        puzzles[clickedPuzzle[0]] = true;
        puzzles[clickedPuzzle[1]] = true;
        this.setState({
          puzzles: puzzles,
          clicked: 0,
          clickedPuzzle: Array(0).fill(null)
        });
        return;
      } else if (clicked === 2) {
        setTimeout(() => this.rollback(i), 300);
      }
    }
  }
  rollback(i) {
    let puzzles = this.state.puzzles;
    let clickedPuzzle = this.state.clickedPuzzle;
    puzzles[clickedPuzzle[0]] = false;
    puzzles[clickedPuzzle[1]] = false;
    clickedPuzzle.pop();
    clickedPuzzle.pop();
    this.setState({
      puzzles: puzzles,
      clicked: 0,
      clickedPuzzle: clickedPuzzle
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
        while (true) {
          const num = this.getRandom();
          let flag = 0;
          for (let j = 0; j < i; j++) {
            if (arr[j] === num) {
              flag++;
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
  sameCard(card1, card2) {
    if (card1 - card2 === 1) {
      if (card1 % 2 === 1) {
        return true;
      }
    } else if (card2 - card1 === 1) {
      if (card2 % 2 === 1) {
        return true;
      }
    } else {
      return false;
    }
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
  background-color: ${props => (props.value ? "#313C52" : "#2B4872")};
  background-image: url(${props => props.value ?
      props.number === 0 || props.number === 1
        ? Puzzles0
        : props.number === 2 || props.number === 3
        ? Puzzles1
        : props.number === 4 || props.number === 5
        ? Puzzles2
        : props.number === 6 || props.number === 7
        ? Puzzles3
        : props.number === 8 || props.number === 9
        ? Puzzles4
        : props.number === 10 || props.number === 11
        ? Puzzles5 : null : null});
  background-repeat: no-repeat;
  background-size: cover;
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
