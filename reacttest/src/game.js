import React from 'react';

  //普通react组件写法
  class Square extends React.Component {

    render() {
      return (
        <button className="square" onClick={() => this.props.onClick()}>
            {this.props.value}
        </button>
      );
    }
  }

  //函数式组件写法（不依赖state） 使用方式和上面的标准写法一样
  function SquareFun(props) {
    return (
      <button className="square" onClick={props.onClick}>
        {props.value}
      </button>
    );
  }

  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
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
        //不直接修改（或改变底层数据）
        //可实现一种叫做“时间旅行”的功能。“时间旅行”可以使我们回顾井字棋的历史步骤
        //不可变性最主要的优势在于它可以帮助我们在 React 中创建 pure components。我们可以很轻松的确定不可变数据是否发生了改变，从而确定何时对组件进行重新渲染。
        const squares = this.state.squares.slice();
        const winner = calculateWinner(this.state.squares);
        if(winner || squares[i]){
            //alert("checked")
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
      return <SquareFun value={this.state.squares[i]} onClick={() => this.handleClick(i)}/>;
    }
  
    render() {
      const winner = calculateWinner(this.state.squares);
      let status;
      if(winner){
        status = 'Winner: ' + winner;
      } else {
        status = 'Next player: ' + this.state.cur;
      }
      
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
  

  