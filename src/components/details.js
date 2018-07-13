import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Details_top from "../components/details/details_top"
import Banner from "../components/details/banner"


class Details extends Component {

    render(){
        return(
            <div className="detalis" >
                <Details_top />
                <Banner />
            </div>
        );


    }
}


export default  Details;
