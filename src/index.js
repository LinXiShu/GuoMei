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
import Myss from './pages/MY/MY';
import carss from './pages/ShoppingCart/ShoppingCart';


import Classify from './components/classfy';
import Goodslist from './components/goodslist';
import Details from './components/details';

import Youxuan from './pages/youxuan/youxuan';

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
      <Provider store={store}>
        <div>
              <Route exact path="/"     component={HelloIndex} />
              <Route       path="/list" component={HelloList} />
              <Route       path="/car"  component={carss} />
              <Route       path="/MY"   component={Myss} />
              <Route       path="/Youxuan"   component={Youxuan} />
              <Route       path="/login" component={HelloLogin} />
              <Route       path="/classify"  component={Classify} />
              <Route       path="/goodslist"  component={Goodslist} />
              <Route       path="/details"  component={Details} />
        </div>
        </Provider>
    </BrowserRouter>
        , document.getElementById('root'));
registerServiceWorker();
