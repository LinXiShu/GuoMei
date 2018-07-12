


import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Router, Link} from 'react-router-dom';
import $ from 'jquery';
import '../../css/login.css';
import PropTypes from 'prop-types';

let qweqwe = {display: 'none', color:'#fff', width:'7rem', height: '1.7rem', background: 'black', position: 'absolute', top: '6.3rem', left: '1.5rem',opacity : .7, borderRadius: '0.28125rem',fontSize: '0.5rem',lineHeight: '1.6rem',}


class Signin extends React.Component{

    state = {
        data : '',
        txt  : '用户已存在',
    }

    componentDidMount(props){
        let thiss = this;

             $(".sig").click(() => {
               $.ajax({
                   type  : "post",
                   url   : "http://10.3.134.52:1898/signins",
                   async : true,
                   data: {

                       username: $("#username").val(),
                       password: $("#password").val()
                   },
                   success: function(data){
                       
                        if(data == 'yesSignin'){
                            $('.danmu')[0].innerText  = "注册成功";
                            console.log('注册成功');
                            $('.danmu')[0].style.display = 'block';

                            var d = new Date();
                            
                            d.setDate(d.getDate()+7);

                            document.cookie = $("#username").val() + ';expires='+d.toUTCString() + ';path=/';

                            console.log($("#username").val());

                            setTimeout(function(){
                                thiss.context.router.history.push('/');
                            }, 1000)
                            

                        }else{

                            if($('#username') == '' && $('.password') == ''){
                                console.log('用户不能为空');
                                $('.danmu')[0].innerText =  "用户名或密码不能为空！";
                                console.log('用户已存在');
                                $('.danmu')[0].style.display = 'block'; 

                            }else{
                                 $('.danmu')[0].innerText =  "用户已存在";
                                console.log('用户已存在');
                                $('.danmu')[0].style.display = 'block';      
                            }


                        }
                   }
               });
           })  


    }

    render(){
      $('.login').on('click', function(){

          $('.danmu')[0].style.display = 'none';
      })

        return (  <div className="login_input">
                        <center>
                        <div className="login_input_aa">
                            <i className="iconfont icon-shouye6">  &nbsp;</i><input type="text" id="username" placeholder=" 请输入用户账号"/>
                        </div>
                        <div className="login_input_aa">
                            <i className="iconfont icon-shouye6">  &nbsp;</i><input type="password" id="password" placeholder=" 亲输入用户密码"/>
                        </div>
                    
                        <div className="sig">
                            注册
                        </div>

                
                <div className="div_span">

                     <span>未手机注册的童鞋登陆成功将自动注册，并且代表您同意一下协议。</span><br />
                     <span className="blue">《日内瓦公约》 《网络主动防御战略守则》 《青少年网络安全健康管理条例》</span>
                </div>
                
                        </center>
                        <center className="danmu1">
                            <div className="danmu" style={qweqwe} >
                                
                                    {this.state.txt}
                                
                            </div>
                        </center>
                    </div> )
    }
}


Signin.contextTypes = {

    router: PropTypes.object.isRequired
}

export default Signin




