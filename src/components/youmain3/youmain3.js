import React, {
    Component
} from 'react';

//css
import './youmain3.css';

//html es5
//MV  Model View  View<=>Template(Model)
//SV  State View  View<= Render(State)


class Youmain3 extends Component {
    constructor(props) {
        super(props);
        //类实例化，执行
        this.state = {

        }
    }
    render() {
        return(
            <div className="main3">
                <img src="https://gfs12.gomein.net.cn/T1hMdjBsCT1RCvBVdK.jpg" alt="" />
            </div>
        );
    }
}

export default Youmain3;