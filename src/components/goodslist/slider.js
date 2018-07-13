import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import './slider.css';
import '../../static/fonts/hfhfont/iconfont.css';
import {Router, Route, hashHistory, Link, IndexRoute, browserHistory} from 'react-router-dom';
import $ from 'jquery';

class Slider extends Component {
    constructor(props) {
        super(props);
      
        this.state = {
            bool:true
            
        };
       
    }   
  
   
    render() {
        return(
            <div className="slider">
            <div className="module_box">
                <div className="module padd_bot0">
                    <ul className="filter_list" id="filter_list_gome">
                        <li className="item checkbox " data-checkbox="ck_cx" key="deliveryType" select="1" noselect="0"><span className="ellipsis">国美自营</span></li>
                            <li className="item checkbox " data-checkbox="ck_cx" key="stockState" select="1" noselect="0"><span className="ellipsis">仅看有货</span></li>
                            <li className="item checkbox " data-checkbox="ck_cx" key="rebate" select="1" noselect="0"><span className="ellipsis">返利</span></li>
                            <li className="item checkbox " data-checkbox="ck_cx" key="tqVal" select="010" noselect=""><span className="ellipsis">团抢商品</span></li>
                    </ul>
                </div>
                <!--地址模块-->
                <div className="module send_module flexbox v_center btn-confirm public_address_dom" data-aslider-in="addr_aslider|fade">
                    <span className="title">配送至</span>
                    <p className="flex1 ellipsis addr area_address select_address" data-v="">北京北京市朝阳区劲松街道</p>
                    <i className="arrow" data-icon="£"></i>
                </div>
                <!--价格模块-->
                <div className="module price_module flexbox v_center">
                    <span className="title">价格区间</span>
                    <div className="price_box flex1">
                        <input id="min_price" className="price_in" type="number" placeholder="最低价" onkeyup="value=value.replace(/[^\d]/g,'')">
                        <span className="line"></span>
                        <input id="max_price" className="price_in" type="number" placeholder="最高价">
                    </div>
                </div>
                <!--类目模块-->
                <div className="module classNameify_module flexbox v_center" data-aslider-in="category_aslider|fade">
                    <span className="title">所有类目</span>
                    <p className="flex1 ellipsis con">全部类目</p>
                    <i className="arrow" data-icon="£"></i>
                </div>

            </div>

                <!--品牌模块-->
                <div className="module_box">
                    <div className="module filter_module brand_module padd_bot0">
                        <div className="flexbox v_center tit brand_tit">
                            <span className="title">品牌</span>
                            <p className="flex1 ellipsis con filter_module_group" data-v=""></p>
                            <input type="hidden" id="filter_module_group" value="">
                            <i className="arrow arrow_down" data-icon="¤"></i>
                        </div>
                        <ul className="filter_list brand_list filter_list_model">                        
                            <li className="item checkbox" data-v="15L3" data-checkbox="ck_pp"><span data-id="pp_15L3">长虹(CHANGHONG)</span></li>
                            <li className="item checkbox" data-v="13ie" data-checkbox="ck_pp"><span data-id="pp_13ie">康佳(KONKA)</span></li>                   
                            <li className="item checkbox" data-v="1avC" data-checkbox="ck_pp"><span data-id="pp_1avC">三洋(SANYO)</span></li>
                            <li className="item checkbox" data-v="1dbo" data-checkbox="ck_pp" style="display: none;"><span data-id="pp_1dbo">国美(GOME)</span></li>
                            <li className="item checkbox" data-v="147G" data-checkbox="ck_pp" style="display: none;"><span data-id="pp_147G">TCL</span></li>
                            <li className="item checkbox" data-v="10PQ" data-checkbox="ck_pp" style="display: none;"><span data-id="pp_10PQ">索尼(SONY)</span></li>
                            <li className="item checkbox" data-v="11I7" data-checkbox="ck_pp" style="display: none;"><span data-id="pp_11I7">小米(MI)</span></li>
                            <li className="item checkbox" data-v="11st" data-checkbox="ck_pp" style="display: none;"><span data-id="pp_11st">三星(SAMSUNG)</span></li>
                            <li className="item checkbox" data-v="2hgB" data-checkbox="ck_pp" style="display: none;"><span data-id="pp_2hgB">爱芒果</span></li>
                            <li className="item checkbox" data-v="2gpc" data-checkbox="ck_pp" style="display: none;"><span data-id="pp_2gpc">CNC</span></li>
                            <li className="item checkbox" data-v="19Ic" data-checkbox="ck_pp" style="display: none;"><span data-id="pp_19Ic">酷开(Coocaa)</span></li>
                            <li className="item checkbox" data-v="1deW" data-checkbox="ck_pp" style="display: none;"><span data-id="pp_1deW">CAN</span></li>
                            <li className="item checkbox" data-v="14Lb" data-checkbox="ck_pp" style="display: none;"><span data-id="pp_14Lb">飞利浦(Philips)</span></li>
                            <li className="item checkbox" data-v="11FZ" data-checkbox="ck_pp" style="display: none;"><span data-id="pp_11FZ">乐视</span></li>
                            <li className="item checkbox" data-v="2f0d" data-checkbox="ck_pp" style="display: none;"><span data-id="pp_2f0d">风行电视(Fun TV)</span></li>
                            <li className="item checkbox" data-v="1cw0" data-checkbox="ck_pp" style="display: none;"><span data-id="pp_1cw0">小帅</span></li>
                            <li className="item checkbox" data-v="10Rh" data-checkbox="ck_pp" style="display: none;"><span data-id="pp_10Rh">东芝(TOSHIBA)</span></li>
                            <li className="item checkbox" data-v="2f1g" data-checkbox="ck_pp" style="display: none;"><span data-id="pp_2f1g">暴风TV</span></li>
                            <li className="item checkbox" data-v="14jF" data-checkbox="ck_pp" style="display: none;"><span data-id="pp_14jF">统帅</span></li>
                        </ul>
                        <div className="brand_more_list" style="display: none;">
                            <div className="brand_order_module flexbox">
                                <span className="order_mark">A</span>
                                <ul className="filter_list flex1">
                                    <li className="item checkbox" data-v="2hgB" data-checkbox="ck_pp">
                                            <span data-id="pp_2hgB">爱芒果</span>
                                    </li>
                                </ul>
                            </div>
                        </div>  
                        <div className="brand_more_list" style="display: none;">
                            <div className="brand_order_module flexbox">
                                <span className="order_mark">B</span>
                                <ul className="filter_list flex1">
                                    <li className="item checkbox" data-v="2f1g" data-checkbox="ck_pp">
                                        <span data-id="pp_2f1g">暴风TV</span>
                                    </li>
                                </ul>
                            </div>
                        </div>  
                        <div className="brand_more_list" style="display: none;">
                            <div className="brand_order_module flexbox">
                                <span className="order_mark">C</span>
                                    <ul className="filter_list flex1">
                                        <li className="item checkbox" data-v="15ys" data-checkbox="ck_pp">
                                            <span data-id="pp_15ys">创维(Skyworth)</span>
                                        </li>
                                        <li className="item checkbox" data-v="2gpc" data-checkbox="ck_pp">
                                            <span data-id="pp_2gpc">CNC</span>
                                        </li>
                                        <li className="item checkbox" data-v="1deW" data-checkbox="ck_pp">
                                            <span data-id="pp_1deW">CAN</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>  
                            <div className="brand_more_list" style="display: none;">
                                <div className="brand_order_module flexbox">
                                    <span className="order_mark">D</span>
                                    <ul className="filter_list flex1">
                                        <li className="item checkbox" data-v="10Rh" data-checkbox="ck_pp">
                                            <span data-id="pp_10Rh">东芝(TOSHIBA)</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>  
                            <div className="brand_more_list" style="display: none;">
                                <div className="brand_order_module flexbox">
                                    <span className="order_mark">F</span>
                                    <ul className="filter_list flex1">
                                        <li className="item checkbox" data-v="14Lb" data-checkbox="ck_pp">
                                            <span data-id="pp_14Lb">飞利浦(Philips)</span>
                                        </li>
                                        <li className="item checkbox" data-v="2f0d" data-checkbox="ck_pp">
                                            <span data-id="pp_2f0d">风行电视(Fun TV)</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>  
                            <div className="brand_more_list" style="display: none;">
                                <div className="brand_order_module flexbox">
                                    <span className="order_mark">G</span>
                                    <ul className="filter_list flex1">
                                        <li className="item checkbox" data-v="1dbo" data-checkbox="ck_pp">
                                            <span data-id="pp_1dbo">国美(GOME)</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>  
                            <div className="brand_more_list" style="display: none;">
                                <div className="brand_order_module flexbox">
                                    <span className="order_mark">H</span>
                                    <ul className="filter_list flex1">
                                        <li className="item checkbox" data-v="14WN" data-checkbox="ck_pp">
                                            <span data-id="pp_14WN">海信(Hisense)</span>
                                        </li>
                                        <li className="item checkbox" data-v="134D" data-checkbox="ck_pp">
                                            <span data-id="pp_134D">海尔(Haier)</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>  
                            <div className="brand_more_list" style="display: none;">
                                <div className="brand_order_module flexbox">
                                    <span className="order_mark">K</span>
                                    <ul className="filter_list flex1">
                                        <li className="item checkbox" data-v="13ie" data-checkbox="ck_pp">
                                            <span data-id="pp_13ie">康佳(KONKA)</span>
                                        </li>
                                        <li className="item checkbox" data-v="2iNz" data-checkbox="ck_pp">
                                            <span data-id="pp_2iNz">KKTV</span>
                                        </li>
                                        <li className="item checkbox" data-v="19Ic" data-checkbox="ck_pp">
                                            <span data-id="pp_19Ic">酷开(Coocaa)</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>  
                            <div className="brand_more_list" style="display: none;">
                                <div className="brand_order_module flexbox">
                                    <span className="order_mark">L</span>
                                    <ul className="filter_list flex1">
                                        <li className="item checkbox" data-v="1avD" data-checkbox="ck_pp">
                                            <span data-id="pp_1avD">LG</span>
                                        </li>
                                        <li className="item checkbox" data-v="11FZ" data-checkbox="ck_pp">
                                            <span data-id="pp_11FZ">乐视</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>  
                            <div className="brand_more_list" style="display: none;">
                                <div className="brand_order_module flexbox">
                                    <span className="order_mark">S</span>
                                    <ul className="filter_list flex1">
                                        <li className="item checkbox" data-v="1avC" data-checkbox="ck_pp">
                                            <span data-id="pp_1avC">三洋(SANYO)</span>
                                        </li>
                                        <li className="item checkbox" data-v="10PQ" data-checkbox="ck_pp">
                                            <span data-id="pp_10PQ">索尼(SONY)</span>
                                        </li>
                                        <li className="item checkbox" data-v="11st" data-checkbox="ck_pp">
                                            <span data-id="pp_11st">三星(SAMSUNG)</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>  
                            <div className="brand_more_list" style="display: none;">
                                <div className="brand_order_module flexbox">
                                    <span className="order_mark">T</span>
                                    <ul className="filter_list flex1">
                                        <li className="item checkbox" data-v="147G" data-checkbox="ck_pp">
                                            <span data-id="pp_147G">TCL</span>
                                        </li>
                                            <span data-id="pp_14jF">统帅</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>  
                            <div className="brand_more_list" style="display: none;">
                                <div className="brand_order_module flexbox">
                                    <span className="order_mark">X</span>
                                    <ul className="filter_list flex1">
                                        <li className="item checkbox" data-v="14VF" data-checkbox="ck_pp">
                                            <span data-id="pp_14VF">夏普(SHARP)</span>
                                        </li>
                                        <li className="item checkbox" data-v="11I7" data-checkbox="ck_pp">
                                            <span data-id="pp_11I7">小米(MI)</span>
                                        </li>
                                        <li className="item checkbox" data-v="1cw0" data-checkbox="ck_pp">
                                            <span data-id="pp_1cw0">小帅</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>  
                            <div className="brand_more_list" style="display: none;">
                                <div className="brand_order_module flexbox">
                                    <span className="order_mark">Z</span>
                                    <ul className="filter_list flex1">
                                        <li className="item checkbox" data-v="15L3" data-checkbox="ck_pp">
                                            <span data-id="pp_15L3">长虹(CHANGHONG)</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>  
                            <button className="fold_btn" style="display: none;">全部品牌</button>
                    </div>
                </div>
                <!--品牌模块-->
                <!--非品牌模块-->
                <div className="module_box">
                    <div className="module filter_module padd_bot0">
                        <div className="flexbox v_center tit other_tit">
                            <span className="title">品牌类型</span>
                            <p className="flex1 ellipsis con"></p>
                            <i className="arrow arrow_down" data-icon="¤" style="display: none;"></i>
                        </div>
                        <ul className="filter_list filter_list_model">
                            <li className="item checkbox " data-v="2hcP" data-checkbox="ck_other1">
                                <span data-id="pp_2hcP">国产品牌</span>
                            </li>
                            <li className="item checkbox " data-v="2hcQ" data-checkbox="ck_other1">
                                <span data-id="pp_2hcQ">合资品牌</span>
                            </li>
                            <li className="item checkbox " data-v="2hcR" data-checkbox="ck_other1">
                                <span data-id="pp_2hcR">互联网品牌</span>
                            </li>
                        </ul>
                     </div>
                </div>
                <!--品牌模块-->
                <!--非品牌模块-->
                <div className="module_box">
                    <div className="module filter_module padd_bot0">
                        <div className="flexbox v_center tit other_tit">
                            <span className="title">屏幕尺寸</span>
                            <p className="flex1 ellipsis con"></p>
                            <i className="arrow arrow_down" data-icon="¤"></i>
                        </div>
                        <ul className="filter_list filter_list_model">
                            <li className="item checkbox " data-v="2hcT" data-checkbox="ck_other1">
                                <span data-id="pp_2hcT">70英寸及以上</span>
                            </li>
                            <li className="item checkbox " data-v="1egx" data-checkbox="ck_other1">
                                <span data-id="pp_1egx">65英寸</span>
                            </li>
                            <li className="item checkbox " data-v="2iay" data-checkbox="ck_other1">
                                <span data-id="pp_2iay">58-60英寸</span>
                            </li>
                            <li className="item checkbox " data-v="1egl" data-checkbox="ck_other1" style="display: none;">
                                <span data-id="pp_1egl">55英寸</span>
                            </li>
                            <li className="item checkbox " data-v="2iaz" data-checkbox="ck_other1" style="display: none;">
                                <span data-id="pp_2iaz">49-50英寸</span>
                            </li>
                            <li className="item checkbox " data-v="2iaA" data-checkbox="ck_other1" style="display: none;">
                                <span data-id="pp_2iaA">45-48英寸</span>
                            </li>
                            <li className="item checkbox " data-v="2drg" data-checkbox="ck_other1" style="display: none;">
                                <span data-id="pp_2drg">42-43英寸</span>
                            </li>
                            <li className="item checkbox " data-v="2iaB" data-checkbox="ck_other1" style="display: none;">
                                <span data-id="pp_2iaB">39-40英寸</span>
                            </li>
                            <li className="item checkbox " data-v="2hcU" data-checkbox="ck_other1" style="display: none;">
                                <span data-id="pp_2hcU">32英寸及以下</span>
                            </li>
                        </ul>
                     </div>
                </div>
                <!--品牌模块-->
                <!--非品牌模块-->
                <div className="module_box">
                    <div className="module filter_module padd_bot0">
                        <div className="flexbox v_center tit other_tit">
                            <span className="title">产品类型</span>
                            <p className="flex1 ellipsis con"></p>
                            <i className="arrow arrow_down" data-icon="¤"></i>
                        </div>
                        <ul className="filter_list filter_list_model">
                            <li className="item checkbox " data-v="1dsh" data-checkbox="ck_other1">
                                <span data-id="pp_1dsh">4K超清电视</span>
                            </li>
                            <li className="item checkbox " data-v="1dsf" data-checkbox="ck_other1">
                                <span data-id="pp_1dsf">智能电视</span>
                            </li>
                            <li className="item checkbox " data-v="1dsg" data-checkbox="ck_other1">
                                <span data-id="pp_1dsg">曲面电视</span>
                            </li>
                            <li className="item checkbox " data-v="2hcV" data-checkbox="ck_other1" style="display: none;">
                                <span data-id="pp_2hcV">HDR电视</span>
                            </li>
                            <li className="item checkbox " data-v="1dsi" data-checkbox="ck_other1" style="display: none;">
                                <span data-id="pp_1dsi">OLED电视</span>
                            </li>
                            <li className="item checkbox " data-v="2hcW" data-checkbox="ck_other1" style="display: none;">
                                <span data-id="pp_2hcW">VR电视</span>
                            </li>
                            <li className="item checkbox " data-v="18wD" data-checkbox="ck_other1" style="display: none;">
                                <span data-id="pp_18wD">3D电视</span>
                            </li>
                            <li className="item checkbox " data-v="2hcX" data-checkbox="ck_other1" style="display: none;">
                                <span data-id="pp_2hcX">超薄电视（小于20mm）</span>
                            </li>
                            <li className="item checkbox " data-v="1drJ" data-checkbox="ck_other1" style="display: none;">
                                <span data-id="pp_1drJ">激光电视</span>
                            </li>
                            <li className="item checkbox " data-v="2hcY" data-checkbox="ck_other1" style="display: none;">
                                <span data-id="pp_2hcY">触控电视</span>
                            </li>
                            <li className="item checkbox " data-v="1dsd" data-checkbox="ck_other1" style="display: none;">
                                <span data-id="pp_1dsd">普通电视</span>
                            </li>
                        </ul>
                     </div>
                </div>
                <!--品牌模块-->
                <!--非品牌模块-->
                <div className="module_box">
                    <div className="module filter_module padd_bot0">
                        <div className="flexbox v_center tit other_tit">
                            <span className="title">建议观看距离(米)</span>
                            <p className="flex1 ellipsis con"></p>
                            <i className="arrow arrow_down" data-icon="¤"></i>
                        </div>
                        <ul className="filter_list filter_list_model">
                            <li className="item checkbox " data-v="1dTk" data-checkbox="ck_other1">
                                <span data-id="pp_1dTk">2米及以下</span>
                            </li>
                            <li className="item checkbox " data-v="1dTl" data-checkbox="ck_other1">
                                <span data-id="pp_1dTl">2.0-2.5米</span>
                            </li>
                            <li className="item checkbox " data-v="1dTm" data-checkbox="ck_other1">
                                <span data-id="pp_1dTm">2.5-3米</span>
                            </li>
                            <li className="item checkbox " data-v="1dTn" data-checkbox="ck_other1" style="display: none;">
                                <span data-id="pp_1dTn">3.0-3.5米</span>
                            </li>
                            <li className="item checkbox " data-v="1dTo" data-checkbox="ck_other1" style="display: none;">
                                <span data-id="pp_1dTo">3.5米以上</span>
                            </li>
                            <li className="item checkbox " data-v="2hcZ" data-checkbox="ck_other1" style="display: none;">
                                <span data-id="pp_2hcZ">3.5-4.0米</span>
                            </li>
                            <li className="item checkbox " data-v="2hd0" data-checkbox="ck_other1" style="display: none;">
                                <span data-id="pp_2hd0">4.0-4.5米</span>
                            </li>
                            <li className="item checkbox " data-v="2hd1" data-checkbox="ck_other1" style="display: none;">
                                <span data-id="pp_2hd1">4.5米以上</span>
                            </li>
                        </ul>
                     </div>
                </div>
                <!--品牌模块-->
                <!--非品牌模块-->
                <div className="module_box">
                    <div className="module filter_module padd_bot0">
                        <div className="flexbox v_center tit other_tit">
                            <span className="title">屏幕分辨率</span>
                            <p className="flex1 ellipsis con"></p>
                            <i className="arrow arrow_down" data-icon="¤"></i>
                        </div>
                        <ul className="filter_list filter_list_model">
                            <li className="item checkbox " data-v="1ehf" data-checkbox="ck_other1">
                                <span data-id="pp_1ehf">超高清4K（3840*2160）</span>
                            </li>
                            <li className="item checkbox " data-v="1ehg" data-checkbox="ck_other1">
                                <span data-id="pp_1ehg">全高清（1920*1080）</span>
                            </li>
                            <li className="item checkbox " data-v="1ehh" data-checkbox="ck_other1">
                                <span data-id="pp_1ehh">高清（1366*768）</span>
                            </li>
                            <li className="item checkbox " data-v="2drU" data-checkbox="ck_other1" style="display: none;">
                                <span data-id="pp_2drU">其他</span>
                            </li>
                        </ul>
                     </div>
                </div>
            </div>
            

        );
    }
}
export default Slider;