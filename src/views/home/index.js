
import React, { Component } from 'react';
import Header     from './header';
// import Discount   from './header';
import HeaderLine from './headerLine';
import SwiperItem from './swiper';
// import LikeList   from './likeList';

class Entry extends Component {
  render() {
    return (
      <div className="PPA">
          <Header />
          <HeaderLine />
          <SwiperItem />
      </div>
    )
  }
}

export default Entry;




