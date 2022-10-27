
//business logic
function add(number1, number2) {
  return number1 + number2;
}

function multiply(number1, number2) {
  return number1 * number2;
}

function divide(number1, number2) {
  return number1 / number2;
}

function subtract(number1, number2) {
  return number1 - number2;
}

const number1 = parseInt(prompt('Enter a number:'));
const number2 = parseInt(prompt('Enter another number:'));

window.alert(number1.toString() + "+" + number2.toString() + "=" + add(number1, number2) + "." +  
" The difference of your numbers is " + subtract(number1, number2) + "." +
" The product of your numbers is " + multiply(number1, number2) + "." + 
" The quotient of your numbers is " + divide(number1, number2) + ".");