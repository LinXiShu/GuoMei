import React, {
    Component
} from 'react';

//css
import './youmain4.css';
import '../../static/fonts/hfhfont/iconfont.css'

//html es5
//MV  Model View  View<=>Template(Model)
//SV  State View  View<= Render(State)


class Youmain4 extends Component {
    constructor(props) {
        super(props);
        //类实例化,执行
        this.state = {
            tabs:[
                {tabName:'母婴玩具',id:1},
                {tabName:'美妆个护',id:2},
                {tabName:'酒水茗茶',id:3},
            ],
            currentIndex:1,
        }
    }
    componentDidMount() {
        
    }
    tabChoiced=(id)=>{
        //tab切换到方法
        this.setState({
            currentIndex:id,
        });
    }
    render() {
        var _this = this;
        var isXia1Show=this.state.currentIndex==1 ? 'block' : 'none';
        var isXia2Show=this.state.currentIndex==2 ? 'block' : 'none';
        var isXia3Show=this.state.currentIndex==3 ? 'block' : 'none';

        var tabList= this.state.tabs.map(function(res,index) {
            // 遍历标签页，如果标签的id等于tabid，那么该标签就加多一个active的className
            var tabStyle=res.id==this.state.currentIndex ? 'subCtrl active iconfont icon-more' : 'subCtrl';

            return    <li key={index} onClick={this.tabChoiced.bind(_this,res.id)} className={tabStyle}>{res.tabName}</li>

        }.bind(_this));
        return(
            <div className="main4">
                <ul className="shang">
                    {tabList}
                </ul>
                <div className="xia">
                    <ul className="qiehuan" style={{"display":isXia1Show}}>
                        <li><img src={require('../../static/images/sc91.png')} alt="" /></li>
                        <li><img src={require('../../static/images/sc92.png')} alt="" /></li>
                    </ul>
                    <ul className="qiehuan" style={{"display":isXia2Show}}>
                        <li><img src={require('../../static/images/sc101.png')} alt="" /></li>
                        <li><img src={require('../../static/images/sc102.png')} alt="" /></li>
                    </ul>
                    <ul className="qiehuan" style={{"display":isXia3Show}}>
                        <li><img src={require('../../static/images/sc111.png')} alt="" /></li>
                        <li><img src={require('../../static/images/sc112.png')} alt="" /></li>
                    </ul>
                </div>
            </div>
            
        );
    }
}

export default Youmain4;