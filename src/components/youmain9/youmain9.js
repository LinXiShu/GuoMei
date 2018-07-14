import React, {
    Component
} from 'react';

//css
import './youmain9.css';
import $ from 'jquery';

//html es5
//MV  Model View  View<=>Template(Model)
//SV  State View  View<= Render(State)


class Youmain9 extends Component {
    constructor(props) {
        super(props);
        //类实例化，执行
        this.state = {
            
        }
    }
    yanse(e){
        for(let i=0;i<$('li').length;i++){
            // $('li')[i].removeClass("active");
            $(e.target).addClass("active");
        }
    }
    render() {
        return(
            <div className="main9">
                <ul>
                    <li className="active" onClick={this.yanse.bind(this)}>10:00</li>
                    <li onClick={this.yanse.bind(this)}>15:00</li>
                    <li onClick={this.yanse.bind(this)}>18:00</li>
                </ul>
            </div>
        );
    }
}
export default Youmain9;