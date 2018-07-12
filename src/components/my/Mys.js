

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from '../../logo.svg';
import {BrowserRouter, Route, Router, Link} from 'react-router-dom';
import '../../css/my.css';
import PropTypes from 'prop-types';



class Hello extends React.Component{

    render(){
        console.log(this.context);
        return (
            <div className="car" id="LXS">

                <div className="list_top">
                    <Link exact="true"  to="/" className="list_zuo">
                        <span><i className="iconfont icon-back"></i></span>
                    </Link>
                    
                        <span className="list_cont list_car" >
                                我的国美
                        </span>

                    <span className="list_right">
                        <i className="iconfont icon-agriculture"></i>
                    </span>
                </div>

                <div className="My_main">
                    <div className="My_header">

                    </div>
                    <div className="My_appent">
                        <span className="My_span_s"><i className="iconfont icon-icon-icon1"></i></span>
                        <span className="My_span_s"><i className="iconfont icon-icon-icon1"></i></span>
                        <span className="My_span_s"><i className="iconfont icon-icon-icon1"></i></span>
                        <span className="My_span_s"><i className="iconfont icon-icon-icon1"></i></span>
                        <span className="My_span_s hou"><i className="iconfont icon-icon-icon1"></i></span>
                    </div>
                </div>
                <div className="car_shengcheng">
                    qweqwe
                </div>

            </div>
        )
    }
}


Hello.contextTypes = {

    router: PropTypes.object.isRequired
}


export default Hello;