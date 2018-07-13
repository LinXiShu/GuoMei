import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import './banner.css';
import '../../static/fonts/hfhfont/iconfont.css';
import {Router, Route, hashHistory, Link, IndexRoute, browserHistory} from 'react-router-dom';
import $ from 'jquery';

import LazyLoad from 'react-lazy-load';

import LazyLoads from 'react-lazyload';

import PropTypes from 'prop-types';
import Lunbotu from '../../static/js/lbt'

var shujuaaa;

class Banner extends Component {
    constructor(props) {
        super(props);
      
        this.state = {
            bool:true
            
        };

    }   

    states = {

        id : '001',
    }

    showTab(){
   
        this.setState({bool:!this.state.bool})
    }
    componentDidMount(){
        var thisxa = this;
        this.states = thisxa.context.router.history.location.state.id;

        var html1 = '';

        function Html(val){
            return  `<div class="title">
                            <div class="title_content  to_detail">
                                <div class="title_content_left">
                                    
                                    <p class="title_text"><span>自营</span>
                                    ${val.name}
                                    </p>
                                </div>

                                <div class="title_content_right">
                                    <i class="iconfont icon-skip"></i>
                                    <p>分享</p>
                                </div>
                               
                            </div>
                            <p class="desc_text ellipsis_two">${val.name1}
                                <a href="//prom.m.gome.com.cn/html/prodhtml/topics/201806/25/sale3BeFlUJRyEe.html?urlType=001">【国美盛典&nbsp; 彩电专场】
                                </a> 
                            </p>

                            <p class="price">
                            ¥<span>${val.price}</span>
                            </p>
                           
                        </div>`
        }

                $.ajax({
                    url: 'http://10.3.134.52:1898/jr_carss',
                    type: 'GET',
                    data: {

                        id : this.states,
                    }, success : function(data){

                        console.log(data);
                        shujuaaa = data;
                        $.each(data, function(index, val){
                            html1 += Html(val);
                        });
                        $('.info_moudle').html('');
                        $('.info_moudle').html(html1);

                    }
                })


        $('.span2_1').on('click', function(){
            console.log(123);

                let cookies = document.cookie;
                console.log(cookies,123213);

                $.ajax({
                    url: 'http://10.3.134.52:1898/jr_car',
                    type: 'GET',
                    data: {
                        id : thisxa.states,
                        username : document.cookie,
                    }, success : function(data){

                        console.log(data);
                    }
                })
        })


     
        
    }
    render() {
        return(
            <div className="detail_item">
                <div className="data11">


                <div className="data22">
                    <div className="banner">
                        <div className="banner_img">

                            <LazyLoad height={2400} once overflow = {true}>
                                <Lunbotu />
                            </LazyLoad>

                        </div>
                    </div>


                    <div className="moudle info_moudle">
                        
                    </div>
                </div>


                    <div className="moudle standard_moudle">
                        <div className="standard_cont flexbox tt">
                            <label className="label">已选</label>
                            <div className="flex1" id="guige_selected">
                                    <p className="standard_title ellipsis_two">
                                        <span> 55英寸4K-55EC500U</span>
                                        <span>1个</span>
                                        <span id="atg"><i className="iconfont icon-more"></i></span>
                                    </p>
                                   
                                  
                            </div>
      
                        </div>
                       <div className="standard_cont flexbox bb" id="guige_selected_tuijian">
                           <label className="label">推荐</label>
                           <div className="flex1">
                              <p className="service_txt tip">增值服务 搭配购</p>
                            </div>
                        </div>
                    </div>

                    <div className="moudle address_moudle address_moudleModify">
                        <div className="address_cont address_cont_style flexbox">
                            <label className="label">送至</label>
                            <div className="flex1 ellipsis">
                                
                                <p className="ellipsis address address_select_end address_new">
                                    <span className="address_sub">朝外街道</span>
                                    <span className="dec" >
                                        <font>
                                            <span className="yunfei">，免运费</span>，
                                            <span className="shijian"> 明日01:00:00前完成下单，预计周六（07月14日）送达</span>
                                           
                                        </font>
                                    </span>
                                </p>
                            </div> 

                            <i className="iconfont icon-more"></i>

                           
                           
                        </div>
                        
                        <div className="service_info service_info_new " >
                            <ul className="sendExplain" >
                                
                                <li>
                                    <span>货到付款</span>
                                </li>
                                <li>
                                    <span >支持15天无理由退货</span>
                                </li>
                                <li>
                                    <span>包邮</span>
                                </li>
                            </ul>
                        </div>
                    </div>


                    <div className="moudle store_moudle flexbox">
                        <div className="label">
                            <span>朝阳区</span>门店
                            <span className="dizhi">北京国美西坝河店</span>
                        </div>
                       
                    </div>


                    <div className="footers">

                        <span className="spanss"><i className="iconfont icon-iconfontxingxing"></i><br />收藏</span>
                        <span className="spanss"><i className="iconfont icon-shouye5"></i><br />购物车</span>
                        <span className="spanss span2 span2_1">加入购物车</span>
                        <span className="spanss span2 span2_2">立即购买</span>
                    </div>
                </div>
            </div>
                
              
           

        );
    }
}

Banner.contextTypes = {

    router: PropTypes.object.isRequired
}

export default Banner;