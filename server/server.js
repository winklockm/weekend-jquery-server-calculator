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
	
let array = [
	// {
	// 	num1: 2,
	// 	action: '+',
	// 	num2: 4,
	// 	answer: 6,
	// },
	// {
	// 	num1: 5,
	// 	action: '-',
	// 	num2: 3,
	// 	answer: 2,
	// },
	// {
	// 	num1: 7,
	// 	action: '*',
	// 	num2: 8,
	// 	answer: 56,
	// },
	// {
	// 	num1: 12,
	// 	action: '/',
	// 	num2: 3,
	// 	answer: 4,
	// }
];
	
	
app.get('/array', (req, res) => {
	console.log('/array got a request');
	res.send(array);
})
	
	
app.post('/array', (req, res) => {
	console.log('/array received a post');
	let newObject = req.body;
	array.push(newObject);
	res.sendStatus(201);
})

	
// Start the server:
app.listen(PORT,()=>{
	console.log(`server is listening for requests on port ${PORT}.`);
})

