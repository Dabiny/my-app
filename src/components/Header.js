import React from "react";
import logo from '../logo.svg';

const Header = (props) => { // 자식컴포넌트
  // props는 객체다.  .연산자로 접근가능 읽기전용이고 수정해서는 안된다. 
  return (
    <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <p>
      Edit <code>src/App.js</code> and save to reload.
      Yahoo !!!!!
    </p>
    <p class="aaa"/> 
    <a
      className="App-link"
      href="https://reactjs.org"
      target="_blank"
      rel="noopener noreferrer"
    >
      {props.title}
    </a>
    
  </header>
)
}

export default Header;