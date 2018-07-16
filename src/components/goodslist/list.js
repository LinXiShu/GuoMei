import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import './list.css';
import '../../static/fonts/hfhfont/iconfont.css';
import {Router, Route, hashHistory, Link, IndexRoute, browserHistory} from 'react-router-dom';
import $ from 'jquery';

import PropTypes from 'prop-types';

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bool:true,
            addname:'active',
            titi: '',
            zhuangtai:0,
            showstyle:true,
            sty:0,

          
        }       
       
    }

    show(e){


        if( !( ($(e.target).parent()).hasClass('active') ) ){
       
            if(e.target.tagName == 'SPAN'){
                   ($(e.target).parent()).addClass(this.state.addname);
                   ($(e.target).children()).css('display','block');
                 
                    
             };
            this.setState({bool:false})
        }else if( ($(e.target).parent()).hasClass('active') ){
             
                if(e.target.tagName == 'SPAN'){
                       ($(e.target).parent()).removeClass(this.state.addname);
                       ($(e.target).children()).css('display','none');
                     
                 };
            this.setState({bool:true})
        };
    }


componentDidMount(){
   
        var data1;
        var data2;
    let shuzu = this;

    var id;
    

    new Promise(function(resolve){

        $.ajax({
                    url: 'http://localhost:1898/products?classa=1',
                    type:'GET',
                    success:function(data){
                        data1=data;
                        $('.goods_list_list').get(0).innerHTML=data.map(function(item){


                            return ` 

                                <li class="gd_list" id=${item.id}>
                                    <a class="a-mask" id=${item.id}></a>
                                    <div class="cont flexbox"> 
                                        <span class="gd_img">
                                        <img src="${item.photo}" />
                                        </span>
                                        <div class="info_box flex1">
                                            <p class="title ellipsis_two">
                                                <i class="ict-zyb">自营</i>${item.name}
                                            </p>
                                            <div class="tag-wrap">
                                                <i class="sale-tag">优惠套装</i>
                                            </div>
                                            <div class="price_warp">
                                                <span class="price">
                                                    ¥<i>${item.price}</i>
                                                </span>
                                            </div>
                                            <span class="cmt">
                                                <i class="cash_back">最高返32.88</i><i class="">23495人评论</i>
                                            </span>

                                    </div>
                                </div>
                            </li>
                            


                            `
                        }).join('');

                        
                    }
        });
    




        setTimeout(function(){
                    $.ajax({
                            url: 'http://localhost:1898/product',
                            type:'GET',
                            success:function(data){
                                data2 = data;

                             
                               for(var i=0;i<data2.length;i++){
                                data1.push(data2[i]);


                               }

                                resolve(data1);
                               
                                

                                $('.goods_list_list').get(1).innerHTML=data.map(function(item){

                                    return ` 

                                        <li class="gd_list" id=${item.id}>
                                            <a class="a-mask" id=${item.id}
                                            ></a>
                                            <div class="cont flexbox">
                                                <span class="gd_img">
                                                <img src="${item.photo}" />
                                                </span>
                                                <div class="info_box flex1">
                                                    <p class="title ellipsis_two">
                                                        <i class="ict-zyb">自营</i>${item.name}
                                                    </p>
                                                    <div class="tag-wrap">
                                                        <i class="sale-tag">优惠套装</i>
                                                    </div>
                                                    <div class="price_warp">
                                                        <span class="price">
                                                            ¥<i>${item.price}</i>
                                                        </span>
                                                    </div>
                                                    <span class="cmt">
                                                        <i class="cash_back">最高返32.88</i><i class="">23495人评论</i>
                                                    </span>

                                        
                                            </div>
                                        </div>
                                    </li>
                                    `
                                }).join('');
                                
                            }
                });
        }, 30)


    }).then(function(res){
  
            function compare(property){
                return function(a,b){
                    var value1 = a[property];
                    var value2 = b[property];
                    return value1 - value2;
                }     
        }

         var arr=res.sort(compare('price'));

         shuzu.state.titi = arr;

        $('.gd_list').on('click', function(e){

            id = e.target.id;

            shuzu.context.router.history.push('/details', {id : id})
        })

    })

}

