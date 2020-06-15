console.log("Hello World from your main file!");

import App from './app.js'
//const App = require ('./app.js')

    
let domContainer = document.querySelector('#index');
ReactDOM.render(<App />, domContainer);