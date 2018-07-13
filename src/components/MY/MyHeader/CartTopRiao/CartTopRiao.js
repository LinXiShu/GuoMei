import React, { Component } from 'react';
import { connect } from 'react-redux';
// import $ from 'jquery';

import './CartTopRiao.css';

class CartTopRiao extends Component {
	constructor(props) {
		super(props);
		//类实例化，执行
		this.state = {
            // 这里存放数据
            // bool:false
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
    

	render() {
		return (
            // 这里写html结构
			<div className="CartTopRiao" style={{display:this.props.istoggle?'block':'none'}}>
				<p className="Riao_icn"></p>
				<div>
					<a className="Riao_list Riao_list1"><i></i><p>首页</p></a>
					<a className="Riao_list Riao_list2"><i></i><p>分类</p></a>
					<a href="/ShoppingCart" className="Riao_list Riao_list3"><i></i><p>购物车</p></a>
					<a className="Riao_list Riao_list4"><i></i><p>我的</p></a>
				</div>
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
		XXX: () => {
			//可以触发多个
			dispatch({
                // type: 'isShow',
                // isShow: false
			})
		}
	}
})(CartTopRiao);