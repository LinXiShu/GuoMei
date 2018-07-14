import React, { Component } from 'react';
import { connect } from 'react-redux';
// import $ from 'jquery';

import './MyMoutol.css';

class MyMoutol extends Component {
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
            <div className="MyMoutol">
                <div className="MyMoutol_Heared">
                    <h4 className="MyMoutol_Top"><i></i><span>为你推荐</span></h4>
                </div>
                <ul className="MyMoutol_Centent">
                    {((self)=>{
                        
                    })(this)}
                </ul>
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
})(MyMoutol);