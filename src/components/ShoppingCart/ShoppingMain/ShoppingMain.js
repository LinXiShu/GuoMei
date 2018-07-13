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
			buycar:'',
			bool:false
		}
    }
	// 加载时更新购物车
	componentWillMount(){
		// console.log(this.state.buycar)
		$.ajax({
			type:'get',
			url:'http://localhost:13838/buycar',
			context:this,
			success(data){
				// console.log(data)
				this.setState({buycar: data});

				// 触发传参给购物车脚步总计结算
				let arr = [];
				data.map((item)=>{
					item.goods.map((it)=>{
						let obj = {};
						obj.pic = it.pice;
						obj.qty = it.qty;
						obj.checksd = it.checksd;
						arr.push(obj);
						return arr;
					})
				})
				this.props.kdkds.bind(this)(arr)
			}
		});
	}
	// 商品选项框，更新页面数据和数据库数据
	dfgd(e){
		// let fg = $(e.target).attr('class');
		let _id = $(e.target).parent().parent().parent().parent().attr('id');
		let id = $(e.target).parent().parent().parent().attr('id');

		// let eve = $(e.target).parent().parent().parent().parent();

		// console.log(id)

		this.state.buycar.map((item,index)=>{
			if(item._id === _id){
				item.goods.map((im,ix)=>{
					if(im.id === id){
						if(im.checksd==="xuan"){
							im.checksd = "";
							this.setState({buycar: this.state.buycar})
							let arr = [];
							this.state.buycar.map((item)=>{
								item.goods.map((it)=>{
									let obj = {};
									obj.pic = it.pice;
									obj.qty = it.qty;
									obj.checksd = it.checksd;
									arr.push(obj);
									return arr;
								})
							})
							this.props.kdkds.bind(this)(arr)
							// console.log(this)
							$.ajax({
								type:'get',
								url:'http://localhost:13838/xuan',
								context:this,
								data:{
									fg:'',
									_id:_id,
									id:id
								},
								success(data){
									// console.log(data)
								}
							});
						}else if(im.checksd===""){
							im.checksd = "xuan";
							this.setState({buycar: this.state.buycar})
							let arr = [];
							this.state.buycar.map((item)=>{
								item.goods.map((it)=>{
									let obj = {};
									obj.pic = it.pice;
									obj.qty = it.qty;
									obj.checksd = it.checksd;
									arr.push(obj);
									return arr;
								})
							})
							this.props.kdkds.bind(this)(arr)
							$.ajax({
								type:'get',
								url:'http://localhost:13838/xuan',
								context:this,
								data:{
									fg:"xuan",
									_id:_id,
									id:id
								},
								success(data){
									// console.log(data)
								}
							});
						}
					}
				})
			}
		})
	}
	// 编辑按钮
	hjk(e){
		// console.log($(e.target).parent().parent())
		// let e = $(e.target).parent().parent().attr("id");
		this.setState({
			bool:!this.state.bool,
		})
	}
	// 商品数量减少
	jjian(_id,id,q,e){
		// console.log(_id,id,q)
		this.state.buycar.map((item,index)=>{
			if(item._id===_id){
				item.goods.map((im,ix)=>{
					if(im.id===id){
						if(q===0){
							im.qty=0;
						}else{
							im.qty = q-1;
						}
						this.setState({
							buycar:this.state.buycar
						})
						let arr = [];
						this.state.buycar.map((item)=>{
							item.goods.map((it)=>{
								let obj = {};
								obj.pic = it.pice;
								obj.qty = it.qty;
								obj.checksd = it.checksd;
								arr.push(obj);
								return arr;
							})
						})
						this.props.kdkds.bind(this)(arr)
						this.gfre(_id,id,im.qty)
					}
				})
			}
		})
	}
	
	// 商品数量增加
	jjia(_id,id,q,e){
		this.state.buycar.map((item,index)=>{
			if(item._id===_id){
				item.goods.map((im,ix)=>{
					if(im.id===id){
						im.qty = q*1+1;
						this.setState({
							buycar:this.state.buycar
						})
						let arr = [];
						this.state.buycar.map((item)=>{
							item.goods.map((it)=>{
								let obj = {};
								obj.pic = it.pice;
								obj.qty = it.qty;
								obj.checksd = it.checksd;
								arr.push(obj);
								return arr;
							})
						})
						this.props.kdkds.bind(this)(arr)
						this.gfre(_id,id,im.qty)
					}
				})
			}
		})
	}

	// 数量更改后传入数据库
	gfre(_id,id,qty){
		// console.log(_id,id,qty)
		$.ajax({
			url:"http://localhost:13838/qty",
			data:{
				_id:_id,
				id:id,
				qty:qty
			}
		})
	}


	删除单个商品
	dit(e){
		let _id = $(e.target).parent().parent().parent().attr('id');
		let id = $(e.target).parent().parent().attr("id")
		// console.log(_id,",",id)
		// $(e.target).parent().parent();
		this.state.buycar.map((item,index)=>{
			if(item._id === _id){
				// console.log(item._id,_id)
				item.goods.map((im,ix)=>{
					// console.log(im.id,id)
					if(im.id === id){
						// console.log(im)
						// console.log(item)
						item.goods.splice(ix,1);
						$.ajax({
							url:"http://localhost:13838/shan",
							context:this,
							data:{
								_id:_id,
								id : id,
								ix: item.goods.length
							},
							success(data){
								console.log(data)
							}
						})

						
						// 清空商品后删除店铺
						if((item.goods.length-1)<0){
							// console.log(666)
							this.state.buycar.splice(index,1)
						}
						this.setState({
							buycar:this.state.buycar
						})

						// 触发传参给购物车脚步总计结算
						let arr = [];
						this.state.buycar.map((item)=>{
							item.goods.map((it)=>{
								let obj = {};
								obj.pic = it.pice;
								obj.qty = it.qty;
								arr.push(obj);
								return arr;
							})
						})
						this.props.kdkds.bind(this)(arr)
					}
					// console.log(this.state.buycar)
				})
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
								return <div className="goodscar" key={index} id={item._id}>
									<div className="fenjiexian1"></div>
									{(function(self){
										if(item.goods.length>0){
											return <p className="goodscar_T"><i></i><span>{item.title}</span>
											<span onClick={self.hjk.bind(self)}>
												{(function(self){
													if(!self.state.bool){
														return "编辑"
													}else if(self.state.bool){
														return "完成"
													}
												})(self)}
											</span></p>
										}
									})(self)}
									{item.goods.map((gs,ix)=>{
										// console.log(gs)
										return <div key={ix} id={gs.id}>
												<div className="goodscar_list">
												<div className="list_ipt"><i className={gs.checksd} onClick={self.dfgd.bind(self)}></i></div>
												<div className="list_img"><img src={gs.url}/></div>
												<div className="list_ctr">
													<p>{gs.txt}</p>
													<p>fddssdafas</p>
													<p>
														<span>￥{gs.pice}</span>
														<div><i onClick={self.jjian.bind(self,item._id,gs.id,gs.qty,)}></i><input type="text" value={gs.qty}/><i onClick={self.jjia.bind(self,item._id,gs.id,gs.qty,)}></i></div>
													</p>
												</div>
											</div>
											<div className="edit_area" style={{display:self.state.bool?"flex":"none"}}><span><i></i>移入收藏</span><span onClick={self.dit.bind(self)}><i></i>删除</span></div>
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
		},
		kdkds:(arr)=>{
			// console.log(arr);
			dispatch({
				type:'total',
				fdfh:arr
			})
		}
	}
})(ShoppingMain);