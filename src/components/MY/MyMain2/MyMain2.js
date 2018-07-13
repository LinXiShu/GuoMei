import React, { Component } from 'react';
import { connect } from 'react-redux';
// import $ from 'jquery';

import './MyMain2.css';

class MyMain2 extends Component {
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
			<ul className="MyMain2">
				<li><a><i></i><span></span></a></li>
				<li><a><i></i><span></span></a></li>
                <li><a><i></i><span></span></a></li>
                <li><a><i></i><span></span></a></li>
                <li><a><i></i><span></span></a></li>
			</ul>
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
                // isShow: true
			})
		}
	}
})(MyMain2);