
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from '../logo.svg';
import {BrowserRouter, Route, Router, Link} from 'react-router-dom';

import IndexHeader from './index/indexHeader';
import IndexMain from './index/indexMain';



class HelloIndex extends React.Component{


    
    render(){
        return (
            <div className="lxs" id="LXS">

                <IndexHeader />

                <IndexMain />
                <button ></button>
                <div className="footer" >
                <Link exact="true" className="footer_a gm indexs"  to="/"><i className="iconfont icon-shouye1"></i><span>国美</span></Link>
                <Link className="footer_a list" to="/classify"><i className="iconfont icon-shouye4"></i><span>分类</span></Link>
                <Link className="footer_a list" to="/Kuxuan"><i className="iconfont icon-shouye10"></i><span>酷炫</span></Link>
                <Link className="footer_a car" to="/car"><i className="iconfont icon-shouye5"></i><span>购物车</span></Link>
                <Link className="footer_a my" to="/my"><i className="iconfont icon-shouye3"></i><span>我的</span></Link>
                </div>
            </div>
        )

    }
}


export default HelloIndex;