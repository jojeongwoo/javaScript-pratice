// 1. String 
console.log('my' + 'cat');
console.log('1' + 2);
console.log(`string literals: 1 + 2 = ${1 + 2}`);

//2. Numeric operators
console.log(1 + 1); // add
console.log(1 - 1); // substract
console.log(1 / 1); // divide
console.log(1 % 1); // remainder
console.log(1 * 1); // multiply
console.log(1 ** 2); // exponentiation

console.clear();

//3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter; 
// counter = counter + 1;
// preIncrement = counter;
console.log(`preIncrement: ${preIncrement}, type: ${typeof preIncrement}`);

const postIncrement = counter++;
//postIncrement = counter;
//counter = counter + 1;
console.log(`postIncrement: ${postIncrement}, type: ${typeof postIncrement}`);

// 4. Assignment operators
let x = 3;
let y = 6;
x += y; // x = x + y;
x -= y;
x *= y;
x /= y;

// 5. Comparison operators
console.log(10 < 6);
console.log(10 <= 6);
console.log(10 > 6);
console.log(10 >= 6);

console.clear();

// 6. Logical operator: || (or), && (and), ! (not)
const value1 = false;
const value2 = 4 > 2;

// || (or), fides the first truthy value
console.log(`or:${value1 || value2 || check()}`); // function place at last

// && (and), fides the first truthy value
console.log(`and:${value1 && value2 && check()}`);

// often used to compress long if-statement
// nullableObject && nullableObject.something
const nullableObject = true;

if (nullableObject != null) {
  console.log(nullableObject.something);
}

function check(){
  for (let i = 0; i < 5; i++){
    console.log('1');
  }
  return false;
}

// ! (not) 
console.log(!value1);

console.clear();
// 7. Equality
const stringFive = '5';
const numberFive = 5;

// == loose equality, with type conversion
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

// === strict equality, no type conversion
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

//object equality by reference
const jw1 = {name: 'jw'};
const jw2 = {name: 'jw'};
const jw3 = jw1;
console.log(jw1 == jw2);
console.log(jw1 === jw2);
console.log(jw1 === jw3);

// 8. Conditional operate: if
// if, else if, else
const name = 'YuJeong';
if(name === 'JeongWoo'){
  console.log('Welcome JeongWoo');
}else if(name === 'YuJeong'){
  console.log('pretty girl');
}else{
  console.log('unknown');
}

// 9. Ternary operator: ?
// condition ? value1 : value2;
console.log(name === 'JeongWoo' ? 'yes' : 'no');
console.clear();
// 10. Switch statement

const browser = 'IE';
switch(browser) {
  case 'IE':
    console.log('go away!');
    break;
  case 'Chrome':
  case 'Firefox':
    console.log('good!');
    break
  default:
    console.log('same all');
    break; 
}

// 11. Loops
// while loop, while the condition is truthy,
// body code is executed.

let i = 3;
while(i > 0){
  console.log(`while: ${i}`);
  i--;
}

// do while loop, code is executed first,
// then check the condition.

do{
  console.log(`do while: ${i}`);
  i--;
} while(i > 0);

console.clear();

// for loop, for(begin; condition; step)
for(i = 3; i > 0; i--){
  console.log(`for:${i}`);
}

for(let i = 3; i > 0; i = i - 2){
  console.log(`inline variable for: ${i}`);
}

for(let i = 0; i < 10; i++){
  for(let j = 0; j <10; j++){
    console.log(`i:${i}, j:${j}`);
  }
}

console.clear();

for(let i = 0; i <= 10; i++){
  if(i % 2 !== 0){
    continue;
  }
  console.log(`q1. ${i}`);
}

for(let i = 0; i <= 10; i++){
  if(i > 8){
    break;
  }
  console.log(`q2. ${i}`);
}






