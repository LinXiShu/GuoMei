import React, {
    Component
} from 'react';

//css
import './youmain17.css';

//html es5
//MV  Model View  View<=>Template(Model)
//SV  State View  View<= Render(State)


class Youmain17 extends Component {
    constructor(props) {
        super(props);
        //类实例化，执行
        this.state = {

        }
    }
    render() {
        return(
            <div className="main17">
                <img src="https://gfs10.gomein.net.cn/T1u9JjBjDT1RCvBVdK.jpg" alt="" />
            </div>
        );
    }
}

export default Youmain17;