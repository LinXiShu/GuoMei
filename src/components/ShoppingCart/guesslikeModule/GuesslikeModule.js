import React, { Component } from 'react';
import { connect } from 'react-redux';
// import $ from 'jquery';

import './GuesslikeModule.css';

class GuesslikeModule extends Component {
	constructor(props) {
		super(props);
		//类实例化，执行
		this.state = {
            // 这里存放数据
            bool:true
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
			<div className="guesslikeModule">
                <div className="title_box">
                    <p></p>
                    <h2><i></i>为你推荐</h2>
                    <p></p>
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
		istoggle: () => {
			//可以触发多个
			dispatch({
                type: 'istoggle',
				istoggle: true,
			});
		}
	}
})(GuesslikeModule);