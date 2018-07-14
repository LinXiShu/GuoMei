import React, {
    Component
} from 'react';

//css
import './zhanghao.css';
import $ from 'jquery';
import '../../static/fonts/hfhfont/iconfont.css'

//html es5
//MV  Model View  View<=>Template(Model)
//SV  State View  View<= Render(State)


class Zhanghao extends Component {
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
            <div className="zhanghao">
                <div className="header">
                    <i className="iconfont icon-back"></i>
                </div>
                <div className="logo">
                    <img src={require('../../static/images/sc44.png')} alt="" />
                </div>
                <div className="main">
                    <ul className="main-t">
                        <li className="active"><a href="#">账号密码登录</a></li>
                        <li><a href="#">短信验证码登录</a></li>
                    </ul>
                    <div className="main-c">
                        <img src={require('../../static/images/sc45.png')} alt="" className="phone"/>
                        <input type="text" placeholder="手机号/邮箱/用户名/门店会员卡号"/> 
                        <img src={require('../../static/images/sc46.png')} alt="" className="lock"/>
                        <input type="text" placeholder="请输入密码"/>
                        <img src={require('../../static/images/sc47.png')} alt="" className="eye"/>
                        <p>
                            <span className="fl">手机号快速注册</span>
                            <span className="fr">找回密码</span>
                        </p>
                        
                    </div>
                    <div className="main-b">
                        <button>登录</button>
                    </div>
                </div>
                <div className="footer">
                    <img src={require('../../static/images/sc48.png')} alt="" />
                </div>
            </div>
        );
    }
}

export default Zhanghao;