// Function
// - fundamental building block in the program
// - subprogram can be used multiple times
// - performs a task of calculates a value

// 1. Function declaration
// function name(param1, param2) {body... return; }
// one function === one thing
// naming: doSomething, command, verb
// function is object in JS

function log(name){
  console.log(name);
}

log('JeongWoo');

// 2. Parameters
// premitive parameters: passed by value
// object parameters: passed by reference
function changeName(obj){
  obj.name = 'coder';
}

const jeongwoo = { name: 'jeongwoo' };
changeName(jeongwoo);
console.log(jeongwoo);

// 3. Default parameters (added in ES6)
function showMessage(message, from = 'unknown') {
  console.log(`${message} by ${from}`);
}
showMessage('Hi!');

// 4. Rest parameters (added in ES6)
function printAll(...args){
  for(let i = 0; i < args.length; i++) {
    console.log(args[i]);
  }

  for(const arg of args){
    console.log(arg);
  }

  args.forEach((arg) => console.log(arg));
}
printAll('a','b','c');
console.clear();
// 5. local scope
let globalMessage = 'global';
function printMessage(){
  let message = 'hello';
  console.log(message);
  console.log(globalMessage);
}
printMessage();

// 6. Return a value
function sum(a, b){
  return a + b;
}
const result = sum(1,2);
console.log(`sum: ${sum(1, 2)}`);

// 7. Early return, early exit
function upgradeUser(user){
  if(user.point <= 10){
    return;
  }
  //upgrade logic...
}

// 1. Function expression
// a function declaration can be called earlier than it is defined. (hoisted)
// a function expression is created when the execution reaches it.
const print = function(){
  console.log('print');
}
print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(`sum: ${sumAgain(1,3)}`);

// 2. Callback function using function expression
function randomQuiz(answer, printYes, printNo){
  if(answer === 'jeongwoo'){
    printYes();
  }else{
    printNo();
  }
}

const printYes = function(){
  console.log('Yes');
}

const printNo = function print(){
  console.log('No');
}

randomQuiz('Yujeong',printYes, printNo);
randomQuiz('jeongwoo',printYes, printNo);

console.clear();
// Arrow function
// always annoymous, no block && function

const simpleTest = () => console.log('a');
const addTest = (a, b) => a + b; 
console.log(`add: ${addTest(1,2)}`);

console.clear();

//quiz

function calculate(command,a,b){
  switch(command){
    case 'add':
    console.log(a + b);
    break;

    case 'sub':
    console.log(a - b);
    break;

    case 'mut':
    console.log(a * b);
    break;

    case 'div':
    console.log(a / b);
    break;

    case 'reminder':
    console.log(a % b);
    break;
  }
}

calculate('add', 1, 2);
calculate('sub', 1, 2);
calculate('mut', 1, 2);
calculate('div', 1, 2);
calculate('reminder', 1, 2);