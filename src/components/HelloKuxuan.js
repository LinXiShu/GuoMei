



import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from '../logo.svg';
import {BrowserRouter, Route, Router, Link} from 'react-router-dom';

import '../css/kuxuan.css';
import LazyLoad from 'react-lazy-load';


class HelloKuxuan extends React.Component{
    // Hexo
  componentDidMount(props){
        console.log(this)
        console.log(this.props.history);
    }
    render(){
        return (
            <div className="jinxuanye" id="LXS">
                
                <div className="list_top">
                    <Link exact="true"  to="/" className="list_zuo">
                        <span><i className="iconfont icon-back"></i></span>
                    </Link>
                    <span className="list_cont">
                        吃货的世界！没有毕业全场9折...
                    </span>
                    <span className="list_right">
                        <i className="iconfont icon-agriculture"></i>
                    </span>
                </div>

                <div className="xia_main">
                <div className="long_main">
                    <div className="fenlei" >
                        <div className="fenlei_long">
                            12345678901234567890123456789012345678901234567890
                        </div>
                    </div>
                        


                <div className="">

                        <LazyLoad offsetTop={300} className="No0" height={300} width="100%" >
                            <img src="https://gfs6.gomein.net.cn/T1smKjBjET1RCvBVdK.jpg"  width= "100%" />
                        </LazyLoad>
                    </div>

                     <LazyLoad offsetTop={300} className="No1" >

                        <img src="https://gfs6.gomein.net.cn/T1lR_bBQWT1RCvBVdK.jpg" width="100%" />
                     </LazyLoad>

                     <LazyLoad offsetTop={300} className="No2" >
                        <a href="#">
                            <img src="https://gfs7.gomein.net.cn/T1zoDjBjAT1RCvBVdK.jpg" width="100%" />
                        </a>
                     </LazyLoad>

                     <div>
                        <LazyLoad offsetTop={300} className="No3" >
                           <a href="#">
                               <img src="https://gfs8.gomein.net.cn/T1jaJbBQxv1RCvBVdK.jpg" width="100%" />
                           </a>
                        </LazyLoad>
                        <LazyLoad offsetTop={300} className="No3_2" >
                           <a href="#">
                               <img src="https://gfs6.gomein.net.cn/T1cCWQB4KT1RCvBVdK.jpg"  width="100%"/>
                           </a>
                        </LazyLoad>
                     </div>

                     <div className="No4">
                        123
                     </div>

                     <div className="No5">
                       
                            <img src="https://gfs8.gomein.net.cn/T1RcDjBgDT1RCvBVdK.jpg" width="100%"/>
                   
                     </div>

                     <div className="No6">
                        <LazyLoad offsetTop={300} className="No6_1" >
                            
                            <img src="https://gfs7.gomein.net.cn/T1RUYjBgDT1RCvBVdK.jpg" width=" 100%" />
                        </LazyLoad>
                        <LazyLoad offsetTop={300} className="No6_1" >
                            
                            <img src="https://gfs7.gomein.net.cn/T1RUYjBgDT1RCvBVdK.jpg" width=" 100%" />
                        </LazyLoad>
                        <LazyLoad offsetTop={300} className="No6_1" >
                            
                            <img src="https://gfs7.gomein.net.cn/T1RUYjBgDT1RCvBVdK.jpg" width=" 100%" />
                        </LazyLoad>
                     </div>

                     <div className="No7">
                        <LazyLoad offsetTop={300} className="No7_1" >
                            
                            <img src="https://gfs8.gomein.net.cn/T1_PE_BjVT1RCvBVdK.jpg" width=" 100%" />
                        </LazyLoad>
                        <LazyLoad offsetTop={300} className="No7_1" >
                            
                            <img src="https://gfs6.gomein.net.cn/T15E_QB4_T1RCvBVdK.jpg" width=" 100%" />
                        </LazyLoad>
                     </div>


                     <div className="No8">

                     </div>

                     <div className="No9">
                        <LazyLoad offsetTop={300} className="No9_1" >
                            
                            <img src="https://gfs5.gomein.net.cn/T1tlVjBvxT1RCvBVdK.jpg" width=" 100%" />
                        </LazyLoad>
                     </div>
                     <div className="No9">
                          <LazyLoad offsetTop={300} className="No9_2" >
                              
                              <img src="https://gfs7.gomein.net.cn/T19y_bBjKT1RCvBVdK.jpg" width=" 100%" />
                          </LazyLoad>
                     </div>
                     <div className="No10">
                          <LazyLoad offsetTop={300} className="No10_2" >
                              
                              <img src="https://gfs7.gomein.net.cn/T1gCbQBjxT1RCvBVdK.jpg" width=" 100%" />
                          </LazyLoad>
                     </div>
                     <div className="No10">
                          <LazyLoad offsetTop={300} className="No10_2" >
                              
                              <img src="https://gfs9.gomein.net.cn/T144CgB5J_1RCvBVdK.jpg" width=" 100%" />
                          </LazyLoad>
                     </div>
                     <div className="No10">
                          <LazyLoad offsetTop={300} className="No10_2" >
                              
                              <img src="https://gfs6.gomein.net.cn/T1TxCvBvDT1RCvBVdK.jpg" width=" 100%" />
                          </LazyLoad>
                     </div>

                     <div className="No11">
                        <img src="https://gfs5.gomein.net.cn/T1fs_bBvbT1RCvBVdK.jpg" width= "100%" />
                     </div>

                     <div className="No12">

                     </div>

                     <div className="No13">
                        <img src="https://gfs9.gomein.net.cn/T11zCjBsAT1RCvBVdK.jpg" width= "100%" />
                     </div>

                     <div className="No14">
                        
                     </div>

                     <div className="No15">
                        <center>
                           ------ &nbsp;看完啦&nbsp; ------
                        </center>
                     </div>

                     <div className="footers">
                        <center>
                            copyright © 2000-2018 gome.com.cn
                            <br />
                            LinXiShu。
                        </center>
                     </div>

                     

                </div>
                </div>

            </div>

        )

    }
}




export default HelloKuxuan;