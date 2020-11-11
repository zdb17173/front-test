import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Game from './game';
import ShoppingList from './shopping';
import Clock from './clock';
import Toggle from './Toggle';
import NumberList from './list';


const numbers = [
  {name:'1n', id:1}, 
  {name:'2n', id:2}, 
  {name:'3n', id:3}, 
  {name:'4n', id:4},
  {name:'5n', id:5}];

ReactDOM.render(
  <div>
  <Game />,
  <ShoppingList name={"dsa"} />,
  <Clock />,
  <Toggle />,
  <NumberList numbers={numbers} />,
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
