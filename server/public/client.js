$(document).ready(onReady);

function onReady(){
    $('#clearButton').on('click', clearDisplay);
    // $('.data-delete').on('click', deleteItem);
    $('.numButtons').on('click',displayNum );
    $('.action').on('click', handleOperator);
    $('#equalButton').on('click', calculateEquation);
}

// global variables
let input1 = null; 
let operator = null;
let input2 = null;
let answer = null;

// displays the selected button 
// when a number is clicked, display that number in the CURRENT display
function displayNum() {
    let num = $(this).data().id;
    $('.current').append(num);
}

// when operator is clicked
function handleOperator() {
    console.log('in handleOperator');
    // set global input1 variable to what is in the current display
    input1 = $('.current').text();
    // set global operator variable to the operator button clicked
    operator = $(this).data().id;
    // move what is in the current display to the previous display with the operator
    $('.previous').append(input1, operator);
    $('.current').text('');
}

// when equals is clicked
function calculateEquation() {
    console.log('in calculateEquation');
    // set global input 2 variable to what is in the current display
    input2 = $('.current').text();
    // move what is in the current display to the previous display
    $('.previous').append(input2);
    $('.current').text('');
    // if all variables are set, send POST to server
    console.log(`input1 is ${input1}, operator is ${operator}, input2 is ${input2}`);
    if(input1 && operator && input2) {
        console.log('all variables are set');
        // send POST to server
        $.ajax({
            method: 'POST',
            url: '/array',
            data: {input1, operator, input2},
        }).then(function(response){
            console.log('got response:', response);
            // trigger getArray function
            getArray();
        })
    }
    else{
        console.log('set inputs');
    }
        
}

function getArray(){
    console.log('in getArray');
    // GET request for the array
    $.ajax({
        method: 'GET',
        url: '/array',
    }).then(function(array) {
        console.log('got this array', array)
        // set answer variable 
        answer = array[array.length-1].result;
        console.log(answer);
        // display answer variable on current display
        $('.current').append(answer);
        // clear calHistory list
        $('.calcHistory').empty();
        // loop through array and display each equation in calcHistory list
        for(equation of array) {
            let histNum1 = equation.input1;
            let operator = equation.operator;
            let histNum2 = equation.input2;
            let histAnswer = equation.result;
            $('.calcHistory').append(`<li>${histNum1}${operator}${histNum2}=${histAnswer}</li>`);
        }
    })
}

function clearDisplay(){
    console.log('in clearDisplay');
    // clear current and previous displays
    $('.current').text('');
    $('.previous').text('');
    // clear global variables
    input1 = null;
    operator = null;
    input2 = null;
    answer = null;
}

// did not get this working yet
function deleteItem(){

}