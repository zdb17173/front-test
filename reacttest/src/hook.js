import React, { useState, useEffect } from 'react';

//使用hook的写法
function CountHook() {
  // 声明一个叫 “count” 的 state 变量。
  const [count, setCount] = useState("a");

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 'a')}>
        Click me
      </button>
    </div>
  );
}

//此写法与上面的写法等价
class CountReact extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 'a'
      };
    }
  
    render() {
      return (
        <div>
          <p>You clicked {this.state.count} times</p>
          <button onClick={() => this.setState({ count: this.state.count + 'a' })}>
            Click me
          </button>
        </div>
      );
    }
  }


function Clock(){
    const [now, setNow] = useState(new Date());
    var timerID = setInterval(
        () => setNow(new Date()),
        1000
      );
    useEffect(() => {
         
        return () => {
            // console.log("clearInterval["+ timerID +"]");
            clearInterval(timerID);
        };
      });

    return (
        <div>
            <p>now is: {now.toLocaleTimeString()}</p>
        </div>
    );
}


function Count() {
  return (
    <div>
        <CountHook />
        <CountReact />
        <Clock />
    </div>
  );
}

export default Count;