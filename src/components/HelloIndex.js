
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from '../logo.svg';
import {BrowserRouter, Route, Router, Link} from 'react-router-dom';

import IndexHeader from './index/indexHeader';
import IndexMain from './index/indexMain';



class HelloIndex extends React.Component{
    
    render(){

        let bottom = '';
        let cook = document.cookie;

            if(cook == ''){
                bottom = <Link className="footer_a my" to="/login"><i className="iconfont icon-shouye3"></i><span>我的</span></Link> ;
            }else{
                bottom = <Link className="footer_a my" to="/MY"><i className="iconfont icon-shouye3"></i><span>我的</span></Link> ;
            }

        return (
            <div className="lxs" id="LXS">

                <IndexHeader />

                <IndexMain />
                

                <div className="footer" >
                    <Link exact="true" className="footer_a gm indexs"  to="/"><i className="iconfont icon-shouye1"></i><span>国美</span></Link>
                    <Link className="footer_a list" to="/classify"><i className="iconfont icon-shouye4"></i><span>分类</span></Link>
                    <Link className="footer_a list" to="/youxuan"><i className="iconfont icon-shouye10"></i><span>酷炫</span></Link>
                    <Link className="footer_a car" to="/car"><i className="iconfont icon-shouye5"></i><span>购物车</span></Link>

                    {bottom}
                    
                </div>
            </div>
        )

    }
}


export default HelloIndex;