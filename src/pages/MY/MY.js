import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactDOM from 'react-dom';
// import $ from 'jquery';

import './MY.css';

import MyHeader from '../../components/my/MyHeader/MyHeader'
import MyMain1 from '../../components/my/MyMain1/MyMain1'
import MyMain2 from '../../components/my/MyMain2/MyMain2'
import MyMain3 from '../../components/my/MyMain3/MyMain3'
import MyMain4 from '../../components/my/MyMain4/MyMain4'
import MyMoutol from '../../components/my/MyMoutol/MyMoutol'



class MY extends Component {
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
			<div className="MY">
				{/* <p onClick={this.toggle.bind(this)}>这是首页</p> */}
				<MyHeader/>
                <MyMain1/>
                <MyMain2/>
				<MyMain3/>
				<MyMain4/>
				<MyMoutol/>
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
                // isShow: true
			})
		}
	}
})(MY);