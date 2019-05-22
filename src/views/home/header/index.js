import React, { Component } from 'react';
import './index.css';

class Header extends Component {
  render() {
    return (
      <div className="header-wrapper">
         <div className="city">上海</div>
         <div className="search">请输入，吃的，喝的</div>
         <div className="self">
             <div className="self-circle"></div>
         </div>
      </div>
    );
  }
}

export default Header;