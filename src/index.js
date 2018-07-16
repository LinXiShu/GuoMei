import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './static/css/base.css';
import registerServiceWorker from './registerServiceWorker';

import ShoppingCart from './pages/ShoppingCart/ShoppingCart';
import MY from './pages/MY/MY';


const store = createStore((state = {
    // 状态名：状态值
    istoggle: '',
	count: 0
}, action) => {
	// const count = state.count
	switch(action.type) {
        //触发动作
        // 触发传参的函数的type值，在页面函数表达式为：this.props.函数名.bind(this)
		case 'istoggle':
			return Object.assign({}, state, {
				istoggle: action.istoggle,
            });
        case 'ishide':
        return Object.assign({}, state, {
            istoggle: action.istoggle,
        });
        case 'total':
        return Object.assign({},state,{
            total:action.fdfh,
        });
		default:
			return state;
	}
});

ReactDOM.render(
    <Router>
        <Provider store={store}>
            <div>
                {/* <Xhome /> */}
                <Route path="/ShoppingCart" component={ShoppingCart}/>
                <Route path="/MY" component={MY}/>
            </div>
        </Provider>
    </Router>, 
document.getElementById('root'));
registerServiceWorker();
