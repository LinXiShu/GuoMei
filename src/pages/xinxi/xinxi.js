
import React, {
    Component
} from 'react';

//css
import './xinxi.css';
import $ from 'jquery';
import '../../static/fonts/hfhfont/iconfont.css';
import Di from '../../components/youfooter/youfooter'

//html es5
//MV  Model View  View<=>Template(Model)
//SV  State View  View<= Render(State)


class Xinxi extends Component {
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
            <div className="xinxi">
                <div className="header">
                    <i className="iconfont icon-back"></i>
                    <span>用户信息</span>
                </div>
                <div className="main">
                    <ul>
                        <li className="touxiang" style={{height:"150px",lineHeight:"150px"}}>
                            <span>头像</span>
                            <span>
                                <img src={require('../../static/images/sc51.png')} alt="" />
                            </span>
                        </li>
                        <li>
                            <span>用户名</span>
                            <span>
                                gz_134****5678
                            </span>
                        </li>
                        <li>
                            <span>昵称</span>
                            <span>
                                gz_134****5678haha
                            </span>
                            <i className="iconfont icon-more"></i>
                        </li>
                        <li>
                            <span>性别</span>
                            <span>
                                未选择
                            </span>
                            <i className="iconfont icon-more"></i>
                        </li>
                        <li>
                            <span>出生日期</span>
                            <span>
                                未填写
                            </span>
                            <i className="iconfont icon-more"></i>
                        </li>
                        <li>
                            <span>推荐码</span>
                            <span>
                                ASDFGH
                            </span>
                        </li>
                        <li>
                            <span>推荐人</span>
                            <span>
                                无
                            </span>
                        </li>
                    </ul>
                </div>
                <ul className="ulxia">
                    <li className="lixia">
                        <span>收货管理地址</span>
                        <i className="iconfont icon-more"></i>
                    </li>
                    <li className="lixia">
                        <span>账号安全</span>
                        <span>
                            安全等级 : 中
                        </span>
                        <i className="iconfont icon-more"></i>
                    </li>
                </ul>
                <div className="footer">
                    <ul>
                        <li>
                            <span className="sheng">gz_134****5678</span>
                        </li>
                        <li>
                            <span>退出</span>
                        </li>
                        <li>
                            <span>更多</span>
                        </li>
                        <li>
                            <span>反馈</span>
                        </li>
                    </ul>
                    <Di/>
                </div>
            </div>
        );
    }
}

export default Xinxi;