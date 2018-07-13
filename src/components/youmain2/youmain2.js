import React, {
    Component
} from 'react';

//css
import './youmain2.css';
import $ from 'jquery';

//html es5
//MV  Model View  View<=>Template(Model)
//SV  State View  View<= Render(State)


class Youmain2 extends Component {
    constructor(props) {
        super(props);
        //类实例化，执行
        this.state = {

        }
    }
    yanse(){
        for(var i=0;i<$('.tab-item').length;i++){
            $('.tab-item')[i].onclick=function(){
                this.style.color="#F20C59";
                this.children[1].style.display="block"
            }
        }
    }
    render() {
        return(
            <div className="main2">
                <div className="tab">
                    <div className="tab-item" onClick={this.yanse.bind(this)}>
                        <span className="active">必抢清单</span>
                        <i className="line"></i>
                    </div>
                    <div className="tab-item" onClick={this.yanse.bind(this)}>
                        <span>尖货秒杀</span>
                        <i className="line"></i>
                    </div>
                    <div className="tab-item" onClick={this.yanse.bind(this)}>
                        <span>3件5折</span>
                        <i className="line"></i>
                    </div>
                    <div className="tab-item" onClick={this.yanse.bind(this)}>
                        <span>大牌狂欢</span>
                        <i className="line"></i>
                    </div>
                    <div className="tab-item" onClick={this.yanse.bind(this)}>
                        <span>爆款嗨翻天</span>
                        <i className="line"></i>
                    </div>
                    <div className="tab-item" onClick={this.yanse.bind(this)}>
                        <span>母婴玩具</span>
                        <i className="line"></i>
                    </div>
                    <div className="tab-item" onClick={this.yanse.bind(this)}>
                        <span>美妆个护</span>
                        <i className="line"></i>
                    </div>
                    <div className="tab-item" onClick={this.yanse.bind(this)}>
                        <span>酒水茗茶</span>
                        <i className="line"></i>
                    </div>
                    <div className="tab-item" onClick={this.yanse.bind(this)}>
                        <span>食品饮料</span>
                        <i className="line"></i>
                    </div>
                    <div className="tab-item" onClick={this.yanse.bind(this)}>
                        <span>家居日用</span>
                        <i className="line"></i>
                    </div>
                    <div className="tab-item" onClick={this.yanse.bind(this)}>
                        <span>进口食品</span>
                        <i className="line"></i>
                    </div>
                    <div className="tab-item" onClick={this.yanse.bind(this)}>
                        <span>汽车配件</span>
                        <i className="line"></i>
                    </div>
                </div>
            </div>
        );
    }
}
export default Youmain2;