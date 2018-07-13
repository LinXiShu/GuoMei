import React, {
    Component
} from 'react';

//css
import './youmain25.css';

//html es5
//MV  Model View  View<=>Template(Model)
//SV  State View  View<= Render(State)


class Youmain25 extends Component {
    constructor(props) {
        super(props);
        //类实例化，执行
        this.state = {

        }
    }
    render() {
        return(
            <div className="main25">
                <img src={require('../../static/images/sc20.png')} alt="" />
            </div>
        );
    }
}

export default Youmain25;