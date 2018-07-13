
import React, {
    Component
} from 'react';

//css
import './duanxin.css';
import $ from 'jquery';
import '../../static/fonts/hfhfont/iconfont.css'

//html es5
//MV  Model View  View<=>Template(Model)
//SV  State View  View<= Render(State)


class Duanxin extends Component {
    constructor(props) {
        super(props);
        //类实例化，执行
        this.state = {
            
        }
    }
    toggle() {
        this.setState({
            
        })
    }
    render() {
        return(
            <div className="duanxin">
                <div className="header">
                    <i className="iconfont icon-back"></i>
                </div>
                <div className="logo">
                    <img src={require('../../static/images/sc44.png')} alt="" />
                </div>
                <div className="main">
                    <ul className="main-t">
                        <li><a href="#">账号密码登录</a></li>
                        <li className="active"><a href="#">短信验证码登录</a></li>
                    </ul>
                    <div className="main-c">
                        <img src={require('../../static/images/sc45.png')} alt="" className="phone"/>
                        <input type="text" placeholder="手机号"/> 
                        <img src={require('../../static/images/sc49.png')} alt="" className="lock"/>
                        <input type="text" placeholder="请输入短信验证码"/>
                        <span>获取验证码</span>
                    </div>
                    <div className="main-b">
                        <button>登录</button>
                        <p className="p1">未注册手机登录成功将自动注册，且代表您同意以下协议</p>
                        <p className="p2">《国美平台服务协议》 《国美平台隐私政策》 《美付宝服务协议》</p>
                    </div>
                </div>
                <div className="footer">
                    
                    <img src={require('../../static/images/sc48.png')} alt="" />
                </div>
            </div>
        );
    }
}

export default Duanxin;