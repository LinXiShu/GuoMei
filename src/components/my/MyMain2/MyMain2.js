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
			<div className="MyMain2">
				<ul className="MyMain2_list">
					<li className="MyMain2_list1"><a><span><img src={require('../../../static/images/daifukuai.png')}/></span><span>待付款</span></a></li>
					<li className="MyMain2_list2"><a><span><img src={require('../../../static/images/daishouhuo.png')}/></span><span>待收货</span></a></li>
					<li className="MyMain2_list3"><a><span><img src={require('../../../static/images/daipingjia.png')}/></span><span>待评价</span></a></li>
					<li className="MyMain2_list4"><a><span><img src={require('../../../static/images/tuihou.png')}/></span><span>退款/售后</span></a></li>
					<li className="MyMain2_list5"><a><span><img src={require('../../../static/images/dingdan.png')}/></span><span>全部订单</span></a></li>
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
})(MyMain2);