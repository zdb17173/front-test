import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import Game from './game';
import ShoppingList from './shopping';
import Clock from './clock';
import Toggle from './Toggle';
import NumberList from './list';
import Calculator from './Temperature'
import Extendtest from './extendtest'


const numbers = [
  {name:'1n', id:1}, 
  {name:'2n', id:2}, 
  {name:'3n', id:3}, 
  {name:'4n', id:4},
  {name:'5n', id:5}];

ReactDOM.render(
  <div>
  <h2>三连小游戏</h2>
  <Game />
  <h2>组件概念</h2>
  <ShoppingList name={"dsa"} />
  <h2>测试定时执行</h2>
  <Clock />
  <h2>事件处理函数传值</h2>
  <Toggle />
  <h2>列表</h2>
  <NumberList numbers={numbers} />
  <h2>状态提升</h2>
  <Calculator />
  <h2>组合和继承</h2>
  <Extendtest />
  </div>,
  document.getElementById('root'),
);


// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
