'use strict';
// Object-oriented programing
// class: template(틀)
// object: instance of a class
// JavaScript classes
// - introduced in ES6
// - syntanctical sugar over prototype-based inheritance

// 1. Class declartions (class > (constructor > fields) + methods)
class Person{
  //constructor
  constructor(name, age) {
    //fields
    this.name = name;
    this.age = age;
  }

  //method
  speak(){
    console.log(`hello ${this.name}~ i'm ${this.age}old `);
  }
}

const jeongwoo = new Person('jeongwoo', 25);
console.log(jeongwoo.name);
console.log(jeongwoo.age);
jeongwoo.speak();

console.clear();

// 2. Getter and setter
class User {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  
  get age(){
    return this._age;
  }

  set age(value){
    this._age = value < 0  ? 0 : value;
  }
}

const yujeong = new User('hwang', 'yujeong', -1);
console.log(yujeong.age);

// 3. Field (public, private)
class Experiment{
  publicField = 2;
  #privateField = 0;
}
const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField);

// 4 Static properties and methods
class Article {
  static publisher = 'Dream Coding';
  constructor(articleNumber){
    this.articleNumber = articleNumber;
  }

  static printPublisher(){
    console.log(Article.publisher);
  }
}

const article1 = new Article(1);
const article2 = new Article(2);
console.log(Article.publisher);
Article.printPublisher();

console.clear();

// 5. Inheritance
// a way for one class to extend another class.
class Shape{
  constructor(color, width, height){
    this.color = color;
    this.width = width;
    this.height = height;
  }

  draw(){
    console.log(`draw ${this.color} Shape`);
  }

  getArea(){
    return this.width * this.height;
  }
}

class Rectangle extends Shape{
  draw(){
    console.log(`"draw ${this.color} Rectangle"`);
  }
}

const rectangle = new Rectangle('blue', 20, 20);
console.log(rectangle.getArea());
rectangle.draw();

class Triangle extends Shape{
  draw(){
    console.log(`"draw ${this.color} Triangle"`);
  }

  getArea(){
    return (this.width * this.height) / 2;
  }
}

const triangle = new Triangle('red', 20, 20);
console.log(triangle.getArea());
triangle.draw();

// 6. Class checking: instanceOf (object instanceOf class)
console.log(rectangle instanceof Rectangle);
console.log(triangle instanceof Rectangle);
console.log(triangle instanceof Triangle);
console.log(triangle instanceof Shape);
console.log(triangle instanceof Object);


