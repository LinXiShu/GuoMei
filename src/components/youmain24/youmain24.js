import React, {
    Component
} from 'react';

//css
import './youmain24.css';

//html es5
//MV  Model View  View<=>Template(Model)
//SV  State View  View<= Render(State)


class Youmain24 extends Component {
    constructor(props) {
        super(props);
        //类实例化，执行
        this.state = {

        }
    }
    render() {
        return(
            <div className="main24">
                <img src="https://gfs12.gomein.net.cn/T1ZpKbB_ZT1RCvBVdK.jpg" alt="" />
                <ul className="dong">
                    <li>
                        <img src={require('../../static/images/sc25.png')} alt="" />
                        <p>【国美自营】森田泼尿酸黑面膜4片</p>
                        <span>69</span>
                    </li>
                    <li>
                        <img src={require('../../static/images/sc29.png')} alt="" />
                        <p>【国美自营】森田泼尿酸黑面膜4片</p>
                        <span>69</span>
                    </li>
                    <li>
                        <img src={require('../../static/images/sc24.png')} alt="" />
                        <p>【国美自营】森田泼尿酸黑面膜4片</p>
                        <span>69</span>
                    </li>
                    <li>
                        <img src={require('../../static/images/sc23.png')} alt="" />
                        <p>【国美自营】森田泼尿酸黑面膜4片</p>
                        <span>69</span>
                    </li>
                    <li>
                        <img src={require('../../static/images/sc27.png')} alt="" />
                        <p>【国美自营】森田泼尿酸黑面膜4片</p>
                        <span>69</span>
                    </li>
                    <li>
                        <img src={require('../../static/images/sc28.png')} alt="" />
                        <p>【国美自营】森田泼尿酸黑面膜4片</p>
                        <span>69</span>
                    </li>
                    <li>
                        <img src={require('../../static/images/sc24.png')} alt="" />
                        <p>【国美自营】森田泼尿酸黑面膜4片</p>
                        <span>69</span>
                    </li>
                    <li>
                        <img src={require('../../static/images/sc29.png')} alt="" />
                        <p>【国美自营】森田泼尿酸黑面膜4片</p>
                        <span>69</span>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Youmain24;