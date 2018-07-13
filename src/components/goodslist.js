import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import List_top from '../components/goodslist/list-top';
import List from '../components/goodslist/list';
import {BrowserRouter, Route, Router, Link} from 'react-router-dom';
class Goodslist extends Component{

    render(){

        return(
            <div className="goodslist">
 
                <List_top />
                <List />


            </div>
            

        )
    }
}

export default Goodslist;