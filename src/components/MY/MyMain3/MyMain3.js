import React, { Component } from 'react';
import { connect } from 'react-redux';
// import $ from 'jquery';

import './MyMain3.css';

class MyMain3 extends Component {
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
			<div className="MyMain3">
				<ul className="MyMain3_list">
					<li className="MyMain3_list1"><a><span>0.00</span><span>国美币</span></a></li>
					<li className="MyMain3_list2"><a><span>4</span><span>优惠券</span></a></li>
					<li className="MyMain3_list3"><a><span>222</span><span>美豆</span></a></li>
					<li className="MyMain3_list4"><a><span><img src={require('../../../static/images/meitongka.png')}/></span><span>美通卡</span></a></li>
					<li className="MyMain3_list5"><a><span><img src={require('../../../static/images/qianbao.png')}/></span><span>我的金融</span></a></li>
				</ul>
				<div className="gelixian"></div>
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
})(MyMain3);