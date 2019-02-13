import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux'
import { BrowserRouter , Route } from 'react-router-dom'
import * as serviceWorker from './serviceWorker';
import reducer from './Redux/reducer';
import Home from './Login/Home';

const store = applyMiddleware(thunk)(createStore)(reducer);

ReactDOM.render( <Provider store={store}>
    <BrowserRouter>
        
        <div>
                
             <Route exact path='/' component={App}/>
             <Route path='/home' component={Home}/>


        </div>
    
    
    </BrowserRouter>
</Provider>  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
