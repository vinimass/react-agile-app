import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Empenho from './container/Empenho';
import Salarios from './container/Salarios';
import Licitacao from './container/Licitacao';
import Home from './container/Home';
import * as serviceWorker from './serviceWorker';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path='/' component={App}>
            <IndexRoute component={Home}/>
            <Route path='/licitacoes' component={Licitacao} />
            <Route path='/empenhos' component={Empenho} />
            <Route path='/salarios' component={Salarios} />
        </Route>
    </Router>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
