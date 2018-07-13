import React, {
    Component
} from 'react';

//css
import './youlink.css';

//html es5
//MV  Model View  View<=>Template(Model)
//SV  State View  View<= Render(State)


class Youlink extends Component {
    constructor(props) {
        super(props);
        //类实例化，执行
        this.state = {

        }
    }
    render() {
        return(
            <div className="weui-flex">
                <div className="weui-flex__item"><div className="placeholder"><a href=""><span>登录</span></a></div></div>
                <div className="weui-flex__item"><div className="placeholder"><a href=""><span>注册</span></a></div></div>
                <div className="weui-flex__item"><div className="placeholder"><a href=""><span>更多</span></a></div></div>
                <div className="weui-flex__item xiao"><div className="placeholder"><a href=""><span>反馈</span></a></div></div>
            </div>
        );
    }
}

export default Youlink;