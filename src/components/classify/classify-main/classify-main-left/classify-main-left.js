import React,{Component}from 'react';
import ReactDOM from 'react-dom';
import './classify-main-left.css';
import $ from 'jquery';


class Classify_main_left extends React.Component{

    state = {

        data: 122,
        list1: null,
        className:'changestyle',
       
    }

    Fors(e){

        for(let i=0;i<$('.list1').find('A').length;i++){
        

            ($('.list1').find('A'))[i].className = '';
        }
      

        if(e.target.tagName == 'A'){
           e.stopPropagation();
           e.target.className=this.state.className; 
        }


    }

    No0(e){  

        this.Fors(e);
        this.props.No0();
       
        
    }

    No1(e){
        this.Fors(e);
        this.props.No1()
        
    }

    No2(e){
        this.Fors(e);
        this.props.No2()
        
    }

  


      


    render(){
        return(
            <div className="category-nav">
                <aside className="scroller" id="leftScroller">
                    <ul className="list list1">
                        <li onClick={this.No0.bind(this)}  >
                            <a href="#" title="热门分类" className={this.state.className}>热门分类</a>
                        </li>
                        <li onClick={this.No1.bind(this)} >
                            <a href="#" title="手机数码">手机数码</a>
                        </li>
                        <li  onClick={this.No2.bind(this)}>
                            <a href="#" title="电脑办公">电脑办公</a>
                        </li>
                        <li>
                            <a href="#" title="电视影音">电视影音</a>
                        </li>
                        <li>
                            <a href="#" title="空调冰洗">空调冰洗</a>
                        </li>
                        <li>
                            <a href="#" title="厨房卫浴">厨房卫浴</a>
                        </li>
                        <li>
                            <a href="#" title="生活电器">生活电器</a>
                        </li>
                        <li>
                            <a href="#" title="食品酒水">食品酒水</a>
                        </li>
                        <li>
                            <a href="#" title="美妆个护">美妆个护</a>
                        </li>
                        <li>
                            <a href="#" title="母婴玩具">母婴玩具</a>
                        </li>
                        <li>
                            <a href="#" title="医疗保健">医疗保健</a>
                        </li>
                        <li>
                            <a href="#" title="服饰鞋帽">服饰鞋帽</a>
                        </li>
                        <li>
                            <a href="#" title="运动户外">运动户外</a>
                        </li>
                        <li>
                            <a href="#" title="箱包奢品">箱包奢品</a>
                        </li>
                        <li>
                            <a href="#" title="钟表首饰">钟表首饰</a>
                        </li>
                        <li>
                            <a href="#" title="住宅家具">住宅家具</a>
                        </li>
                        <li>
                            <a href="#" title="家装建材">家装建材</a>
                        </li>
                        <li>
                            <a href="#" title="家居日用">家居日用</a>
                        </li>
                        <li>
                            <a href="#" title="床品家纺">床品家纺</a>
                        </li>
                        <li>
                            <a href="#" title="汽车用品">汽车用品</a>
                        </li>
                        <li>
                            <a href="#" title="黄金收藏">黄金收藏</a>
                        </li>
                        <li>
                            <a href="#" title="智能家居">智能家居</a>
                        </li>
                        <li>
                            <a href="#" title="金融理财">金融理财</a>
                        </li>
                        <li>
                            <a href="#" title="生活服务">生活服务</a>
                        </li>
                    </ul>
                </aside>
            </div>
        )
    }

}
export default Classify_main_left;