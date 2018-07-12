
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from '../logo.svg';
import {BrowserRouter, Route, Router, Link} from 'react-router-dom';
import '../css/car.css' 

class HelloCar extends React.Component{
    // Hexo
  componentDidMount(){
        console.log(this)
        console.log(this.props.history);
    }
    render(){
        return (
            <div className="car" id="LXS">

                <div className="list_top">
                    <Link exact="true"  to="/" className="list_zuo">
                        <span><i className="iconfont icon-back"></i></span>
                    </Link>
                    
                        <span className="list_cont list_car" >
                                购物车
                        </span>

                    <span className="list_right">
                        <i className="iconfont icon-agriculture"></i>
                    </span>
                </div>

                <div className="car_main">

                </div>


                <div className="car_shengcheng">

                </div>

            </div>

        )

    }
}




export default HelloCar;