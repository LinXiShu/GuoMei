import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './font/font_mbsvd8287jn/iconfont.css';
// import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { BrowserRouter, Route, Router, Link, hashHistory,ReactRouter } from 'react-router-dom';


import registerServiceWorker from './registerServiceWorker';

import HelloIndex from './components/HelloIndex';
import HelloList  from './components/HelloList';
import HelloCar   from './components/HelloCar';
import HelloMy    from './components/HelloMy';
import HelloKuxuan from './components/HelloKuxuan';
import HelloLogin from './components/HelloLogin';

const store = createStore((state = {
    // 状态名：状态值
    isShow: false,
	count: 0
}, action) => {
	// const count = state.count
	switch(action.type) {
        //触发动作
        // 触发传参的函数的type值，在页面函数表达式为：this.props.函数名.bind(this)
		case 'isShow':
			return Object.assign({}, state, {
				isShow: action.isShow,
            });
		default:
			return state
	}
});

ReactDOM.render(
    <BrowserRouter history={BrowserRouter.hashHistory}>

        <div>
              <Route exact path="/"     component={HelloIndex} />
              <Route       path="/list" component={HelloList} />
              <Route       path="/car"  component={HelloCar} />
              <Route       path="/my"   component={HelloMy} />
              <Route       path="/kuxuan"   component={HelloKuxuan} />
              <Route       path="/login" component={HelloLogin} />
        </div>
        
    </BrowserRouter>
        , document.getElementById('root'));
registerServiceWorker();
