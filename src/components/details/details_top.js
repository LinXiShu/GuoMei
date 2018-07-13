import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import './details_top.css';
import '../../static/fonts/hfhfont/iconfont.css';
import {Router, Route, hashHistory, Link, IndexRoute, browserHistory} from 'react-router-dom';

class Details_top extends Component {
    constructor(props) {
        super(props);
      
        this.state = {
            bool:true
            
        };
       
    }   
    showTab(){
        console.log(0)
        this.setState({bool:!this.state.bool})


    }
   
    render() {
        return(
            <header className="dheader">
           
                <div className="dh-left" >
                    <Link exact="true" to="/goodslist"  className="dh-back" id="goback" >
                        <i className="iconfont icon-back"></i>
                    </Link>
                </div>

               <ul className="dnav_list">
                    <li className="active"><span>商品</span></li>
                    <li><span>详情</span></li>
                    <li><span>评价</span></li>
                </ul>
                <div className="dh-right" onClick={this.showTab.bind(this)}>
           
                    <a  className="h-btn moreBtn">
                        <i className="iconfont icon-category" id="category"></i>
                    </a>
                    <div className="dtab-nav" style={{display:this.state.bool?'none':'block'}}>
                        <a><p><i className="iconfont icon-shouye1"></i>首页</p></a>
                        <Link to="/classify"><p><i className="iconfont icon-all"></i>分类</p></Link>
                        <a><p><i className="iconfont icon-shouye5"></i>购物车</p></a>
                        <a><p><i className="iconfont icon-shouye3"></i>我的</p></a>
                    </div>
                
                </div>

            </header>

        );
    }
}
export default Details_top;