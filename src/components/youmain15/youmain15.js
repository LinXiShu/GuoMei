import React, {
    Component
} from 'react';

//css
import './youmain15.css';

//html es5
//MV  Model View  View<=>Template(Model)
//SV  State View  View<= Render(State)


class Youmain15 extends Component {
    constructor(props) {
        super(props);
        //类实例化，执行
        this.state = {

        }
    }
    render() {
        return(
            <div className="main15">
                <img src="https://gfs10.gomein.net.cn/T13uCjB4bv1RCvBVdK.jpg" alt="" />
            </div>
        );
    }
}

export default Youmain15;