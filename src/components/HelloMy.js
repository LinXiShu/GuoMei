

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from '../logo.svg';
import {BrowserRouter, Route, Router, Link} from 'react-router-dom';
import '../css/my.css';

import Login from './HelloLogin';
import Mys from './my/Mys'


class HelloMy extends React.Component{

    state = {

        loginsss : <Mys />
    }

    render(){

        return (
            <div>
                {this.state.loginsss}
            </div>
        )
    }
}

export default HelloMy;