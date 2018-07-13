
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../../css/index.css';
import {BrowserRouter, Route, Router, Link} from 'react-router-dom';

import $ from 'jquery';


let Logout = (props) => {
    return <Link to="/my"><div><i className="iconfont icon-smile asdasdasdasd" ></i></div></Link>
}
let Logoutss = (props) => {
    return <Link to="/login"><div>登录</div></Link>
}

class IndexHeader extends React.Component{

    state = {

        llll : 0
    }

    componentDidMount(){



    }
    
    render(){

        let cookies = document.cookie;
        console.log(cookies,123213);

        if(cookies != ''){
           
           this.state.llll = 1;
        };
        if(cookies == ''){
           this.state.llll = 0;
        }

        var bottom = null;

        if(this.state.llll == 0){
            bottom = <Logoutss />
        }
        if(this.state.llll == 1){
            bottom = <Logout />
        }

        return (
            <div className="header" id="head">
                <img src="//css.gomein.net.cn/plus/style/index/images/grass_logo.png?v=2017092001"  />
                <input type="text" className="head_ipt" placeholder="儿童补钙"/>
                  <span className="spansa"><Link to="/car"><i className="iconfont icon-cart"></i></Link></span>
                <div className="ssas">{bottom}</div>
              
                
            </div>
        )

    }
}


export default IndexHeader;