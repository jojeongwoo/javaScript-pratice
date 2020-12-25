// Object
// one of the JavaScript's data types
// a collection of related data and/or functionally.
// Nearly all objects in JavaScr ipt are instance of Object
// object = { key : value };

// 1. Literals and properties
const obj1 = {}; // 'object literal' syntax
const obj2 = new Object(); // 'object constructor' syntax

function print(person){
  console.log(person.name);
  console.log(person.age);
}

const info = {name: 'jeongwoo', age: 25};
print(info);

// with JavaScript magic (dynamically typed language)
// can add properties later (delete)
info.hasJob = true;
console.log(info.hasJob);

delete info.hasJob;
console.log(info.hasJob);

// 2. Computed properties // 동적으로 키 값을 받아올 때 유용
console.log(info.name);
console.log(info['name']); //정확한 키를 모를 때 사용
info['hasJob'] = true;
console.log(info['hasJob']);

function printValue(obj, key) {
  console.log(obj[key]);
}

printValue(info, 'name');
printValue(info, 'age');
printValue(info, 'gender');

// 3. Property value shorthand
const person1 = {name : 'park', age: 15};
const person2 = {name : 'kim', age: 20};
const person3 = {name : 'lee', age:25};
const person4 = new Person('cho', 25);
console.log(person4);

// 4. Constructor function
function Person(name, age) {
  // this = {};
  this.name = name;
  this.age = age;
  // return this;
}

// 5. in operator: property existence check (key in obj)
console.log('name' in info);
console.log('age' in info);
console.log('gender' in info);
console.log(info.gender);

console.clear();

// 6. for..in vs for..of
// for (key in obj) // When you want to receive and process all keys
for (key in info) { //info가 루프를 돌때마다 key 지역번수에 할당된다.
  console.log(key);
}
// for (value of iterable) // array 처리 시
const array = [1, 2, 3, 4];
for(value of array){
  console.log(value);
}


// 7. Cloning
// Object.assign(dest, [obj1, obj2, obj3...])
const user  = { name: 'Jeongwoo', age: 25};
const user2 = user;

console.log(user);

// old way
const user3 = {};
for(key in user){
  user3[key] = user[key];
}
console.clear();
console.log(user3);

const user4 = Object.assign({}, user);
console.log(user4);

// another example
const fruit1 = {color: 'red'};
const fruit2 = {color: 'blue', size: 'big'};
const mixed = Object.assign({}, fruit1, fruit2); // 뒤에 있는 객체의 속성이 할당된다.
console.log(mixed.color);
console.log(mixed.size);

