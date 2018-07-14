import React, { Component } from 'react';
import { connect } from 'react-redux';
// import $ from 'jquery';

import './ShoppingCartFoot.css';

class ShoppingCartFoot extends Component {
	constructor(props) {
		super(props);
		//类实例化，执行
		this.state = {
            // 这里存放数据
			buycar:'',
			bool:false
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
			<div className="ShoppingCartFoot">
				<div className="ShoppingCartFoot_L">
                    <div className="ShoppingCartFoot_l"><i></i><span>全选</span></div>
                    <div className="ShoppingCartFoot_C">
                        <div><span>总计:</span><span>￥{
							((self)=>{
								if(self.props.total==="undefined"){
									return;
								}else if(self.props.total){
									let dsd=0;
									self.props.total.map((item)=>{
										if(item.checksd!==''){
											dsd += item.pic*item.qty;
										}
									})
									return dsd;
								}
								// console.log(self.props.total)
							})(this)
						}</span></div>
                        <div><span>已省:</span><span>￥</span></div>
                    </div>
                </div>
                <div className="ShoppingCartFoot_R">去结算({((self)=>{
					if(self.props.total==="undefined"){
						return;
					}else if(self.props.total){
						let dsd=0;
						self.props.total.map((item)=>{
							// console.log(item)
							if(item.checksd!==''){
								dsd += item.qty*1;
								// console.log(dsd)
								// dsd += dsd
								// console.log(dsd)
							}
						})
						return dsd;
					}
				})(this)})</div>
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
                // type: 'istoggle',
				// istoggle: true,
			});
		}
	}
})(ShoppingCartFoot);