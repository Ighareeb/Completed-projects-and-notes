const userInput = document.getElementById('userInput');
let expression = '';

function press(num){
    expression += num; //eg. press 6 which become value of the variable. then press + so it becomes '6 +" etc.    userInput.value = expression; //what is shown in the calculator display window
}

function equal(){
    userInput.value = eval(expression); //when you press equal the function evaluates your expression variable
    expression = '';
}

function erase(){
    expression = '';    //when you press C then expression value is cleared
    userInput.value = expression;
}