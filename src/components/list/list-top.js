import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import './list-top.css';
import '../../static/fonts/hfhfont/iconfont.css';
import { BrowserRouter, Route, Router, Link, hashHistory,ReactRouter } from 'react-router-dom';

class List_top extends Component {
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
            <header className="header">
           
      
                    <Link exact="true" to="/"  className="h-left h-back" id="goback">
                        <i className="iconfont icon-back"></i>
                    </Link>


                <div className="h-cnt flex-cell">
                    <div className="input-box index-input" id="widget_search">
                    <input type="text" placeholder="踩点狂享趴,最高省500" className="sec-ipt "/><i className="iconfont icon-search" id="icon-search"></i>
                    </div>

                </div>
                <div className="h-right" onClick={this.showTab.bind(this)}>
           
                    <a  className="h-btn moreBtn">
                        <i className="iconfont icon-category" id="category"></i>
                    </a>
                    <div className="tab-nav" style={{display:this.state.bool?'none':'block'}}>
                        <a><p><i className="iconfont icon-shouye1"></i>首页</p></a>
                        <Link to="/Classify"><p><i className="iconfont icon-all"></i>分类</p></Link>
                        <a><p><i className="iconfont icon-shouye5"></i>购物车</p></a>
                        <a><p><i className="iconfont icon-shouye3"></i>我的</p></a>
                    </div>
                
                </div>

            </header>

        );
    }
}
export default List_top;