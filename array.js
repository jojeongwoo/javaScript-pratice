'use strict';

//Array

//1. Declaration
const arr1 = new Array();
const arr2 = [1,2];

//2. Index position
const fruits = ['apple', 'banana'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]); //undefined
console.log(fruits[fruits.length - 1]); // Last Index

console.clear();
//3. Looping over an array
//print all fruits

//a. for
for(let i = 0; i < fruits.length; i++){
  console.log(fruits[i]);
}

//b. for of
for(let fruit of fruits){
  console.log(fruit);
  console.log(typeof fruit);
}

//c. forEach
fruits.forEach((fruit) => console.log(fruit));

//4. Addition, deletion, copy
//push: add an item to the end
fruits.push('mango', 'melon');
console.log(fruits);

//pop: remove an item for the end
fruits.pop();
console.log(fruits);

//unshift: add an item to the benigging
fruits.unshift('strawberry');
console.log(fruits);

//unshift: remove an item to the benigging
fruits.shift();
console.log(fruits);

//note!! shift, unshift are slower than pop, push
//splice: remove an item by index position
fruits.push('lemon', 'peach');
console.log(fruits);
fruits.splice(1,1); // first num: start, second num: num
console.log(fruits);
fruits.splice(1,2,'watermelon', 'grape');
console.log(fruits);

//combine two arrays
const fruits2 = ['blueberry'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

//5. Searching
//find the index
console.clear();
console.log(fruits);
console.log(fruits.indexOf('apple'));
console.log(fruits.indexOf('banana'));

//includes, boolean
console.log(fruits.includes('watermelon'));
console.log(fruits.includes('coconut'));

//lastIndexOf
console.clear();
fruits.push('apple');
console.log(fruits);
console.log(fruits.indexOf('apple'));
console.log(fruits.lastIndexOf('apple'));