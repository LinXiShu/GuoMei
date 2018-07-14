import React, {
    Component
} from 'react';

//css
import './youmain1.css';

//html es5
//MV  Model View  View<=>Template(Model)
//SV  State View  View<= Render(State)


class Youmain1 extends Component {
    constructor(props) {
        super(props);
        //类实例化，执行
        this.state = {

        }
    }
    render() {
        return(
            <div className="main1">
                <img src="https://gfs11.gomein.net.cn/T12.bbBgET1RCvBVdK.jpg" alt="" />
                <img src="http://gfs10.gomein.net.cn/T1uPxQByAT1RCvBVdK.jpeg" alt="" />
            </div>
        );
    }
}

export default Youmain1;