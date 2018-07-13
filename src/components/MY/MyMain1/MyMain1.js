import React, { Component } from 'react';
import { connect } from 'react-redux';
// import $ from 'jquery';

import './MyMain1.css';

class MyMain1 extends Component {
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
			<div className="MyMain1">
				<div className="MyMain1_T">
                    <a></a><a></a>
                </div>
                <div className="MyMain1_C">
                    <div className="user">
                        <div className="userimg"><a></a></div>
                        <div className="username"><a>jjhsafhkah</a></div>
                    </div>
                    <div className="MyMain1_C_R">
                        <a><span>G1</span><span>会员</span></a>
                    </div>
                </div>
                <div className="MyMain1_B"></div>
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
})(MyMain1);