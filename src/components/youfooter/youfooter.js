import React, {
    Component
} from 'react';

//css
import './youfooter.css';

//html es5
//MV  Model View  View<=>Template(Model)
//SV  State View  View<= Render(State)


class Youfooter extends Component {
    constructor(props) {
        super(props);
        //类实例化，执行
        this.state = {

        }
    }
    render() {
        return(
            <div className="weui-footer">
                <p className="weui-footer__links">
                    <a href="javascript:void(0);" className="weui-footer__link">Copyright © 2000-2018 gome.com.cn</a>
                </p>
                <p className="weui-footer__text">客服热线 : 4008-708-708</p>
            </div>
        );
    }
}

export default Youfooter;