


import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ReactSwipe from 'react-swipe';

let swopeOptions = {
    continuous: true, speed: 400,
    auto: 2000, 
    disableScroll: false,
    showPagination: false,
    callback:function(){

        

   } 
}

class Carousel extends React.Component{
    
    componentDidMount(){
      console.log('lunbotu');
    }

    render() {
        return (
            <ReactSwipe className="lunbotu1" swipeOptions={swopeOptions} >
                  <div><img src="//gfs9.gomein.net.cn/T10mdQBsAT1RCvBVdK.jpg" width="100%" className="lbt lb1" /></div>
                  <div><img src="//gfs8.gomein.net.cn/T1DKhgBvEv1RCvBVdK.jpg" width="100%" className="lbt lb2" /></div>
                  <div><img src="//gfs5.gomein.net.cn/T1DbAjB7xT1RCvBVdK.jpg" width="100%" className="lbt lb3" /></div>
            </ReactSwipe>

        );
    }
}



export default Carousel;
