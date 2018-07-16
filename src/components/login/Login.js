




import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Router, Link} from 'react-router-dom';
import $ from 'jquery';
import PropTypes from 'prop-types';


class Login extends React.Component{

    state = {
        data : ''
    }

    componentDidMount(){
        console.log($('.btn'));
        console.log(this);
        var thiss = this;

        $('.btn').on('click', function(e){

            console.log('点击登录');

// ko ng vue 双向绑定

             $.ajax({
                   type  : "GET",
                   url   : "http://localhost:1898/logina",
                   async : true,
                   data: {

                       username: $("#username").val(),
                       password: $("#password").val()
                   },
                success: function(data){
                    
                    console.log(data);
                    if(data == ''){
                        console.log('账号或密码错误');
                    }else{
                        console.log('登陆成功');

                        var d = new Date();
                        
                        d.setDate(d.getDate()+7);

                        document.cookie = $("#username").val() + ';expires='+d.toUTCString() + ';path=/';

                        setTimeout(function(){
                            console.log(thiss.context.router.history.push("/"));
                        }, 500)
                    }

                }
            })



        })
    }

    render(){
        return (    <div className="login_input">
                            <center>
                            <div className="login_input_aa">
                                <i className="iconfont icon-shouye6">  &nbsp;</i><input id="username" type="text" placeholder=" 请输入用户账号"/>
                            </div>
                            <div className="login_input_aa">
                                <i className="iconfont icon-shouye6">  &nbsp;</i><input id="password" type="password" placeholder=" 亲输入用户密码"/>
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

Login.contextTypes = {

    router: PropTypes.object.isRequired
}

export default Login