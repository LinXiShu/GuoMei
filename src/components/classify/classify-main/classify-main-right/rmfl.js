import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './rmfl.css';
import {Router, Route, hashHistory, Link, IndexRoute, browserHistory} from 'react-router-dom';

    class Rmfl extends Component{
    render(){
        return(
            <div className="cat-list" data-index="0">
               
                <div className="item ">
                    <h3 className="title" alt="大家电">大家电</h3>
                    <ul className="lista">
                        
                        <li>
                            <Link to="/goodslist">
                                <img className="loading-img default-bg-sm" src="http://img10.gomein.net.cn/image/prodimg/gicon/cat10000049.png"  />
                                <span className="name">平板电视</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/goodslist">
                                <img className="loading-img default-bg-sm" src="http://img11.gomein.net.cn/image/prodimg/gicon/cat10000054.png"  />
                                <span className="name">冰箱</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/goodslist">
                                <img className="loading-img default-bg-sm" src="http://img12.gomein.net.cn/image/prodimg/gicon/cat10000062.png"  />
                                <span className="name">壁挂式空调</span>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="item ">
                    <h3 className="title" alt="数码通讯">数码通讯</h3>
                    <ul className="lista">
                        <li>
                            <Link to="/goodslist">
                                <img className="loading-img default-bg-sm" src="http://img12.gomein.net.cn/image/prodimg/gicon/cat10000070.png" />
                                <span className="name">手机</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/goodslist">
                                <img className="loading-img default-bg-sm" src="http://img13.gomein.net.cn/image/prodimg/gicon/cat10000092.png"/>
                                <span className="name">笔记本电脑</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/goodslist">
                                <img className="loading-img default-bg-sm" src="http://img14.gomein.net.cn/image/prodimg/gicon/cat10000145.png" />
                                    <span className="name">单反相机</span>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="item ">
                    <h3 className="title" alt="厨卫生活">厨卫生活</h3>
                    <ul className="lista">
                        <li>
                            <Link to="/goodslist">
                                <img className="loading-img default-bg-sm" src="http://img10.gomein.net.cn/image/prodimg/gicon/cat10000234.png" />
                                <span className="name">电风扇</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/goodslist">
                                <img className="loading-img default-bg-sm" src="http://img11.gomein.net.cn/image/prodimg/promotion_image/promoImg/201504/20150430/cat10000230x.png" />
                                <span className="name">空气净化器</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/goodslist">
                                <img className="loading-img default-bg-sm" src="http://img12.gomein.net.cn/image/prodimg/gicon/cat10000203.png" />
                                <span className="name">微波炉</span>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="item ">
                    <h3 className="title" alt="日用百货">日用百货</h3>
                    <ul className="lista">
                        <li>
                            <Link to="/goodslist">
                                <img className="loading-img default-bg-sm" src="http://img13.gomein.net.cn/image/prodimg/gicon/cat16035542.png" />
                                <span className="name">啤酒</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/goodslist">
                                <img className="loading-img default-bg-sm" src="http://img14.gomein.net.cn/image/prodimg/gicon/cat21755542.png" />
                                <span className="name">品牌纸尿裤</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/goodslist">
                                <img className="loading-img default-bg-sm" src="http://img10.gomein.net.cn/image/prodimg/gicon/cat10005460.png" />
                                <span className="name">床品件套</span>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="item brand">
                    <h3 className="title" alt="热门品牌">热门品牌</h3>
                    <ul className="lista">
                        <li>
                            <Link to="/goodslist">
                                <img className="loading-img default-bg-sm" src="http://img13.gomein.net.cn/image/prodimg/promotion_image/promoImg/201504/20150403/haix_1.png" />
                            </Link>
                        </li>
                        <li>
                            <Link to="/goodslist">
                                <img className="loading-img default-bg-sm" src="http://img14.gomein.net.cn/image/prodimg/promotion_image/promoImg/201504/20150403/ping_2.png"  />
                            </Link>
                        </li>
                        <li>
                            <Link to="/goodslist">
                                <img className="loading-img default-bg-sm" src="http://img10.gomein.net.cn/image/prodimg/promotion_image/promoImg/201504/20150403/laob_3.png" />
                            </Link>
                        </li>
                        <li>
                            <Link to="/goodslist">
                                <img className="loading-img default-bg-sm" src="http://img11.gomein.net.cn/image/prodimg/promotion_image/promoImg/201506/20150603/feilp_5.png" />
                            </Link>
                        </li>
                        <li>
                            <Link to="/goodslist">
                                <img className="loading-img default-bg-sm" src="http://img12.gomein.net.cn/image/prodimg/promotion_image/promoImg/201504/20150407/mide_4.png" />
                            </Link>
                        </li>
                        <li>
                            <Link to="/goodslist">
                                <img className="loading-img default-bg-sm" src="http://img13.gomein.net.cn/image/prodimg/promotion_image/promoImg/201504/20150408/naji_9.png" />
                            </Link>
                        </li>
                        <li>
                            <Link to="/goodslist">
                                <img className="loading-img default-bg-sm" src="http://img14.gomein.net.cn/image/prodimg/promotion_image/promoImg/201504/20150407/mi_8.png" />
                            </Link>
                        </li>
                        <li>
                            <Link to="/goodslist">
                                <img className="loading-img default-bg-sm" src="http://img10.gomein.net.cn/image/prodimg/promotion_image/promoImg/201504/20150407/huaw_7.png" />
                            </Link>
                        </li>
                        <li>
                            <Link to="/goodslist">
                                <img className="loading-img default-bg-sm" src="http://img11.gomein.net.cn/image/prodimg/promotion_image/promoImg/201504/20150407/nike_6.png" />
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}
export default Rmfl;
