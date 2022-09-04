# Server Side Calculator

## Description

Your project description goes here. What problem did you solve? How did you solve it?

Duration: 2 days

This calculator takes in two numbers input by the user, applies the selected operator, and calculates the result when the "=" button is clicked. On the front-end, the input numbers and operator are placed into an object and sent to the sever via POST route. There, an answer is calculated and pushed into the object, which is then pushed into an array. A status is sent back to the front-end, which triggers a GET request to the server. The server then sends back the array. The calculated answer is displayed and the list of previous calculations are displayed in a list. This calculator also clears the inputs and selected operator when the "C" button is clicked.

## Built With

HTML
Javascript
jQuery
CSS
Node.js
Express

## Acknowledgement

Thanks to Prime Digital Academy who provided me with the tools to create this application.

## Support

If you have suggestions or issues, please email me at maggie.whitlock@gmail.com