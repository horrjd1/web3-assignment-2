console.log("Hello World from your main file!");
import App from './app.js'; //const App = require ('./app.js')

var domContainer = document.querySelector('#index');
ReactDOM.render( /*#__PURE__*/React.createElement(App, null), domContainer);