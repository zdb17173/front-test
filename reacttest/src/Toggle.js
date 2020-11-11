import React from 'react';


class Toggle extends React.Component {
    constructor(props) {
      super(props);
      this.state = {isToggleOn: true};
  
      // 为了在回调中使用 `this`，这个绑定是必不可少的
      this.handleClick = this.handleClick.bind(this);
    }
  
    //必须使用bind在constructor中进行设置 或this.handleClick.bind(this, id)
    handleClick(arg) {
      console.log(arg)
      this.setState(state => ({
        isToggleOn: !state.isToggleOn
      }));
    }

    //不适用bind，使用onClick={(e) => this.handleClick1()}
    handleClick1(arg) {
        console.log(arg)
        this.setState(state => ({
          isToggleOn: !state.isToggleOn
        }));
      }
  
    render() {
      return (
        <div>
            <button onClick={this.handleClick}>
                {this.state.isToggleOn ? 'ON' : 'OFF'}
            </button>
            <button onClick={(e) => this.handleClick1(1)}>
                {this.state.isToggleOn ? 'ON' : 'OFF'}
            </button>
            <button onClick={this.handleClick1.bind(this, 1)}>
                {this.state.isToggleOn ? 'ON' : 'OFF'}
            </button>
        </div>
      );
    }
  }

  export default Toggle;