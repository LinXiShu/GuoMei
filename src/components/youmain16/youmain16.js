import React, {
    Component
} from 'react';

//css
import './youmain16.css';
import img1 from '../../static/images/sc37.png';

//html es5
//MV  Model View  View<=>Template(Model)
//SV  State View  View<= Render(State)


class Youmain16 extends Component {
    constructor(props) {
        super(props);
        //类实例化，执行
        this.state = {
            goods: [{
                id:"001",
                imgurl:"../../static/images/sc37.png",
                title:"【国美自营】巴黎水含气天然矿泉水",
                price:"4.9",
            },{
                id:"002",
                imgurl:"../../static/images/sc37.png",
                title:"【国美自营】巴黎水含气天然矿泉水",
                price:"4.9",
            },{
                id:"003",
                imgurl:"../../static/images/sc37.png",
                title:"【国美自营】巴黎水含气天然矿泉水",
                price:"4.9",
            },{
                id:"004",
                imgurl:"../../static/images/sc37.png",
                title:"【国美自营】巴黎水含气天然矿泉水",
                price:"4.9",
            },{
                id:"005",
                imgurl:"../../static/images/sc37.png",
                title:"【国美自营】巴黎水含气天然矿泉水",
                price:"4.9",
            },{
                id:"006",
                imgurl:"../../static/images/sc37.png",
                title:"【国美自营】巴黎水含气天然矿泉水",
                price:"4.9",
            },{
                id:"007",
                imgurl:"../../static/images/sc37.png",
                title:"【国美自营】巴黎水含气天然矿泉水",
                price:"4.9",
            },{
                id:"008",
                imgurl:"../../static/images/sc37.png",
                title:"【国美自营】巴黎水含气天然矿泉水",
                price:"4.9",
            },{
                id:"009",
                imgurl:"../../static/images/sc37.png",
                title:"【国美自营】巴黎水含气天然矿泉水",
                price:"4.9",
            },{
                id:"010",
                imgurl:"../../static/images/sc37.png",
                title:"【国美自营】巴黎水含气天然矿泉水",
                price:"4.9",
            },{
                id:"011",
                imgurl:"../../static/images/sc37.png",
                title:"【国美自营】巴黎水含气天然矿泉水",
                price:"4.9",
            },{
                id:"012",
                imgurl:"../../static/images/sc37.png",
                title:"【国美自营】巴黎水含气天然矿泉水",
                price:"4.9",
            },{
                id:"013",
                imgurl:"../../static/images/sc37.png",
                title:"【国美自营】巴黎水含气天然矿泉水",
                price:"4.9",
            },{
                id:"014",
                imgurl:"../../static/images/sc37.png",
                title:"【国美自营】巴黎水含气天然矿泉水",
                price:"4.9",
            },{
                id:"015",
                imgurl:"../../static/images/sc37.png",
                title:"【国美自营】巴黎水含气天然矿泉水",
                price:"4.9",
            },{
                id:"016",
                imgurl:"../../static/images/sc37.png",
                title:"【国美自营】巴黎水含气天然矿泉水",
                price:"4.9",
            },{
                id:"017",
                imgurl:"../../static/images/sc37.png",
                title:"【国美自营】巴黎水含气天然矿泉水",
                price:"4.9",
            },{
                id:"018",
                imgurl:"../../static/images/sc37.png",
                title:"【国美自营】巴黎水含气天然矿泉水",
                price:"4.9",
            },{
                id:"019",
                imgurl:"../../static/images/sc37.png",
                title:"【国美自营】巴黎水含气天然矿泉水",
                price:"4.9",
            },{
                id:"020",
                imgurl:"../../static/images/sc37.png",
                title:"【国美自营】巴黎水含气天然矿泉水",
                price:"4.9",
            },{
                id:"021",
                imgurl:"../../static/images/sc37.png",
                title:"【国美自营】巴黎水含气天然矿泉水",
                price:"4.9",
            },{
                id:"022",
                imgurl:"../../static/images/sc37.png",
                title:"【国美自营】巴黎水含气天然矿泉水",
                price:"4.9",
            },{
                id:"023",
                imgurl:"../../static/images/sc37.png",
                title:"【国美自营】巴黎水含气天然矿泉水",
                price:"4.9",
            },{
                id:"024",
                imgurl:"../../static/images/sc37.png",
                title:"【国美自营】巴黎水含气天然矿泉水",
                price:"4.9",
            }]
        }
    }
    render() {
        return(
            <div className="main16">
                <ul>
                    {(function(self){
                        return self.state.goods.map(function(item,index){
                            return  <li className="goods" key={index}>
                                        <img src={img1} alt="" />
                                        <p>{item.title}</p>
                                        <span>{item.price}</span>
                                    </li>
                        })
                    })(this)}
                </ul>
            </div>
        );
    }
}
export default Youmain16;