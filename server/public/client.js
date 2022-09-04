$(document).ready(onReady);

function onReady(){
    $('#equalButton').on('click', calculateEquation);
    $('#clearButton').on('click', clearEquation);
    $('.action').on('click', selectAction);
}

let operator = null;

function selectAction(){
    $('.action').css("background-color", "#E71D36");
    operator = $(this).data().id;
    console.log('in selectAction. operator is: ', operator);
    $(this).css("background-color", "#63232b")
}

function getArray(){
    console.log('in getarray');
    $.ajax({
        method: 'GET',
        url: '/array'
    }).then(function(array) {
        console.log('got a response');
        console.log('here is the array received:', array);
        let currentAnswer = array[array.length-1].answer;
        console.log('current answer:', currentAnswer);
        $('#answer').empty();
        $('#answer').append(currentAnswer).css("color", "white");
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
    let num1 = parseFloat($('#inputNum1').val());
    console.log('num1:', num1);
    let action = operator;
    let num2 = parseFloat($('#inputNum2').val());
    console.log('num2:', num2);
    if(num1 && operator && num2) {
        $.ajax({
            method: 'POST',
            url: '/array',
            data: {num1, action, num2}
            }).then(function(response) {
                console.log('got a response. it is:', response);
                getArray();
            })
    }
}

function clearEquation(){
    // console.log('in clearEquation');
    $('#answer').empty();
    $('input').val('');
    operator = null;
    console.log(operator);
    $('.action').css("background-color", "#E71D36");
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