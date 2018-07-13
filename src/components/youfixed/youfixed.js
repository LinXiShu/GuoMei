import React, {
    Component
} from 'react';

//css
import './youfixed.css';
import '../../static/fonts/hfhfont/iconfont.css';
import $ from 'jquery'

//html es5
//MV  Model View  View<=>Template(Model)
//SV  State View  View<= Render(State)


class Youfixed extends Component {
    constructor(props) {
        super(props);
        //类实例化，执行
        this.state = {

        }
    }
    ding(){
        let timer = setInterval(function(){
            let speed = parseInt(window.scrollY/5);
            if(window.scrollY<=10){
                speed=0;
                clearInterval(timer);
            }
            window.scrollBy(0,-speed);
        },50)
    }
    render() {
        return(
            <div>
                <ul className="diBu1">
                    <li><img src={require('../../static/images/sc4.jpeg')} alt="" /></li>
                    <li><img src={require('../../static/images/sc5.jpeg')} alt="" /></li>
                    <li><img src={require('../../static/images/sc6.jpeg')} alt="" /></li>
                </ul>
                <ul className="diBu2">
                    <li className="car">
                        <i className="iconfont icon-cart"></i>
                    </li>
                    <li className="top" onClick={this.ding.bind(this)}>
                        <i className="iconfont icon-less"></i>
                        <span>顶部</span>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Youfixed;