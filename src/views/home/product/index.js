import React, { Component } from 'react';
import './index.css';
import   axios              from 'axios';

class ProductList extends Component {
    constructor() {
        super();
        this.state = {
          productList: []
        }
      }
      componentDidMount() {
        let url = "http://localhost:3000/mock/products/likes.json";
        axios.get(url).then(res => {
          if(res.status === 200) {
             this.setState({
                productList: res.data
             });
             console.log(this.state.productList);
          } else {
             console.log("出错了！");
          }
        });
      }

  render() {
    return (
      <div className="J_cnxh Js_cnxh">
        <div className="bord"></div>
        <div className="index_for_you J_index_for_you">

        
          <div className="index_like_title">猜你喜欢</div>
          <div className="index_content J_index_content">
              <div>
                   {
                this.state.productList.map((section, index) => {
                    return (
                        <a className="index_content_item standard_content_item" key={index}>
                            <div className="pic">
                                <div  className="pic_tag"
                                    style={{color:"#e5bf86"}}>
                                    {section.tag}                  
                                </div>  
                                <img src = {section.picture}  width="90px" height="90px"/>
                            </div>   
                            <div className="content">
                                <div className="shop_name_main">
                                    <div className="shop_name" style={{maxWidth: "252px"}}>
                                        {section.shop}    
                                    </div>
                                    <div className="shop_tags" style={{width: "8px"}}>
                                        
                                    </div>
                                </div>
                                <div className="shop_name_sub">
                                    {section.product}                  
                                </div>
                                <div className="item_price">
                                    <div className="price_related">
                                        
                                        <ins className="price_current">
                                            {section.currentPrice}
                                        </ins>
                                        <ins className="price_old">
                                            {section.oldPrice}
                                        </ins>
                                    </div>
                                    <div className="sale_desc">
                                        {section.saleDesc}  
                                    </div>
                                </div>
                            </div> 
                           
                        </a>
                    )
                })
            }
              </div>
           
          </div>
        </div>
      </div>
    );
  }
}

export default ProductList;