rank(){  

        $('.opc_tag_list').css('display','none');
        $('.zh_show').css("display","none");


        var datalist=this.state.titi;
        if(this.state.zhuangtai==0){

            $('.bigbox').html('');
            
            $('.bigbox').append('<ul class="goods_list_list"></ul>');
            $('.goods_list_list').html(datalist.map(function(items){
                return ` 

                    <li class="gd_list" id=${items.id}>
                        <a class="a-mask"></a>
                        <div class="cont flexbox">
                            <span class="gd_img">
                                <img src="${items.photo}" />
                            </span>
                            <div class="info_box flex1">
                                <p class="title ellipsis_two">
                                    <i class="ict-zyb">自营</i>${items.name}
                                </p>
                                <div class="tag-wrap">
                                    <i class="sale-tag">优惠套装</i>
                                </div>
                                <div class="price_warp">
                                    <span class="price">
                                        ¥<i>${items.price}</i>
                                    </span>
                                </div>
                                <span class="cmt">
                                    <i class="cash_back">最高返32.88</i><i class="">23495人评论</i>
                                </span>

                                        
                                </div>
                        </div>
                    </li>

                `

            }));
            $('.postop').css("color","#F20C59");
            $('.posbottom').css("color","#000");
            $('.bigbox').append('<div class="opc_big_list"></div>');
            $('.opc_big_list').css('display','none');
            this.setState({zhuangtai:1})

        }else if(this.state.zhuangtai==1){
           
            var inverted= datalist.reverse();
            $('.bigbox').html('');
            $('.bigbox').append('<ul class="goods_list_list"></ul>');
            $('.goods_list_list').html(datalist.map(function(items){
                return ` 

                    <li class="gd_list" id=${items.id}>
                        <a class="a-mask"></a>
                        <div class="cont flexbox">
                            <span class="gd_img">
                                <img src="${items.photo}" />
                            </span>
                            <div class="info_box flex1">
                                <p class="title ellipsis_two">
                                    <i class="ict-zyb">自营</i>${items.name}
                                </p>
                                <div class="tag-wrap">
                                    <i class="sale-tag">优惠套装</i>
                                </div>
                                <div class="price_warp">
                                    <span class="price">
                                        ¥<i>${items.price}</i>
                                    </span>
                                </div>
                                <span class="cmt">
                                    <i class="cash_back">最高返32.88</i><i class="">23495人评论</i>
                                </span>

                                        
                                </div>
                        </div>
                    </li>

                `

            }));
            $('.posbottom').css("color","#F20C59");
            $('.postop').css("color","#000");
            $('.bigbox').append('<div class="opc_big_list"></div>');
            $('.opc_big_list').css('display','none');
            this.setState({zhuangtai:0});
            datalist.reverse();
          

        }
      
}

synthetic(){
  
    if(this.state.sty==0){
        $('.opc_big_list').css('display','block');
        $('.zh_show').css("display","block");
        this.setState({showstyle:false});
        this.setState({sty:1});

    }else if(this.state.sty==1){
        $('.opc_big_list').css('display','none');
        $('.zh_show').css("display","none");
        this.setState({showstyle:true});
        this.setState({sty:0});

    }


}


    render() {
        return(
            <main>


                
                
                <a className="cart"><i className="iconfont icon-cart"></i></a>
               
                <div className="Tabs_module">
                    <p className="general_list_second_show" onClick={this.synthetic.bind(this)} >
                        <span className="tab_ckd">综合</span>
                        
                    </p>
                    <p className="pos_r" onClick={this.rank.bind(this)}>
                        <span>价格</span>
                        
                        <i className="iconfont icon-less postop"></i>
                        <i className="iconfont icon-moreunfold posbottom"></i>
                    </p>
                    <p>
                         <span>销量</span>
                    </p>
                    <p className=" " >筛选</p>
                </div>
                <ul className="zh_show">
                    <li>综合<span className="right_narrow"><i  className="iconfont icon-selected" ></i></span></li>
                    <li>价格从高到低<span className="right_narrow"><i  className="iconfont icon-selected" ></i></span></li>
                    
                </ul>
                <ul className="tag_list flexbox">
                    <li className="ajax_req tag_item" onClick={this.show.bind(this)} >
                        <span className="ellipsis">国美自营
                            <i  className="iconfont icon-selected" ></i></span></li>
                    <li className="ajax_req tag_item " onClick={this.show.bind(this)}  >
                        <span className="ellipsis">仅看有货
                            <i  className="iconfont icon-selected" ></i></span></li>
                    
                    <li className="ajax_req tag_item " onClick={this.show.bind(this)}   >
                        <span className="ellipsis">返利
                            <i  className="iconfont icon-selected" ></i></span></li>
                    
                    <li className="tag_item have_down" >
                        <span className="flex1 ellipsis" >品牌</span>
                        <i className="down"></i>
                        <p className="line"></p> 
                    </li>

                    <div className="opc_tag_list" style={{display:this.state.showstyle?"none":"block"}}></div>
                </ul>
               


                <div className="bigbox">
                    <div className="opc_big_list"  style={{display:this.state.showstyle?"none":"block"}}></div>
                    
                    <ul className="goods_list_list">
                    
                    </ul>
               

                    <div className="special_offer">
                        <div className="img_box">
                             <img src="http://gfs11.gomein.net.cn/T1bJJgBjCT1RCvBVdK.jpg" alt="" />
                        </div>
                        <div className="content">
                        <h2>彩电特惠季</h2>
                        <h3>夏普60英寸智能电视</h3>
                        <a className="flexbox v_center" href="http://prom.m.gome.com.cn/html/prodhtml/topics/201803/22/salesE5hCKy8mAM.html">点击进入<i data-icon="£" className="" flexbox="" v_center=""></i></a>
                        </div>
                    </div>
                    <ul className="goods_list_list">
                    
                    </ul>


                </div>
            </main>
           
            
        );
    }
}


List.contextTypes = {

    router: PropTypes.object.isRequired
}

export default List;