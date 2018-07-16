import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import PropTypes from 'prop-types';

import './MY.css';

import MyHeader from '../../components/my/MyHeader/MyHeader'
import MyMain1 from '../../components/my/MyMain1/MyMain1'
import MyMain2 from '../../components/my/MyMain2/MyMain2'
import MyMain3 from '../../components/my/MyMain3/MyMain3'
import MyMain4 from '../../components/my/MyMain4/MyMain4'
import MyMoutol from '../../components/my/MyMoutol/MyMoutol'

let style = {
    width:'100%' ,height:'1.5rem' ,background:'red', color: '#fff',textAlign: 'center', lineHeight: '1.5rem', fontSize: '0.6rem'
}

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
    
    componentDidMount(){

        let thiss = this;

        let cook = document.cookie;

        $('.TC').on('click', function(e){

                var d = new Date();
                d.setDate(-1000);
                document.cookie = cook + ';expires='+d.toUTCString() + ';path=/';

                setTimeout(function(){
                    console.log(thiss);
                    thiss.props.history.push('/')
                }, 300)

        })
    }

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
                <div style={style} className="TC">退出登录</div>
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