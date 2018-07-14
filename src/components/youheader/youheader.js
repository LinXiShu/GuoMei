
import {BrowserRouter, Route, Router, Link} from 'react-router-dom';

import React, {
    Component
} from 'react';

//css
import './youheader.css';

//html es5
//MV  Model View  View<=>Template(Model)
//SV  State View  View<= Render(State)


class Youheader extends Component {
    constructor(props) {
        super(props);
        //类实例化，执行
        this.state = {
            bool:true
        }
    }
    toggle() {
        this.setState({
            bool: !this.state.bool
        })
    }
    render() {
        return(
            <div>
                <div className="header">
                    <Link to="/"  href="" className="header_l"><img src={require('../../static/images/sc1.png')} alt="" /></Link>
                    <a onClick={this.toggle.bind(this)} className="header_r"></a>
                    <h2 className="header_c">国美超市狂想嘉年华 3件5折</h2>
                </div>
                <div className="jump" style={{
                    display:this.state.bool?'none':'block'
                }}>
                    <ul>
                        <li><a href=""><i className="iconfont icon-shouye1"></i><span>首页</span></a></li>
                        <li><a href=""><i className="iconfont icon-all"></i><span>分类搜索</span></a></li>
                        <li><a href=""><i className="iconfont icon-cart"></i><span>购物车</span></a></li>
                        <li><a href=""><i className="iconfont icon-shouye3"></i><span>我的国美</span></a></li>
                    </ul>
                    <div className="sanjiao"></div>  
                </div>
            </div>
        );
    }
}

export default Youheader;