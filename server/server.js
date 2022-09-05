// Importing the express node module:
const express = require('express');
// Using express to create an instance of an app (or server).
const app = express();
// Importing the body-parser node module:
const bodyParser = require('body-parser');
// Create a variable whose value is the port address.
const PORT = 5000;
// Tell our server where the static assets live:
app.use(express.static('server/public'));
// Teach our server how to read JSON:
app.use(bodyParser.urlencoded({extended: true}));
	
let array = [];

app.post('/array', (req, res) => {
	// set variables
	let newObject = req.body;
	let num1 = parseFloat(newObject.input1);
	let action = newObject.operator;
	let num2 = parseFloat(newObject.input2);
	// calculate answer and set result variable
	let result;
	if(action === '+') {
		result = num1+num2;
	}
	else if(action === '-') {
		result = num1-num2;
	}
	else if(action === '*') {
		result = num1*num2;
	}
	else if(action === '/') {
		result = num1/num2;
	};
	// add result to the new object
	newObject.result = result;
	// push newObject into the global array
	array.push(newObject);
	console.log('array is now', array);
	// send status back
	res.sendStatus(201);
})

app.get('/array', (req, res) => {
	console.log('/array got a request');
	res.send(array);
})
	
// Start the server:
app.listen(PORT,()=>{
	console.log(`server is listening for requests on port ${PORT}.`);
})

