


import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import '../../css/index.css';

import Lbt from '../../js/lbt';

import ReactSwipe from 'react-swipe';

import $ from 'jquery';

import LazyLoad from 'react-lazy-load';

import LazyLoads from 'react-lazyload';

import IndexXiaLa from './indexXiaLa';


let swopeOptions = {
    continuous: true, speed: 400,
    auto: 2000, 
    disableScroll: false,
    showPagination: false,
    callback:function(){

   } 
}


class InndexMain extends React.Component{
    
    componentDidMount(){

        let html1 ='<ReactSwipe className="carousel" swipeOptions={{continuous: true, speed: 400, disableScroll: false}}>';
        let html2 ='';
        let html3 ='';

            $.ajax({
                url: 'http://localhost:1898/products',
                dataType: 'json',
                data: {
                    classa : 1,
                },
                success: function(res){
                    console.log(res);
                    var No1_data = res;
                    $.each(res, function(index, val){
                        html1 += Html1(val);

                    });
                    html1 += '</ReactSwipe>';
                    console.log(html1)
                       $('.GM_zhidemai_xia').html('');
                       $('.GM_zhidemai_xia').html(html1);  
                }   
            });

            $.ajax({
                url: 'http://localhost:1898/products',
                dataType: 'json',
                data: {
                    classa : 2,
                },
                success: function(res){

                    console.log(res);
                    var No2_data = res;
                    $.each(res.data, function(index, val){

                    });
                }
            });

            $.ajax({
                url: 'http://localhost:1898/products',
                dataType: 'json',
                data: {
                    classa : 3,
                },
                success: function(res){

                    console.log(res);
                    var No3_data = res;
                    $.each(res.data, function(index, val){

                    });
                }
            });

        function Html1(val){
            return `<center>
            <div class="box1" >
                <img src="${val.photo}" />
                <span>￥${val.price}</span><br />
                <span>仅剩:${val.qty}件</span>
                </div></center>
            `
        }
   

    }

