import React, { Component } from 'react';
import { connect } from 'react-redux';

import './home.css'

class Home extends Component {
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
		this.setState({
			bool:!this.state.bool
		})
    }*/
    

	render() {
		return (
            // 这里写html结构
			<div>
				<p>这是首页</p>
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
})(Home);