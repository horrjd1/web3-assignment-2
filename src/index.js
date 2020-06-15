/*
console.log("Hello World from your main file!");

import App from './app.js'
//const App = require ('./app.js')

    
let domContainer = document.querySelector('#index');
ReactDOM.render(<App />, domContainer);
*/

import React from 'react';
import ReactDOM from 'react-dom';

const title = 'My Minimal React Webpack Babel Setup';

ReactDOM.render(
<div>{title}</div>,
document.getElementById('index')
);