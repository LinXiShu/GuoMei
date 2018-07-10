import React, { Component } from 'react';
import { connect } from 'react-redux';
// import $ from 'jquery';

import CartTopRiao from './CartTopRiao/CartTopRiao';

import './ShoppingCartTop.css';

class ShoppingCartTop extends Component {
	constructor(props) {
		super(props);
		//类实例化，执行
		this.state = {
            // 这里存放数据
            bool:true
		}
    }
    
    // 函数表达式
	/*toggle(){
		$.ajax({
			url:'http://localhost:13838/goods',
			data:{
				name:'sfs',
				age:124
			}
		})
    };*/
	
	sffs(){
		this.TopSeHide();
		this.props.istoggle.bind(this)()
	}

	ffdg(){
		this.TopSeHide();
		this.props.ishide.bind(this)()
	}

	TopSeHide(){
		this.setState({
			bool:!this.state.bool
		})
	}

	render() {
		return (
			<div>
            {/* // 这里写html结构 */}
			<div className="ShoppingCart_Top">
				<div>
					<a href="javascript:history.go(-1);" className="Top_href"></a>
				</div>
				<div>购物车</div>
				<div className="Top_R">
					<a href="javascript:void(0);" className="Top_rore" onClick={this.sffs.bind(this)}></a>
					<CartTopRiao/>
				</div>
				<div className="Top_se" onClick={this.ffdg.bind(this)} style={{display:this.state.bool?'none':'block'}}></div>
			</div>
			<a className="Top_prompt">
				<p>登录后同步电脑和手机购物车中的商品</p>
				<button className="arr_login">去登录</button>
			</a>
			</div>
		);
	}
}

export default connect((state) => {
	//他把store的state全部放到该组件的props里面
	return state
}, (dispatch) => {
	return {
        // 传参函数表达式
		istoggle: () => {
			//可以触发多个
			dispatch({
                type: 'istoggle',
				istoggle: true,
			});
		},
		ishide: () => {
			//可以触发多个
			dispatch({
                type: 'ishide',
				istoggle: false,
			});
		}
	}
})(ShoppingCartTop);