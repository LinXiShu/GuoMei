
import React, {
    Component
} from 'react';

//css
import './zhuce.css';
import $ from 'jquery';
import '../../static/fonts/hfhfont/iconfont.css'

//html es5
//MV  Model View  View<=>Template(Model)
//SV  State View  View<= Render(State)


class Zhuce extends Component {
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
            <div className="zhuce">
                <div className="header">
                    <i className="iconfont icon-back"></i>
                    <span>注册</span>
                </div>
                <div className="main">
                    
                    <div className="main-c">
                        <img src={require('../../static/images/sc45.png')} alt="" className="phone"/>
                        <input type="text" placeholder="请输入手机号"/>
                        <p className="hint">请按住滑块，拖动至最右边</p>
                        <span className="iconfont icon-zhankai"></span> 
                    </div>
                    <div className="main-b">
                        <button>登录</button>
                        <p className="p1">我已阅读并同意以下协议，接受免除或限制责任，诉讼管辖约定等条款，愿意同步创建账户。</p>
                        <p className="p2">《国美平台服务协议》 《国美平台隐私政策》 《美付宝服务协议》</p>
                        <img src={require('../../static/images/sc50.png')} alt="" />
                    </div>
                </div>
            </div>
        );
    }
}

export default Zhuce;