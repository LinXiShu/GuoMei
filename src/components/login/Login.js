




import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Router, Link} from 'react-router-dom';
import $ from 'jquery';


class Login extends React.Component{

    state = {
        data : ''
    }

    componentDidMount(){

        
    }

    render(){
        return (    <div className="login_input">
                            <center>
                            <div className="login_input_aa">
                                <i className="iconfont icon-shouye6">  &nbsp;</i><input type="text" placeholder=" 请输入用户账号"/>
                            </div>
                            <div className="login_input_aa">
                                <i className="iconfont icon-shouye6">  &nbsp;</i><input type="password" placeholder=" 亲输入用户密码"/>
                            </div>
                           
                            <div className="btn">
                                登录
                            </div>
                            <br />
                                <div className="login_ll">
                                    
                                </div>
                            </center>
                        </div>)
    }
}

export default Login