    render(){
        return (
            <div className="Main" id="main">
                
                <div className="Main_lbt">

                    <div className="lunbotu">

                         <Lbt />

                    </div>

                    <div className="lbt_xia"></div>

                    <div className="lbt_xiaxia">

                        <ReactSwipe className="carousel" swipeOptions={{continuous: true, speed: 400, disableScroll: false}}>

                            <div className="long1 l1_1">
                                <a href="#" className="l1_1_a">
                                    <img src="//gfs8.gomein.net.cn/T1JeL_BjdT1RCvBVdK.png" className="l1_1_img" />
                                    <span className="l1_1_span">国美</span>
                                </a>

                                <a href="#" className="l1_1_a">
                                    <img src="//gfs7.gomein.net.cn/T11PJQBmAT1RCvBVdK.png" className="l1_1_img" />
                                    <span className="l1_1_span">手机电脑</span>
                                </a>

                                <a href="#" className="l1_1_a"> 
                                    <img src="//gfs6.gomein.net.cn/T19vZgBKWv1RCvBVdK.png" className="l1_1_img" />
                                    <span className="l1_1_span">国美电器</span>
                                </a>
                                <a href="#" className="l1_1_a">
                                     <img src="//gfs9.gomein.net.cn/T1f6YQB4Wv1RCvBVdK.png" className="l1_1_img" />
                                    <span className="l1_1_span">国美超市</span>
                                </a>
                                <a href="#" className="l1_1_a">
                                     <img src="//gfs8.gomein.net.cn/T148YgBmh_1RCvBVdK.png" className="l1_1_img" />
                                    <span className="l1_1_span">国美百货</span>
                                </a>
                                <a href="#" className="l1_1_a">
                                     <img src="//gfs5.gomein.net.cn/T1EmCQBbhT1RCvBVdK.png" className="l1_1_img" />
                                    <span className="l1_1_span">国美金融</span>
                                </a>
                                <a href="#" className="l1_1_a">
                                     <img src="//gfs8.gomein.net.cn/T1Jy_sBmVT1RCvBVdK.png" className="l1_1_img" />
                                    <span className="l1_1_span">充值服务</span>
                                </a>
                                <a href="#" className="l1_1_a">
                                     <img src="//gfs5.gomein.net.cn/T1c.DbBX_v1RCvBVdK.png" className="l1_1_img" />
                                    <span className="l1_1_span">国美家装</span>
                                </a>
                                <a href="#" className="l1_1_a">
                                     <img src="//gfs5.gomein.net.cn/T1y7JbBmVT1RCvBVdK.png" className="l1_1_img" />
                                    <span className="l1_1_span">领劵中心</span>
                                </a>
                                <a href="#" className="l1_1_a">
                                     <img src="//gfs7.gomein.net.cn/T1.PEjB4Zv1RCvBVdK.png" className="l1_1_img" />
                                    <span className="l1_1_span">我的</span>
                                </a>

                            </div>
                            <div className="long1 l1_2">
                            <a href="#" className="l1_1_a">
                                <img src="//gfs8.gomein.net.cn/T1JeL_BjdT1RCvBVdK.png" className="l1_1_img" />
                                <span className="l1_1_span">国美</span>
                            </a>

                            <a href="#" className="l1_1_a">
                                <img src="//gfs7.gomein.net.cn/T11PJQBmAT1RCvBVdK.png" className="l1_1_img" />
                                <span className="l1_1_span">手机电脑</span>
                            </a>

                            <a href="#" className="l1_1_a"> 
                                <img src="//gfs6.gomein.net.cn/T19vZgBKWv1RCvBVdK.png" className="l1_1_img" />
                                <span className="l1_1_span">国美电器</span>
                            </a>
                            <a href="#" className="l1_1_a">
                                 <img src="//gfs9.gomein.net.cn/T1f6YQB4Wv1RCvBVdK.png" className="l1_1_img" />
                                <span className="l1_1_span">国美超市</span>
                            </a>
                            <a href="#" className="l1_1_a">
                                 <img src="//gfs8.gomein.net.cn/T148YgBmh_1RCvBVdK.png" className="l1_1_img" />
                                <span className="l1_1_span">国美百货</span>
                            </a>
                            <a href="#" className="l1_1_a">
                                 <img src="//gfs5.gomein.net.cn/T1EmCQBbhT1RCvBVdK.png" className="l1_1_img" />
                                <span className="l1_1_span">国美金融</span>
                            </a>
                            <a href="#" className="l1_1_a">
                                 <img src="//gfs8.gomein.net.cn/T1Jy_sBmVT1RCvBVdK.png" className="l1_1_img" />
                                <span className="l1_1_span">充值服务</span>
                            </a>
                            <a href="#" className="l1_1_a">
                                 <img src="//gfs5.gomein.net.cn/T1c.DbBX_v1RCvBVdK.png" className="l1_1_img" />
                                <span className="l1_1_span">国美家装</span>
                            </a>
                            <a href="#" className="l1_1_a">
                                 <img src="//gfs5.gomein.net.cn/T1y7JbBmVT1RCvBVdK.png" className="l1_1_img" />
                                <span className="l1_1_span">领劵中心</span>
                            </a>
                            <a href="#" className="l1_1_a">
                                 <img src="//gfs7.gomein.net.cn/T1.PEjB4Zv1RCvBVdK.png" className="l1_1_img" />
                                <span className="l1_1_span">我的</span>
                            </a>
                            </div>
                            
                        </ReactSwipe>

                    </div>


                    <div className="shangxia_gundong">
                          <img src="//gfs7.gomein.net.cn/T1Bix_BsxT1RCvBVdK.png" className="shangxia_gundong_span" />
                          <div className="shangxia_gundong_div">
                              <div className="sheng_long">
                                满99立减50，满188立减500元
                              </div>
                          </div>
                    </div>

                    <div className="GM_qianggou">
                        
                        <div className="GM_miaosha">
                            <span className="GM_miaosha_ms">国美秒杀</span>
                            <span className="">&nbsp;&nbsp;&nbsp;20点开抢&nbsp;&nbsp;&nbsp;</span>
                            <span>20:00:00</span>
                        </div>
                        <div className="GM_zhidemai">
                            <div className="GM_zhidemai_xia">
                                
                            </div>
                        </div>
                    </div>



                    <div className="tejia">
                        <span  className="tejia_span">品牌特卖</span>
                        <div  className="tejia_div">

                            <div className="tejia_photo"><img src="//gfs12.gomein.net.cn/T147bjBsCT1RCvBVdK.jpg" /></div>
                            <div className="tejia_photo"><img src="//gfs10.gomein.net.cn/T1j2bjBsCT1RCvBVdK.jpg" /></div>
                            <div className="tejia_photo"><img src="//gfs10.gomein.net.cn/T1TabQBXdv1RCvBVdK.jpg" /></div>
                            <div className="tejia_photo"><img src="//gfs10.gomein.net.cn/T1KyL_B_DT1RCvBVdK.jpg" /></div>

                        </div>
                    </div>


                    <div className="pintuan">

                        <div className="pintuan_1">
                            <a href="#" className="pintuan_span"><img src="//gfs12.gomein.net.cn/T1UADgBKDv1RCvBVdK.jpg" /></a>
                            <a href="#" className="pintuan_span"><img src="//gfs8.gomein.net.cn/T1CcJjBTYT1RCvBVdK.jpg" /></a>
                            <a href="#" className="pintuan_span"><img src="//gfs11.gomein.net.cn/T1cBZQBsbT1RCvBVdK.jpg" /></a>
                            <a href="#" className="pintuan_span"><img src="//gfs6.gomein.net.cn/T1uDdjBvxT1RCvBVdK.jpg" /></a>
                        </div>
                        <div className="pintuan_2">
                            <a href="#" className="pintuan2_span"><img src="//gfs13.gomein.net.cn/T1q8xgB7Cv1RCvBVdK.jpg" /></a>
                            <a href="#" className="pintuan2_span"><img src="//gfs11.gomein.net.cn/T1o_AgBjdT1RCvBVdK.jpg" /></a>
                            <a href="#" className="pintuan2_span"><img src="//gfs11.gomein.net.cn/T1_7YQB7LT1RCvBVdK.jpg" /></a>
                            <a href="#" className="pintuan2_span"><img src="//gfs12.gomein.net.cn/T162_jBsbT1RCvBVdK.jpg" /></a>
                        </div>
                    </div>


                    <div className="long3" >

                          <ReactSwipe className="lunbotu1" swipeOptions={swopeOptions} >
                                <div><img src="//gfs10.gomein.net.cn/T1lbAgBKLT1RCvBVdK.png" width="100%" className="lbt lb1" /></div>
                                <div><img src="//gfs7.gomein.net.cn/T1q8EjBjLv1RCvBVdK.jpg" width="100%" className="lbt lb2" /></div>
                                <div><img src="//gfs8.gomein.net.cn/T1ffWQB7VT1RCvBVdK.jpg" width="100%" className="lbt lb2" /></div>
                              
                          </ReactSwipe>
                    </div>


                    <span className="long4"><img src="//gfs13.gomein.net.cn/T1rKZgBKDv1RCvBVdK.png" /></span>

                    <div className="long5">
                        <img src="//gfs12.gomein.net.cn/T1bjAvBmZv1RCvBVdK.jpg" />
                    </div>

                    <div className="jinxuana">
                       <ReactSwipe className="lunbotu1" swipeOptions={{continuous: true, speed: 400,disableScroll: false,showPagination: false}} >
                        <div >
                        <div className="jianxuana_xia"><center><div className="img_xiaoxiao">  <LazyLoad offsetTop={500} className="" ><img src="//gfs17.gomein.net.cn/T12YWgBKdv1RCvBVdK_160.jpg" width="100%"/></LazyLoad></div><span className="spanssa">荣耀10 AI摄影</span><br/><span className="￥">￥1099</span></center></div>
                        <div className="jianxuana_xia"><center><div className="img_xiaoxiao">  <LazyLoad offsetTop={500} className="" ><img src="//gfs17.gomein.net.cn/T1uLEvB_D_1RCvBVdK_160.jpg" width="100%"/></LazyLoad></div><span className="spanssa">双面玻璃 无线充电</span><br/><span className="￥">￥1299</span></center></div>
                        <div className="jianxuana_xia"><center><div className="img_xiaoxiao">  <LazyLoad offsetTop={500} className="" ><img src="//gfs17.gomein.net.cn/T1wpA_BvxT1RCvBVdK_160.jpg" width="100%"/></LazyLoad></div><span className="spanssa">全面屏 送话费</span><br/><span className="￥">￥2099</span></center></div>
                       </div>
                            <div >
                            <div className="jianxuana_xia"><center><div className="img_xiaoxiao">  <img src="//gfs17.gomein.net.cn/T1qhEvBQZT1RCvBVdK_160.jpg" width="100%"/></div><span className="spanssa">面部ID 全面屏</span><br/><span className="￥">￥2999</span></center></div>
                            <div className="jianxuana_xia"><center><div className="img_xiaoxiao">  <img src="//gfs17.gomein.net.cn/T1jvKjB4Lv1RCvBVdK_160.jpg" width="100%"/></div><span className="spanssa">全面屏 柔光自拍</span><br/><span className="￥">￥5535</span></center></div>
                            <div className="jianxuana_xia"><center><div className="img_xiaoxiao">  <img src="//gfs17.gomein.net.cn/T1FkJgBmVT1RCvBVdK_160.jpg" width="100%"/></div><span className="spanssa">大容量 全面屏</span><br/><span className="￥">￥2099</span></center></div>
                       </div>
                            <div >
                            <div className="jianxuana_xia"><center><div className="img_xiaoxiao">  <img src="//gfs17.gomein.net.cn/T1qabbB7dT1RCvBVdK_160.jpg" width="100%"/></div><span className="spanssa">大容量 全面屏</span><br/><span className="￥">￥2999</span></center></div>
                            <div className="jianxuana_xia"><center><div className="img_xiaoxiao">  <img src="//gfs17.gomein.net.cn/T1NEhQBCxT1RCvBVdK_160.jpg" width="100%"/></div><span className="spanssa">双面玻璃 无线充电</span><br/><span className="￥">￥1099</span></center></div>
                            <div className="jianxuana_xia"><center><div className="img_xiaoxiao">  <img src="//gfs17.gomein.net.cn/T1FkJgBmVT1RCvBVdK_160.jpg" width="100%"/></div><span className="spanssa">物美价廉 真实惠</span><br/><span className="￥">￥1300</span></center></div>
                       </div>
                       </ReactSwipe>
                    </div>

                    <div className="chihuo">
                        <img src="//gfs12.gomein.net.cn/T1CgCjB_LT1RCvBVdK.jpg" />
                    </div>

                    <div className="chihuo_xia">
                           <ReactSwipe className="lunbotu1" swipeOptions={{continuous: true, speed: 400,disableScroll: false,showPagination: false}} >
                        <div >
                        <div className="jianxuana_xia"><center><div className="img_xiaoxiao">  <LazyLoad offsetTop={500} className="" ><img src="//gfs17.gomein.net.cn/T1YobgBsbT1RCvBVdK_160.jpg" width="100%"/></LazyLoad></div><span className="spanssa">荣耀10 AI摄影</span><br/><span className="￥">￥1099</span></center></div>
                        <div className="jianxuana_xia"><center><div className="img_xiaoxiao">  <LazyLoad offsetTop={500} className="" ><img src="//gfs17.gomein.net.cn/T14NhjBKbT1RCvBVdK_160.jpg" width="100%"/></LazyLoad></div><span className="spanssa">双面玻璃 无线充电</span><br/><span className="￥">￥1299</span></center></div>
                        <div className="jianxuana_xia"><center><div className="img_xiaoxiao">  <LazyLoad offsetTop={500} className="" ><img src="//gfs17.gomein.net.cn/T1t2DgBmJv1RCvBVdK_160.jpg" width="100%"/></LazyLoad></div><span className="spanssa">全面屏 送话费</span><br/><span className="￥">￥2099</span></center></div>
                       </div>
                            <div >
                            <div className="jianxuana_xia"><center><div className="img_xiaoxiao"><img src="//gfs17.gomein.net.cn/T1QFdQByxv1RCvBVdK_160.jpg" width="100%"/></div><span className="spanssa">面部ID 全面屏</span><br/><span className="￥">￥2999</span></center></div>
                            <div className="jianxuana_xia"><center><div className="img_xiaoxiao"><img src="//gfs17.gomein.net.cn/T1P0xvBXbv1RCvBVdK_160.jpg" width="100%"/></div><span className="spanssa">全面屏 柔光自拍</span><br/><span className="￥">￥5535</span></center></div>
                            <div className="jianxuana_xia"><center><div className="img_xiaoxiao"><img src="//gfs17.gomein.net.cn/T1MPbbBjDT1RCvBVdK_160.jpg" width="100%"/></div><span className="spanssa">大容量 全面屏</span><br/><span className="￥">￥2099</span></center></div>
                       </div>
                            <div >
                            <div className="jianxuana_xia"><center><div className="img_xiaoxiao"><img src="//gfs17.gomein.net.cn/T1CsYjBCET1RCvBVdK_160.jpg" width="100%"/></div><span className="spanssa">大容量 全面屏</span><br/><span className="￥">￥2999</span></center></div>
                            <div className="jianxuana_xia"><center><div className="img_xiaoxiao"><img src="//gfs17.gomein.net.cn/T1CsYjBCET1RCvBVdK_160.jpg" width="100%"/></div><span className="spanssa">双面玻璃 无线充电</span><br/><span className="￥">￥1099</span></center></div>
                            <div className="jianxuana_xia"><center><div className="img_xiaoxiao"><img src="//gfs17.gomein.net.cn/T1kbhgBKdT1RCvBVdK_160.jpg" width="100%"/></div><span className="spanssa">物美价廉 真实惠</span><br/><span className="￥">￥1300</span></center></div>
                       </div>
                       </ReactSwipe>
                    </div>

                    <div className="jiebei">
                        <img src="//gfs9.gomein.net.cn/T1CUCsByEv1RCvBVdK.jpg" />
                    </div>

                    <div className="jiebei_xia">
                    <ReactSwipe className="lunbotu1" swipeOptions={{continuous: true, speed: 400,disableScroll: false,showPagination: false}} >
                     <div >
                     <div className="jianxuana_xia"><center><div className="img_xiaoxiao"><LazyLoad offsetTop={500} className="" ><img src="//gfs17.gomein.net.cn/T1NSLgB4xT1RCvBVdK_160.jpg" width="100%"/></LazyLoad></div><span className="spanssa">荣耀10 AI摄影</span><br/><span className="￥">￥1099</span></center></div>
                     <div className="jianxuana_xia"><center><div className="img_xiaoxiao"><LazyLoad offsetTop={500} className="" ><img src="//gfs17.gomein.net.cn/T1BR_QBjYT1RCvBVdK_160.jpg" width="100%"/></LazyLoad></div><span className="spanssa">双面玻璃 无线充电</span><br/><span className="￥">￥1299</span></center></div>
                     <div className="jianxuana_xia"><center><div className="img_xiaoxiao"><LazyLoad offsetTop={500} className="" ><img src="//gfs17.gomein.net.cn/T1e0xbBmdT1RCvBVdK_160.jpg" width="100%"/></LazyLoad></div><span className="spanssa">全面屏 送话费</span><br/><span className="￥">￥2099</span></center></div>
                    </div>
                         <div >
                         <div className="jianxuana_xia"><center><div className="img_xiaoxiao"><img src="//gfs17.gomein.net.cn/T1vhY_B4ZT1RCvBVdK_160.jpg" width="100%"/></div><span className="spanssa">面部ID 全面屏</span><br/><span className="￥">￥2999</span></center></div>
                         <div className="jianxuana_xia"><center><div className="img_xiaoxiao"><img src="//gfs17.gomein.net.cn/T1jEEjB4ZT1RCvBVdK_160.jpg" width="100%"/></div><span className="spanssa">全面屏 柔光自拍</span><br/><span className="￥">￥5535</span></center></div>
                         <div className="jianxuana_xia"><center><div className="img_xiaoxiao"><img src="//gfs17.gomein.net.cn/T1ftJjB4YT1RCvBVdK_160.jpg" width="100%"/></div><span className="spanssa">大容量 全面屏</span><br/><span className="￥">￥2099</span></center></div>
                    </div>
                         <div >
                         <div className="jianxuana_xia"><center><div className="img_xiaoxiao"><img src="//gfs17.gomein.net.cn/T1gKLgBgLv1RCvBVdK_160.jpg" width="100%"/></div><span className="spanssa">大容量 全面屏</span><br/><span className="￥">￥2999</span></center></div>
                         <div className="jianxuana_xia"><center><div className="img_xiaoxiao"><img src="//gfs17.gomein.net.cn/T1HoVQBjWT1RCvBVdK_160.jpg" width="100%"/></div><span className="spanssa">双面玻璃 无线充电</span><br/><span className="￥">￥1099</span></center></div>
                         <div className="jianxuana_xia"><center><div className="img_xiaoxiao"><img src="//gfs17.gomein.net.cn/T1jEEjB4ZT1RCvBVdK_160.jpg" width="100%"/></div><span className="spanssa">物美价廉 真实惠</span><br/><span className="￥">￥1300</span></center></div>
                    </div>
                    </ReactSwipe>
                    </div>

                    <div className="diannao">
                        <img src="//gfs10.gomein.net.cn/T1aOEjBQdT1RCvBVdK.jpg" />
                    </div>

                    <div className="diannao_xia">
                           <ReactSwipe className="lunbotu1" swipeOptions={{continuous: true, speed: 400,disableScroll: false,showPagination: false}} >
                        <div >
                        <div className="jianxuana_xia"><center><div className="img_xiaoxiao"><LazyLoad offsetTop={500} className="" ><img src="//gfs17.gomein.net.cn/T1PmETBCCT1RCvBVdK_160.jpg" width="100%"/></LazyLoad></div><span className="spanssa">荣耀10 AI摄影</span><br/><span className="￥">￥1099</span></center></div>
                        <div className="jianxuana_xia"><center><div className="img_xiaoxiao"><LazyLoad offsetTop={500} className="" ><img src="//gfs17.gomein.net.cn/T1KUVvB4Yv1RCvBVdK_160.jpg" width="100%"/></LazyLoad></div><span className="spanssa">双面玻璃 无线充电</span><br/><span className="￥">￥1299</span></center></div>
                        <div className="jianxuana_xia"><center><div className="img_xiaoxiao"><LazyLoad offsetTop={500} className="" ><img src="//gfs17.gomein.net.cn/T1QA__Bmhv1RCvBVdK_160.jpg" width="100%"/></LazyLoad></div><span className="spanssa">全面屏 送话费</span><br/><span className="￥">￥2099</span></center></div>
                       </div>
                            <div >
                            <div className="jianxuana_xia"><center><div className="img_xiaoxiao"><img src="//gfs17.gomein.net.cn/T1AEKsB5Wv1RCvBVdK_160.jpg" width="100%"/></div><span className="spanssa">面部ID 全面屏</span><br/><span className="￥">￥2999</span></center></div>
                            <div className="jianxuana_xia"><center><div className="img_xiaoxiao"><img src="//gfs17.gomein.net.cn/T12QbvB_dT1RCvBVdK_160.jpg" width="100%"/></div><span className="spanssa">全面屏 柔光自拍</span><br/><span className="￥">￥5535</span></center></div>
                            <div className="jianxuana_xia"><center><div className="img_xiaoxiao"><img src="//gfs17.gomein.net.cn/T1rDC_BXDv1RCvBVdK_160.jpg" width="100%"/></div><span className="spanssa">大容量 全面屏</span><br/><span className="￥">￥2099</span></center></div>
                       </div>
                            <div >
                            <div className="jianxuana_xia"><center><div className="img_xiaoxiao"><img src="//gfs17.gomein.net.cn/T1qabbB7dT1RCvBVdK_160.jpg" width="100%"/></div><span className="spanssa">大容量 全面屏</span><br/><span className="￥">￥2999</span></center></div>
                            <div className="jianxuana_xia"><center><div className="img_xiaoxiao"><img src="//gfs17.gomein.net.cn/T1NEhQBCxT1RCvBVdK_160.jpg" width="100%"/></div><span className="spanssa">双面玻璃 无线充电</span><br/><span className="￥">￥1099</span></center></div>
                            <div className="jianxuana_xia"><center><div className="img_xiaoxiao"><img src="//gfs17.gomein.net.cn/T1FkJgBmVT1RCvBVdK_160.jpg" width="100%"/></div><span className="spanssa">物美价廉 真实惠</span><br/><span className="￥">￥1300</span></center></div>
                       </div>
                       </ReactSwipe>
                    </div>

                    <span className="weini">
                        <img src="//gfs12.gomein.net.cn/T1cdWQB_hT1RCvBVdK.png" />
                    </span>

                    <div className="jinping">
                        <span className=" jianping_spann">
                            <a href="#" className="jianping_spann_f1">精选品类</a>
                            <a href="#" className="jianping_spann_f2">更多品类 ></a>
                        </span>
                        <span className=" jianping_span">
                            <div className="jianping_span_div"><img src="//gfs13.gomein.net.cn/T1xObgB5bv1RCvBVdK.jpg" /></div>
                            <div className="jianping_span_div"><img src="//gfs7.gomein.net.cn/T1VE_jBQZT1RCvBVdK.jpg" /></div>
                            <div className="jianping_span_div"><img src="//gfs7.gomein.net.cn/T1clxgBsWT1RCvBVdK.jpg" /></div>
                            <div className="jianping_span_div"><img src="//gfs9.gomein.net.cn/T1U0EjBjLT1RCvBVdK.jpg" /></div>
                            <div className="jianping_span_div"><img src="//gfs7.gomein.net.cn/T1igLgB5A_1RCvBVdK.jpg" /></div>
                            <div className="jianping_span_div"><img src="//gfs9.gomein.net.cn/T1tVbbBmbT1RCvBVdK.jpg" /></div>
                            <div className="jianping_span_div"><img src="//gfs5.gomein.net.cn/T1dNEjBQhT1RCvBVdK.jpg" /></div>
                            <div className="jianping_span_div"><img src="//gfs13.gomein.net.cn/T1U4EjB__T1RCvBVdK.jpg" /></div>
                            <div className="jianping_span_div"><img src="//gfs11.gomein.net.cn/T1VbLjB_KT1RCvBVdK.jpg" /></div>
                            <div className="jianping_span_div"><img src="//gfs11.gomein.net.cn/T10IbbBQWT1RCvBVdK.jpg" /></div>
                            <div className="jianping_span_div"><img src="//gfs13.gomein.net.cn/T1GddQBKCv1RCvBVdK.jpg" /></div>
                            <div className="jianping_span_div"><img src="//gfs13.gomein.net.cn/T1GddQBKCv1RCvBVdK.jpg" /></div>
                        </span>
                    </div>

                    <span className=" cainixihuan">
                        <img src="//gfs10.gomein.net.cn/T1Peh_B_Yv1RCvBVdK.png" />
                    </span>



                    <IndexXiaLa />



                    <div className="daLong" id="daLong" style={{width:'100%'}}>

                        <LazyLoad height={2400} once overflow = {true}>
                            <IndexXiaLa />
                        </LazyLoad>
                        
                        <LazyLoad height={2400} once overflow = {true}>
                            <IndexXiaLa />
                        </LazyLoad>
                        <LazyLoad height={2400} once overflow = {true}>
                            <IndexXiaLa />
                        </LazyLoad>
                        <LazyLoad height={2400} once overflow = {true}>
                            <IndexXiaLa />
                        </LazyLoad>
                        <LazyLoad height={2400} once overflow = {true}>
                            <IndexXiaLa />
                        </LazyLoad>
                        <LazyLoad height={2400} once overflow = {true}>
                            <IndexXiaLa />
                        </LazyLoad>
                   
                    </div>

                </div>

            </div>      
        )
    }
}



export default InndexMain;


