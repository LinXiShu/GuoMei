/* 
* @Author: Marte
* @Date:   2018-07-10 16:48:40
* @Last Modified by:   Marte
* @Last Modified time: 2018-07-12 15:28:08
*/

import React, {
    Component
} from 'react';

//css
import './youmain10.css';
import $ from 'jquery';
import '../../static/fonts/hfhfont/iconfont.css'

//html es5
//MV  Model View  View<=>Template(Model)
//SV  State View  View<= Render(State)


class Youmain10 extends Component {
    constructor(props) {
        super(props);
        //类实例化，执行
        this.state = {

        }
    }
    componentWillReceiveProps(){
        
    }
    componentWillUnmount(){
        let main10 = document.querySelector(".main10");
        let xhr = new XMLHttpRequest();
        let qty=0;
        xhr.onreadystatechange = function(){
            if(xhr.readyState == 4){
                let res = JSON.parse(xhr.responseText);
                let div = document.createElement('div');
                div.innerHTML = res.data.map(item=>{
                    return `<div className="goods1" data-guid="${item.id}">
                                <img src="${item.imgurl}" alt="" />
                                <span className="zhe"></span>
                            </div>
                            <div className="goods2">
                                <span>"${item.logo}"</span>
                                <span>"${item.total}"</span>
                            </div>
                            <div className="goods3">
                                <p>"${item.other}"</p>
                            </div>
                            <div className="goods4">
                                <span>"${item.price}"</span>
                                <span className="iconfont icon-cart"></span>
                            </div>`
                }).join('\n');
                main10.innerHTML = '';
                main10.appendChild(div);
            }
        }
        xhr.open("get", "../php/liebiao.php?qty="+qty, true);

        xhr.send();
    }
    render() {
        return(
            <div className="main10">
                <div className="goods">
                    <div className="goods1">
                        <img src={require('../../static/images/sc21.png')} alt="" />
                        <span className="zhe"></span>
                    </div>
                    <div className="goods2">
                        <span>自营</span>
                        <span>【国美自营】澳大利亚原瓶进口红酒</span>
                    </div>
                    <div className="goods3">
                        <p>仅剩120件</p>
                    </div>
                    <div className="goods4">
                        <span>34.9</span>
                        <span className="iconfont icon-cart"></span>
                    </div>
                </div>
                <div className="goods">
                    <div className="goods1">
                        <img src={require('../../static/images/sc41.png')} alt="" />
                        <span className="zhe"></span>
                    </div>
                    <div className="goods2">
                        <span>自营</span>
                        <span>【国美自营】澳大利亚原瓶进口红酒</span>
                    </div>
                    <div className="goods3">
                        <p>仅剩120件</p>
                    </div>
                    <div className="goods4">
                        <span>34.9</span>
                        <span className="iconfont icon-cart"></span>
                    </div>
                </div>
                <div className="goods">
                    <div className="goods1">
                        <img src={require('../../static/images/sc42.png')} alt="" />
                        <span className="zhe"></span>
                    </div>
                    <div className="goods2">
                        <span>自营</span>
                        <span>【国美自营】澳大利亚原瓶进口红酒</span>
                    </div>
                    <div className="goods3">
                        <p>仅剩120件</p>
                    </div>
                    <div className="goods4">
                        <span>34.9</span>
                        <span className="iconfont icon-cart"></span>
                    </div>
                </div>
                <div className="goods">
                    <div className="goods1">
                        <img src={require('../../static/images/sc43.png')} alt="" />
                        <span className="zhe"></span>
                    </div>
                    <div className="goods2">
                        <span>自营</span>
                        <span>【国美自营】澳大利亚原瓶进口红酒</span>
                    </div>
                    <div className="goods3">
                        <p>仅剩120件</p>
                    </div>
                    <div className="goods4">
                        <span>34.9</span>
                        <span className="iconfont icon-cart"></span>
                    </div>
                </div>
                <div className="goods">
                    <div className="goods1">
                        <img src={require('../../static/images/sc41.png')} alt="" />
                        <span className="zhe"></span>
                    </div>
                    <div className="goods2">
                        <span>自营</span>
                        <span>【国美自营】澳大利亚原瓶进口红酒</span>
                    </div>
                    <div className="goods3">
                        <p>仅剩120件</p>
                    </div>
                    <div className="goods4">
                        <span>34.9</span>
                        <span className="iconfont icon-cart"></span>
                    </div>
                </div>
                <div className="goods">
                    <div className="goods1">
                        <img src={require('../../static/images/sc21.png')} alt="" />
                        <span className="zhe"></span>
                    </div>
                    <div className="goods2">
                        <span>自营</span>
                        <span>【国美自营】澳大利亚原瓶进口红酒</span>
                    </div>
                    <div className="goods3">
                        <p>仅剩120件</p>
                    </div>
                    <div className="goods4">
                        <span>34.9</span>
                        <span className="iconfont icon-cart"></span>
                    </div>
                </div>
            </div>
        );
    }
}
export default Youmain10;