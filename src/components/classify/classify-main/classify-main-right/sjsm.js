import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './rmfl.css';
import {Router, Route, hashHistory, Link, IndexRoute, browserHistory} from 'react-router-dom';


class Sjsm extends Component{



    render(){
        return(
            <div className="cat-list" data-index="1">
                <div className="banner">
                    <a title="手机数码">
                    <img className="loading-img default-bg-sm" src="http://gfs9.gomein.net.cn/T1A0JQB7hv1RCvBVdK.jpg"/ ></a>
                </div> 
                <div className="item" data-id="0">
                    <h3 className="title" alt="手机通讯">手机通讯</h3>
                    <ul className="lista ">
                                
                        <li>
                            <a data-id="0">
                                        
                                <img className="loading-img default-bg-sm" src="http://img11.gomein.net.cn/image/prodimg/gicon/cat10000070.png" />
                                <span className="name">手机</span>
                                    
                            </a>
                        </li>
                                
                        <li>
                            <a data-id="1" >
                                        
                                <img className="loading-img default-bg-sm" src="http://img12.gomein.net.cn/image/prodimg/gicon/cat10000076.png" />
                                <span className="name">对讲机</span>
                                    
                            </a>
                        </li>
                                
                    </ul>
                </div>
                <div className="item" data-id="1">
                        <h3 className="title" alt="手机配件">手机配件</h3>
                        <ul className="lista ">
                                
                            <li>
                                <a data-id="0">
                                        
                                    <img className="loading-img default-bg-sm" src="http://img13.gomein.net.cn/image/prodimg/gicon/cat15787588.png" />
                                    <span className="name">移动电源</span>
                                    
                                </a>
                            </li>
                                
                            <li>
                                <a data-id="1" >
                                        
                                    <img className="loading-img default-bg-sm" src="http://img14.gomein.net.cn/image/prodimg/gicon/cat10000082.png" />
                                    <span className="name">存储卡/读卡器</span>
                                    
                                </a>
                            </li>
                                
                            <li>
                                <a data-id="2" >
                                        
                                    <img className="loading-img default-bg-sm" src="http://img10.gomein.net.cn/image/prodimg/gicon/cat10000078.png" />
                                    <span className="name">蓝牙耳机</span>
                                    
                                </a>
                            </li>
                                
                            <li>
                                <a data-id="3" >
                                        
                                    <img className="loading-img default-bg-sm" src="http://img11.gomein.net.cn/image/prodimg/gicon/cat10000077.png"/>
                                    <span className="name">有线耳机</span>
                                    
                                </a>
                            </li>
                                
                            <li>
                                <a data-id="4" >
                                        
                                    <img className="loading-img default-bg-sm" src="http://img12.gomein.net.cn/image/prodimg/gicon/cat10005424.png" />
                                    <span className="name">iPhone配件</span>
                                    
                                </a>
                            </li>
                                
                            <li>
                                <a data-id="5" >
                                        
                                    <img className="loading-img default-bg-sm" src="http://img13.gomein.net.cn/image/prodimg/gicon/cat10000089.png" />
                                    <span className="name">保护套</span>
                                
                                </a>
                            </li>
                                
                            <li>
                                <a data-id="6" >
                                        
                                    <img className="loading-img default-bg-sm" src="http://img14.gomein.net.cn/image/prodimg/gicon/cat10000088.png" />
                                    <span className="name">贴膜</span>
                                    
                                </a>
                            </li>
                                
                            <li>
                                <a data-id="7" >
                                        
                                    <img className="loading-img default-bg-sm" src="http://img10.gomein.net.cn/image/prodimg/gicon/cat10000079.png" />
                                    <span className="name">手机电池</span>
                                    
                                </a>
                            </li>
                                
                            <li>
                                <a data-id="8" >
                                        
                                    <img className="loading-img default-bg-sm" src="http://img11.gomein.net.cn/image/prodimg/gicon/cat21455955.png" />
                                    <span className="name">智能手环/手表</span>
                                    
                                </a>
                            </li>
                                
                            <li>
                                <a data-id="9">
                                        
                                    <img className="loading-img default-bg-sm" src="http://img12.gomein.net.cn/image/prodimg/gicon/cat15787589.png" />
                                    <span className="name">车载配件</span>
                                    
                                </a>
                            </li>
                                
                            <li>
                                <a data-id="10" >
                                        
                                    <img className="loading-img default-bg-sm" src="http://img13.gomein.net.cn/image/prodimg/gicon/cat10000086.png" />
                                    <span className="name">其他配件</span>
                                    
                                </a>
                            </li>
                                
                            <li>
                                <a data-id="11" >
                                        
                                    <img className="loading-img default-bg-sm" src="http://img14.gomein.net.cn/image/prodimg/gicon/cat10000080.png" />
                                    <span className="name">充电器</span>
                                    
                                </a>
                            </li>
                                
                        </ul>
                </div>
                    <div className="item" data-id="2">
                        <h3 className="title" alt="摄影摄像">摄影摄像</h3>
                        <ul className="lista ">
       
                            <li>
                                <a data-id="0" >
                                        
                                    <img className="loading-img default-bg-sm" src="http://img10.gomein.net.cn/image/prodimg/promimg/topics/201704/201704071412360520.png" />
                                    <span className="name">数码相机</span>
                                    
                                </a>
                            </li>
                                
                            <li>
                                 <a data-id="1" >
                                        
                                    <img className="loading-img default-bg-sm" src="http://img11.gomein.net.cn/image/prodimg/promimg/topics/201704/201704071415230198.png" />
                                    <span className="name">单反相机</span>
                                    
                                </a>
                            </li>
                                
                            <li>
                                <a data-id="2">
                                        
                                    <img className="loading-img default-bg-sm" src="http://img12.gomein.net.cn/image/prodimg/promimg/topics/201704/201704071415420234.png" />
                                    <span className="name">单电/微单相机</span>
                                    
                                </a>
                            </li>
                                
                            <li>
                                <a data-id="3">
                                        
                                    <img className="loading-img default-bg-sm" src="http://img13.gomein.net.cn/image/prodimg/promimg/topics/201704/201704071416100192.png" />
                                    <span className="name">摄像机</span>
                                    
                                </a>
                            </li>
                                
                            <li>
                                <a data-id="4" >
                                        
                                    <img className="loading-img default-bg-sm" src="http://img14.gomein.net.cn/image/prodimg/promimg/topics/201704/201704071416350639.png" />
                                    <span className="name">拍立得</span>
                                    
                                </a>
                            </li>
                                
                        </ul>
                            </div>
                            <div className="item" data-id="3">
                                <h3 className="title" alt="摄照配件">摄照配件</h3>
                                <ul className="lista ">
                                
                                <li>
                                    <a data-id="0" >
                                        
                                        <img className="loading-img default-bg-sm" src="http://img10.gomein.net.cn/image/prodimg/gicon/cat10000149.png" />
                                        <span className="name">单反镜头</span>
                                    
                                    </a>
                                </li>
                                
                                <li>
                                    <a data-id="1" >
                                        
                                        <img className="loading-img default-bg-sm" src="http://img11.gomein.net.cn/image/prodimg/gicon/cat10000150.png" />
                                        <span className="name">滤镜</span>
                                    
                                    </a>
                                </li>
                                
                                <li>
                                    <a data-id="2" >
                                        
                                        <img className="loading-img default-bg-sm" src="http://img12.gomein.net.cn/image/prodimg/gicon/cat10000151.png"/>
                                        <span className="name">贴膜/清洁用品</span>
                                    
                                    </a>
                                </li>
                                
                                <li>
                                    <a data-id="3" >
                                        
                                        <img className="loading-img default-bg-sm" src="http://img13.gomein.net.cn/image/prodimg/gicon/cat10000152.png"/>
                                        <span className="name">三脚架/云台</span>
                                    
                                    </a>
                                </li>
                                
                                <li>
                                    <a data-id="4" >
                                        
                                        <img className="loading-img default-bg-sm" src="http://img14.gomein.net.cn/image/prodimg/gicon/cat10000153.png"/>
                                        <span className="name">摄照包</span>
                                    
                                    </a>
                                </li>
                                
                                <li>
                                    <a data-id="5" >
                                        
                                        <img className="loading-img default-bg-sm" src="http://img10.gomein.net.cn/image/prodimg/gicon/cat10000154.png"/>
                                        <span className="name">单反配件</span>
                                    
                                    </a>
                                </li>
                                
                                <li>
                                    <a data-id="6">
                                        
                                        <img className="loading-img default-bg-sm" src="http://img11.gomein.net.cn/image/prodimg/gicon/cat10000155.png"/>
                                        <span className="name">存储卡</span>
                                    
                                    </a>
                                </li>
                                
                                <li>
                                    <a data-id="7" >
                                        
                                        <img className="loading-img default-bg-sm" src="http://img12.gomein.net.cn/image/prodimg/gicon/cat10000157.png"/>
                                        <span className="name">电池/充电器</span>
                                    
                                    </a>
                                </li>
                                
                                </ul>
                            </div>
                            <div className="item" data-id="4">
                                <h3 className="title" alt="智能设备">智能设备</h3>
                                <ul className="lista ">
                                
                                <li>
                                    <a data-id="0">
                                        
                                        <img className="loading-img default-bg-sm" src="http://img13.gomein.net.cn/image/prodimg/promimg/topics/201704/201704071140110567.png"/>
                                        <span className="name">智能手表</span>
                                    
                                    </a>
                                </li>
                                
                                <li>
                                    <a data-id="1" >
                                        
                                        <img className="loading-img default-bg-sm" src="http://img14.gomein.net.cn/image/prodimg/promimg/topics/201704/201704071139390561.png"/>
                                        <span className="name">智能手环</span>
                                    
                                    </a>
                                </li>
                                
                                <li>
                                    <a data-id="2" >
                                        
                                        <img className="loading-img default-bg-sm" src="http://img10.gomein.net.cn/image/prodimg/promimg/topics/201704/201704071141350115.png"/>
                                        <span className="name">VR眼镜</span>
                                    
                                    </a>
                                </li>
                                
                                <li>
                                    <a data-id="3" >
                                        
                                        <img className="loading-img default-bg-sm" src="http://img11.gomein.net.cn/image/prodimg/promimg/topics/201704/201704071149210111.png"/>
                                        <span className="name">智能家居</span>
                                    
                                    </a>
                                </li>
                                
                                <li>
                                    <a data-id="4" >
                                        
                                        <img className="loading-img default-bg-sm" src="http://img12.gomein.net.cn/image/prodimg/promimg/topics/201704/201704071150290899.png"/>
                                        <span className="name">健康监测</span>
                                    
                                    </a>
                                </li>
                                
                                <li>
                                    <a data-id="5" >
                                        
                                        <img className="loading-img default-bg-sm" src="http://img13.gomein.net.cn/image/prodimg/promimg/topics/201704/201704071151120997.png"/>
                                        <span className="name">无人机</span>
                                    
                                    </a>
                                </li>
                                
                                <li>
                                    <a data-id="6">
                                        
                                        <img className="loading-img default-bg-sm" src="http://img14.gomein.net.cn/image/prodimg/promimg/topics/201704/201704071151520801.png"/>
                                        <span className="name">智能配饰</span>
                                    
                                    </a>
                                </li>
                                
                                </ul>
                            </div>
                            <div className="item" data-id="5">
                                <h3 className="title" alt="电子教育">电子教育</h3>
                                <ul className="lista ">
                                
                                <li>
                                    <a data-id="0" >
                                        
                                        <img className="loading-img default-bg-sm" src="http://img10.gomein.net.cn/image/prodimg/promimg/topics/201704/201704071353100272.png"/>
                                        <span className="name">电子词典</span>
                                    
                                    </a>
                                </li>
                                
                                <li>
                                    <a data-id="1">
                                        
                                        <img className="loading-img default-bg-sm" src="http://img11.gomein.net.cn/image/prodimg/promimg/topics/201704/201704071354010000.png"/>
                                        <span className="name">录音笔</span>
                                    
                                    </a>
                                </li>
                                
                                <li>
                                    <a data-id="2" >
                                        
                                        <img className="loading-img default-bg-sm" src="http://img12.gomein.net.cn/image/prodimg/promimg/topics/201704/201704071354480791.png"/>
                                        <span className="name">学生平板</span>
                                    
                                    </a>
                                </li>
                                
                                <li>
                                    <a data-id="3" >
                                        
                                        <img className="loading-img default-bg-sm" src="http://img13.gomein.net.cn/image/prodimg/promimg/topics/201704/201704071359370127.png"/>
                                        <span className="name">点读机/复读机</span>
                                    
                                    </a>
                                </li>
                                
                                <li>
                                    <a data-id="4" >
                                        
                                        <img className="loading-img default-bg-sm" src="http://img14.gomein.net.cn/image/prodimg/promimg/topics/201704/201704071352170000.png"/>
                                        <span className="name">电子书</span>
                                    
                                    </a>
                                </li>
                                
                                </ul>
                            </div>
                            <div className="item" data-id="6">
                                <h3 className="title" alt="视听娱乐">视听娱乐</h3>
                                <ul className="lista ">
                                
                                <li>
                                    <a data-id="0" >
                                        
                                        <img className="loading-img default-bg-sm" src="http://img10.gomein.net.cn/image/prodimg/promimg/topics/201704/201704071406060716.png"/>
                                        <span className="name">MP3/MP4</span>
                                    
                                    </a>
                                </li>
                                
                                <li>
                                    <a data-id="1" >
                                        
                                        <img className="loading-img default-bg-sm" src="http://img11.gomein.net.cn/image/prodimg/promimg/topics/201704/201704071404520577.png"/>
                                        <span className="name">音响/音响</span>
                                    
                                    </a>
                                </li>
                                
                                <li>
                                    <a data-id="2">
                                        
                                        <img className="loading-img default-bg-sm" src="http://img12.gomein.net.cn/image/prodimg/promimg/topics/201704/201704071403590416.png"/>
                                        <span className="name">耳机/耳麦</span>
                                    
                                    </a>
                                </li>
                                
                                <li>
                                    <a data-id="3" >
                                        
                                        <img className="loading-img default-bg-sm" src="http://img13.gomein.net.cn/image/prodimg/promimg/topics/201704/201704071406560292.png"/>
                                        <span className="name">收/录音机</span>
                                    
                                    </a>
                                </li>
                                
                                </ul>
                            </div>
                        </div>
        )
    }
}
export default Sjsm;