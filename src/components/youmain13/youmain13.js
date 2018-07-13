import React, {
    Component
} from 'react';

//css
import './youmain13.css';

//html es5
//MV  Model View  View<=>Template(Model)
//SV  State View  View<= Render(State)


class Youmain13 extends Component {
    constructor(props) {
        super(props);
        //类实例化，执行
        this.state = {

        }
    }
    render() {
        return(
            <div className="main13">
                <img src="https://gfs10.gomein.net.cn/T10fAgBK_T1RCvBVdK.jpg" alt="" />
            </div>
        );
    }
}

export default Youmain13;