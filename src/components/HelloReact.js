

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from '../logo.svg';


class HelloReact extends React.Component{
    
    No2(){

      this.props.No3()
    }

    render(){
        return (
            <div className="lxs" id="LXS">
            
            <div onClick={this.props.No3}>app</div>
            
            </div>
        )

    }
}


export default HelloReact;
