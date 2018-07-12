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
				// console.log(this);
				// for(let i=0; i<this.state.buycar.length;i++){
				// 	for(let j=0;j<this.state.buycar[i].goods.length;j++){
				// 		let a = this.state.buycar[i].goods[j];
				// 		// console.log(a)
				// 		if(a.checksd === "xuan"){
				// 			$('i','.goodscar_T').addClass("xuan")
				// 		}
				// 	}
				// }
			this.props.kdkds.bind(this)('yytut')
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
					if(im.id === id*1){
						if(im.checksd==="xuan"){
							im.checksd = "";
							this.setState({buycar: this.state.buycar})
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
	// 编辑商品列表
	hjk(e){
		// console.log($(e.target).parent().parent())
		// let e = $(e.target).parent().parent().attr("id");
		this.setState({
			bool:!this.state.bool,
		})
	}
	// 商品数量减少
	jjian(e){
		let n = $(e.target).parent();
		let m = $('input',$(n)).val();
		if(m<=0){
			m=m;
		}else if(m>0){
			m--;
		}
		$('input',$(n)).val(m)
		// console.log($('input',$(n)).val())

	}
	// 商品数量增加
	jjia(e){
		let n = $(e.target).parent();
		let m = $('input',$(n)).val();
		m++;
		$('input',$(n)).val(m)
	}
	删除单个商品
	dit(e){
		let _id = $(e.target).parent().parent().parent().attr('id');
		let id = $(e.target).parent().parent().attr("id")
		// console.log(_id,",",id)
		// $(e.target).parent().parent();
		this.state.buycar.map((item,index)=>{
			if(item._id === _id){
				item.goods.map((im,ix)=>{
					if(im.id === id*1){
						// console.log(im)
						// console.log(item)
						item.goods.splice(ix,1);
						if((item.goods.length-1)<0){
							// console.log(666)
							this.state.buycar.splice(index,1)
							$.ajax({
								url:"http://localhost:13838/shan",
							})
						}
						this.setState({
							buycar:this.state.buycar
						})
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
														<div><i onClick={self.jjian.bind(self)}></i><input type="number" value={gs.qty}/><i onClick={self.jjia.bind(self)}></i></div>
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
		kdkds:(p)=>{
			console.log(p);
			dispatch({
				type:'',
			})
		}
	}
})(ShoppingMain);