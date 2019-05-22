import React, { Component } from 'react';
import './index.css';

class HeaderLine extends Component {
  render() {
    return (
      <div className="header-line-wrapper">
         <div className="wrapper">
             <div className="title">
                 <span>吃喝玩乐，找优惠</span>
             </div>
             <div className="btns">
                 <span className="open">打开大众点评</span>
                 <span className="download">下载APP享特价</span>
             </div>
         </div>
      </div>
    );
  }
}

export default HeaderLine;