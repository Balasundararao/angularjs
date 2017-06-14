// CommonJS Way 
/** 
var messages = require('./messages');
var newMessage = () => ( `<p>${messages.hi} ${messages.event}</p>` );
let $ = require('jquery');
$(function () {
	$(document.body).append(newMessage);
});
*/
// es6 way of doing... 
require('./style/index.css');
var messages = require('./messages');
import Button from './button';
import kitten from './kitten';
import ele from './elephant';
import {multiply} from './mathStuff';

var app = document.getElementById('app');

// Mode1
/** 
app.innerHTML = `
	<div id="menu">
		<button id="loadPage1">Load Page 1</button>
		<button id="loadPage2">Load Page 2</button>
	</div>
	<div id="content">
		<p>
			<h1>Home</h1>
			${messages.hi} ${messages.event}<br>
			${ele}
			${kitten}<br>
		</p>
	</div>
`;
*/


// Mode 2 
/** 
var newMessage = () => (Button.button);
app.innerHTML = newMessage();
Button.attachEl();
*/

// Mode3
/// const newMessage = () => (multiply(3,3));
const newMessage = () => (`
	DEV: ${DEVELOPMENT.toString()}<br/>
	PROD: ${PRODUCTION.toString()}<br/>
`);

app.innerHTML = newMessage();


console.log('Index.js also loaded');

if (DEVELOPMENT) {
	if (module.hot) {
		module.hot.accept();
	}
}