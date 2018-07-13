import React, { Component } from 'react';
//import logo from './logo.svg';
import Classify_top from '../components/classify/classify-top/classify-top';
import Classify_main_left from '../components/classify/classify-main/classify-main-left/classify-main-left';
import Rmfl from '../components/classify/classify-main/classify-main-right/rmfl';
import Sjsm from '../components/classify/classify-main/classify-main-right/sjsm';
import Dnbg from '../components/classify/classify-main/classify-main-right/dnbg';
import {Router, Route, hashHistory, Link, IndexRoute, browserHistory} from 'react-router-dom';



class Classify extends Component {

  state = {

    status : 0,

  }
  No0(){
    this.setState({status:0}); 
  
  }

  No1(){
    this.setState({status:1})
   
  }

  No2() {
    this.setState({status:2})
  }




  render() {

    let main  = null;

    if(this.state.status == 0){
        main = <Rmfl />
    } else if(this.state.status == 1){
        main = <Sjsm />
    } else if(this.state.status == 2){
        main =<Dnbg />
    }

    return (
    <div> 
      <Classify_top />
      <Classify_main_left  
          No0={this.No0.bind(this)} 
          No1={this.No1.bind(this)}
          No2={this.No2.bind(this)} />

      <div className="main">
        {main}
      </div>


    </div>

    )
  }
}


export default Classify;
