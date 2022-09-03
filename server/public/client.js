$(document).ready(onReady);

function onReady(){
    $('#equalButton').on('click', calculateEquation);
    $('#clearButton').on('click', clearEquation);
}

function getArray(){
    console.log('in getarray');
    $.ajax({
        method: 'GET',
        url: '/array'
    }).then(function(array) {
        console.log('got a response');
        let currentAnswer = array[0].answer;
        $('#answer').empty();
        $('#answer').append(currentAnswer);
        $('.calcHistory').empty();
        for (let object of array){
            let histNum1 = object.num1;
            let histAction = object.action;
            let histNum2 = object.num2;
            let histAnswer = object.answer;
            $('.calcHistory').append(`<li>${histNum1} ${histAction} ${histNum2} = ${histAnswer}</li>`);  
        }
    }) 
    }

function calculateEquation() {
    let num1 = $('#inputNum1').val();
    let action = 'someAction';
    let num2 = $('#inputNum2').val();
    let answer = 'someAnswer';
    $.ajax({
        method: 'POST',
        url: '/array',
        data: {num1, action, num2, answer}
        }).then(function(response) {
            console.log('got a response. it is:', response);
            getArray();
        })
}


function clearEquation(){
    // console.log('in clearEquation');
    $('#answer').empty();
    $('input').val('');
}



// POST REQUEST:
// ✅ FE: listen for clicks on equals button
// ✅ FE: get input values
// ✅ FE: Send HTTP POST to /array AND send values we pulled from inputs
// ✅ BE: Define a POST /array route on the server
// ✅ BE: take data sent, make a new object and array.push it
// ✅ BE: send status code 201
// ✅ FE: call getArray function

// GET REQUEST:
// ✅ make equals button respond to clicks
// ✅ FE: send GET request for the data
// ✅ BE: create route on server to receive the GET request
// ✅ BE: new route will send an array of objects as its response
// FE: when the array arrives: 
    //1) ✅ for the 0 index of the array, grab the .answer value and display to the DOM
    //2) ✅ for the 1 - array.length index of array, loop through and append a list to the dom.