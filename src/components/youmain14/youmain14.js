import React, {
    Component
} from 'react';

//css
import './youmain14.css';

//html es5
//MV  Model View  View<=>Template(Model)
//SV  State View  View<= Render(State)


class Youmain14 extends Component {
    constructor(props) {
        super(props);
        //类实例化，执行
        this.state = {

        }
    }
    render() {
        return(
            <div>
                <ul className="main14">
                    <li><img src={require('../../static/images/sc12.png')} alt="" /></li>
                    <li><img src={require('../../static/images/sc13.png')} alt="" /></li>
                    <li><img src={require('../../static/images/sc14.png')} alt="" /></li>
                    <li><img src={require('../../static/images/sc15.png')} alt="" /></li>
                    <li><img src={require('../../static/images/sc16.png')} alt="" /></li>
                    <li><img src={require('../../static/images/sc17.png')} alt="" /></li>
                    <li><img src={require('../../static/images/sc18.png')} alt="" /></li>
                    <li><img src={require('../../static/images/sc19.png')} alt="" /></li>
                </ul>
            </div>
        );
    }
}

export default Youmain14;