

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from '../logo.svg';
import {BrowserRouter, Route, Router, Link} from 'react-router-dom';

import Appss from '../App';

let No0 = (props) =>{

    return <div>维生素A</div>
}

let No1 = (props) =>{

    return <div>维生素B</div>
}

class HelloList extends React.Component{

    state = {

        status : 0,
    }

    componentDidMount () {

        console.log('--我是list的生命周期--');
    }

    No0(){

        this.setState({status: 0})
        console.log(this.state.status);
    }

    No1(){
        
        this.setState({status: 1})
        console.log(this.state.status);
    }



    render(){

        let main = null;

        if(this.state.status == 0){
            
            main = <No0 />
        } else if(this.state.status == 1){

            main = <No1 />
        }

        return (
            <div className="lxs" id="LXS">

                <Link exact="true"  to="/"><span>←</span></Link>
                <br />
                This is a HelloList。


            </div>
        )
    }




}



export default HelloList;