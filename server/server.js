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
	
app.get('/array', (req, res) => {
	console.log('/array got a request');
	res.send(array);
})
	
app.post('/array', (req, res) => {
	let newObject = req.body;
	let num1 = parseFloat(newObject.num1);
	let action = newObject.action;
	let num2 = parseFloat(newObject.num2);
	let answer;
    if(action === '+') {
        answer = num1+num2;
	}
    else if(action === '-') {
    	answer = num1-num2;
    }
    else if(action === '*') {
    	answer = num1*num2;
    }
    else if(action === '/') {
        answer = num1/num2;
        };
	newObject.answer = answer;
	array.push(newObject);
	console.log('array is now: ', array);
	res.sendStatus(201);
})
	
// Start the server:
app.listen(PORT,()=>{
	console.log(`server is listening for requests on port ${PORT}.`);
})

