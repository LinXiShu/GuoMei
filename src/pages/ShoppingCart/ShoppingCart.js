import React, { Component } from 'react';
import { connect } from 'react-redux';
// import $ from 'jquery';

import './ShoppingCart.css';

import ShoppingCartTop from '../../components/ShoppingCart/ShoppingCartTop/ShoppingCartTop';
import ShoppingMain from '../../components/ShoppingCart/ShoppingMain/ShoppingMain';
import GuesslikeModule from '../../components/ShoppingCart/guesslikeModule/GuesslikeModule';
import ShoppingCartFoot from '../../components/ShoppingCart/ShoppingCartFoot/ShoppingCartFoot';



class ShoppingCart extends Component {
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
			<div className="ShoppingCart">
				<ShoppingCartTop/>
				<ShoppingMain/>
				<GuesslikeModule/>
				<ShoppingCartFoot/>
				<div className="xxb"></div>
				{/* <p onClick={this.toggle.bind(this)}>这是首页</p> */}
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
		isShow: () => {
			//可以触发多个
			dispatch({
                type: 'isShow',
                isShow: true
			})
		}
	}
})(ShoppingCart);