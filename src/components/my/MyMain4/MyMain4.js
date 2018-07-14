import React, { Component } from 'react';
import { connect } from 'react-redux';
// import $ from 'jquery';

import './MyMain4.css';

class MyMain4 extends Component {
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
            <ul className="MyMain4_list">
                <li className="MyMain4_list1"><a><span><img src={require('../../../static/images/huiyuanbu.png')}/></span><span>会员俱乐部</span></a></li>
                <li className="MyMain4_list2"><a><span><img src={require('../../../static/images/viphuiyuanka.png')}/></span><span>我的会员卡</span></a></li>
                <li className="MyMain4_list3"><a><span><img src={require('../../../static/images/shoucang.png')}/></span><span>我的收藏</span></a></li>
                <li className="MyMain4_list4"><a><span><img src={require('../../../static/images/zuji.png')}/></span><span>我的足迹</span></a></li>
                <li className="MyMain4_list5"><a><span><img src={require('../../../static/images/yuyue.png')}/></span><span>我的预约</span></a></li>
                <li className="MyMain4_list6"><a><span><img src={require('../../../static/images/meidian.png')}/></span><span>我的美店</span></a></li>
                <li className="MyMain4_list7"><a><span><img src={require('../../../static/images/pingtuan.png')}/></span><span>我的拼团</span></a></li>
                <li className="MyMain4_list8"><a><span><img src={require('../../../static/images/yijian.png')}/></span><span>帮助反馈</span></a></li>
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
})(MyMain4);