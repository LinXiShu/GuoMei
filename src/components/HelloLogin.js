




import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Router, Link} from 'react-router-dom';
import '../css/login.css';
import $ from 'jquery';

import Logins from './login/Login';
import Signins from './login/Signin';

class IndexHeader extends React.Component{


    state = {

        status : 0,
        login_dom : null,
        signin_dom : null,
        button : null,
        imgs : '../img/logins.PNG',
        zhangtai: '',
    }

    componentDidMount(){

        this.state.login_dom = document.getElementsByClassName('div_a');
        this.state.signin_dom = document.getElementsByClassName('div_b');
        this.state.login_dom[0].style.borderBottom = '1px solid red';
        this.state.login_dom[0].style.color = 'red';
        this.state.login_dom[0].style.color = '#F20C59';
        this.state.signin_dom[0].style.color = '#999';

    }

    componentDidUpdate(){

 

    }



    dianji_login(){

        this.state.signin_dom[0].style.borderBottom = '';
        this.state.login_dom[0].style.borderBottom = '1px solid #F20C59';
        this.state.signin_dom[0].style.color = '#999';
        this.state.login_dom[0].style.color = '#F20C59';
        this.setState({status : 0});
    }

    dianji_signin(){

        this.state.login_dom[0].style.borderBottom  = '';
        this.state.signin_dom[0].style.borderBottom = '1px solid #F20C59';
        this.state.login_dom[0].style.color = '#999';
        this.state.signin_dom[0].style.color = '#F20C59';
        this.setState({status : 1});
    }


    render(){
        if(this.state.status == 0){
            this.state.button = <Logins  />
        } else if(this.state.status == 1) {
            this.state.button = <Signins />
        }
        return (
            <div className="login" id="Login">
            <div className="list_top">
                <Link exact="true"  to="/" className="list_zuo">
                    <span><i className="iconfont icon-back"></i></span>
                </Link>
                
                    <span className="list_cont list_car" >
                            
                    </span>
            </div>

            <div className="login_main">
                <center>
                    <div className="login_h1">
                        <img src="https://misc.gomein.net.cn/plus/images/u/login/logo_xh.png?v=2017092001"  />
                    </div>
                </center>

                <div className="logins">
                    <div className="login_h2">
                        <div className="div_a" onClick={this.dianji_login.bind(this)}>账号密码登录</div>
                        <div className="div_b" onClick={this.dianji_signin.bind(this)}>账号密码注册</div>
                    </div>


                </div>
                <div>
                {this.state.button}
                </div>

            </div>
              
        </div>
        )

    }
}


export default IndexHeader