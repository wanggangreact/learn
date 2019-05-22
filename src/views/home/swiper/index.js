import React, { Component } from 'react';
import './index.css';
import                axios from 'axios';
import { Carousel }         from 'antd';

class SwiperItem extends Component {
  constructor() {
    super();
    this.state = {
      swiperList: []
    }
  }
  componentDidMount() {
    let url = "http://localhost:3000/mock/swiper/index.json";
    axios.get(url).then(res => {
      if(res.status === 200) {
         this.setState({
           swiperList: res.data
         });
      } else {
         console.log("出错了！");
      }
    });
  }
  render() {
    return (
      <div className="swiper-wrapper">
         <Carousel autoplay>
            {
              this.state.swiperList.map((section, index) => {
                return (
                  <div key={index}>
                      {
                        section.map((v, i) => {
                          return (
                            <div className="item-section" key={i}>
                                <img alt="" className="icon" src={v.src} />
                                <div>
                                    <span className="bottom-text">{v.name}</span>
                                </div>
                            </div>
                          )
                        })
                      }
                  </div>
                )
              })
            }
         </Carousel>
      </div>
    );
  }
}

export default SwiperItem;
