import React, { Component } from 'react';
import { connect } from 'react-redux';
import $ from 'jquery';

import './ShoppingMain.css';

class ShoppingMain extends Component {
	constructor(props) {
		super(props);
		//类实例化，执行
		this.state = {
            // 这里存放数据
            buycar:''
		}
    }
	
	componentWillMount(){
		// console.log(this.state.buycar)
		$.ajax({
			type:'get',
			url:'http://localhost:13838/buycar',
			context:this,
			success(data){
				// console.log(data)
				this.setState({buycar: data});
			}
		})
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
			<div className="ShoppingMain">
				<div className="empty" style={{display:this.state.buycar.length>=1?'none':'block'}}>
					<div className="Cart_empty">
						<img src={require("../../../static/images/bj_baobei.png")}/>
						<p className="desc">购物车空空~买点啥</p>
					</div>
					<div className="plc_btn">
						<a>看收藏</a>
						<a>先逛逛</a>
					</div>
				</div>
				<div className="car_goods_list">
					{(function(self){
						if(self.state.buycar.length<=0){
							return
						}else{
							// console.log(self.state.buycar)
							return self.state.buycar.map((item,index)=>{
								// console.log(item)
								return <div className="goodscar" key={index}>
									<div className="fenjiexian1"></div>
									<p className="goodscar_T"><i></i><span>{item.title}</span><span>编辑</span></p>
									{item.goods.map((gs,ix)=>{
										// console.log(gs)
										return <div>
												<div className="goodscar_list" key={ix}>
												<div className="list_ipt"></div>
												<div className="list_img"><img src={gs.url}/></div>
												<div className="list_ctr">
													<p>{gs.txt}</p>
													<p>fddssdafas</p>
													<p>
														<span>￥{gs.pice}</span>
														<div><i></i><input type="text" value={gs.qty}/><i></i></div>
													</p>
												</div>
											</div>
											<div className="edit_area"><span><i></i>移入收藏</span><span><i></i>删除</span></div>
											<div className="fenjiexian1"></div>
										</div>
									})}
								</div>
							})
						}
					})(this)}
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
})(ShoppingMain);