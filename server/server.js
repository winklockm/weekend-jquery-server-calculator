	// Importing the express node module:
	const express=require('express');
	// Using express to create an instance of an app (or server).
	const app=express();
	// Create a variable whose value is the port address.
	const PORT=5000;
	// Tell our server where the static assets live:
	app.use(express.static('server/public'));
	// Start the server:
	app.listen(PORT,()=>{
	  console.log(`server is listening for requests on port ${PORT}.`)
})