
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import {BrowserRouter, Route, Router, Link} from 'react-router-dom';
import $ from 'jquery';
import '../../css/index.css';




class IndexXiaLa extends React.Component{

    state = {

        datax : 0
    }

    componentDidMount(){
       var html2 = '';
        $.ajax({
            url: 'http://localhost:1898/products',
            dataType: 'json',
            data: {
                classa : 2,
            },
            success: function(res){

                $.each(res, function(index, val){
                      html2 += Html1(val);
                });
                console.log('加载');
                $('.basdasdox').html(html2); 
            }
        });

        function Html1(val){
            return `
            <div class="xiala" id="${val.id}" style="width: 50%; font-size: 0.33rem; float: left; background: #fff;margin-bottom: 0.5rem;">
                <img src="${val.photo}" style="width: 100%"/>
                <div style="height: 0.9rem; overflow: hidden;">${val.name}</div>
                <span style="font-size: 0.42rem; color: red;">￥${val.price}</span><br />
                </div>
            `
        }

    }

    render(){

        return (
            <div className="basdasdox">

            </div>
        )
    }

}

export default IndexXiaLa