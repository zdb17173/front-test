import React from 'react';

class Square extends React.Component {

    render() {
      return (
        <button className="square" onClick={() => this.props.onClick()}>
            {this.props.value}
        </button>
      );
    }
  }
  
  class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cur: 'X',
            squares: Array(9).fill(null),
        };
    }

    handleClick(i) {
        const squares = this.state.squares.slice();
        if(squares[i]){
            alert("checked")
            return;
        }
        squares[i] = this.state.cur;
        if(this.state.cur === 'X')
            this.setState({cur :'O'});
        else   
            this.setState({cur :'X'});

        this.setState({squares: squares});
    }

    renderSquare(i) {
      return <Square value={this.state.squares[i]} onClick={() => this.handleClick(i)}/>;
    }
  
    render() {
      const status = 'Next player: ' + this.state.cur;
  
      return (
        <div>
          <div className="status">{status}</div>
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
        </div>
      );
    }
  }
  
  class Game extends React.Component {

    constructor(props) {
        super(props);
        this.state = {}
      }


    render() {
      const pathname = window.location.pathname;
      return (
        <div className="game">
          <div className="game-board">
            <Board />
          </div>
          <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
            <div>{pathname}</div>
          </div>
        </div>
      );
    }
  }
  
  export default Game;
  // ========================================
  

  