import React, {
    Component
} from 'react';

//css
import './youmain6.css';

//html es5
//MV  Model View  View<=>Template(Model)
//SV  State View  View<= Render(State)


class Youmain6 extends Component {
    constructor(props) {
        super(props);
        //类实例化，执行
        this.state = {

        }
    }
    render() {
        return(
            <div className="main6">
                <img src="https://gfs11.gomein.net.cn/T1IBVvBvZT1RCvBVdK.jpg" alt="" />
            </div>
        );
    }
}

export default Youmain6;