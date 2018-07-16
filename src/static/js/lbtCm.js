


import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ReactSwipe from 'react-swipe';
import PropTypes from 'prop-types';
import $ from 'jquery';

import LazyLoad from 'react-lazy-load';

import LazyLoads from 'react-lazyload';



let swopeOptions = {
    continuous: true, speed: 400,
    auto: 2000, 
    disableScroll: false,
    showPagination: false,
    callback:function(){

   } 
}

class Carousel extends React.Component{

    state = {

      img : 0,
      imgdata : '//gfs17.gomein.net.cn/T1AYdgB7Cv1RCvBVdK_400.jpg?v=20170727',
    }
    
    componentDidMount(){


    }
    componentWillMount(){
      var thisxa = this;
      var datas;
          $.ajax({
                url: 'http://localhost:1898/jr_carss',
                type: 'GET',
                data: {

                    id : thisxa.context.router.history.location.state.id,

                }, success : function(data){
                   thisxa.state.imgdata = data[0].photo ;
                   thisxa.state.img = 1;
                   console.log(thisxa.state.imgdata);
                   console.log(data[0].photo);

                }
          })
    }

    render() {
        let bottom = '';
        let thisss = this;
          console.log(thisss);
          
          if(thisss.state.img == 0){
            bottom = <ReactSwipe className="lunbotu1" swipeOptions={swopeOptions} >
                          <div><img src={thisss.state.imgdata} width="100%"  className="lbt lb1" /></div>
                          <div><img src={thisss.state.imgdata} width="100%"  className="lbt lb2" /></div>
                          <div><img src={thisss.state.imgdata} width="100%"  className="lbt lb3" /></div>
                    </ReactSwipe>
          }else{
            bottom = <ReactSwipe className="lunbotu1" swipeOptions={swopeOptions} >
                          <div><img src={thisss.state.imgdata} width="100%"  className="lbt lb1" /></div>
                          <div><img src={thisss.state.imgdata} width="100%"  className="lbt lb2" /></div>
                          <div><img src={thisss.state.imgdata} width="100%"  className="lbt lb3" /></div>
                    </ReactSwipe>
          }


        return (
            <div className="laalalallala">
                  {bottom}
            </div>

        );
    }
}

Carousel.contextTypes = {

    router: PropTypes.object.isRequired
}

export default Carousel;
