/* 
* @Author: Marte
* @Date:   2018-07-10 16:48:40
* @Last Modified by:   Marte
* @Last Modified time: 2018-07-13 15:51:11
*/

import React, {
    Component
} from 'react';

//css
import './youmain10.css';
import $ from 'jquery';
import '../../static/fonts/hfhfont/iconfont.css';
import img1 from '../../static/images/sc21.png';

//html es5
//MV  Model View  View<=>Template(Model)
//SV  State View  View<= Render(State)


class Youmain10 extends Component {
    constructor(props) {
        super(props);
        //类实例化，执行
        this.state = {
            goods: [{
                id:"001",
                imgurl:"../../static/images/sc21.png",
                logo:"自营",
                title:"【国美自营】澳大利亚原瓶进口红酒",
                other:"仅剩120件",
                price:"34.9",
            },{
                id:"002",
                imgurl:"../../static/images/sc41.png",
                logo:"自营",
                title:"【国美自营】澳大利亚原瓶进口红酒",
                other:"仅剩120件",
                price:"34.9",
            },{
                id:"003",
                imgurl:"../../static/images/sc42.png",
                logo:"自营",
                title:"【国美自营】澳大利亚原瓶进口红酒",
                other:"仅剩120件",
                price:"34.9",
            },{
                id:"004",
                imgurl:"../../static/images/sc43.png",
                logo:"自营",
                title:"【国美自营】澳大利亚原瓶进口红酒",
                other:"仅剩120件",
                price:"34.9",
            },{
                id:"005",
                imgurl:"../../static/images/sc42.png",
                logo:"自营",
                title:"【国美自营】澳大利亚原瓶进口红酒",
                other:"仅剩120件",
                price:"34.9",
            },{
                id:"006",
                imgurl:"../../static/images/sc41.png",
                logo:"自营",
                title:"【国美自营】澳大利亚原瓶进口红酒",
                other:"仅剩120件",
                price:"34.9",
            }],

        }
    }
    render() {
        return(
            <div className="main10">
                <ul>
                    {(function(self){
                        return self.state.goods.map(function(item,index){
                            return  <li className="goods" key={index}>
                                        <div className="goods1">
                                            <img src={img1} alt="" />
                                            <span className="zhe"></span>
                                        </div>
                                        <div className="goods2">
                                            <span>{item.logo}</span>
                                            <span>{item.title}</span>
                                        </div>
                                        <div className="goods3">
                                            <p>{item.other}</p>
                                        </div>
                                        <div className="goods4">
                                            <span>{item.price}</span>
                                            <span className="iconfont icon-cart"></span>
                                        </div>
                                    </li>
                        })
                    })(this)}
                </ul>
            </div>
        );
    }
}
export default Youmain10;