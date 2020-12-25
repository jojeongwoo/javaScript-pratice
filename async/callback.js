'use strict';

// JavaScript is synchronous.
// Execute the code block by order after hoisting.
// hoisting: var, function declaration
console.log('1');
setTimeout(() => console.log('2'), 1000);
console.log('3');


// Synchronous callback
function printImmeately(print){
  print();
}

printImmeately(() => console.log('Hello'));

// Asynchronous callback
function printWithDelay(print, timeOut){
  setTimeout(print, timeOut);
}

printWithDelay(() => console.log('async callback'), 1000);

//callback hell example

class UserStorage{
  LoginUser(id, password, onSuccess, onError){
    setTimeout(() => {
      if(
        (id === 'ellie' && password === 'dream') ||
        (id === 'corder' && password === 'woo')
      ) {
        onSuccess(id);
      } else {
        onError(new Error('not found'));
      } 
    }, 2000);
  }

  getRoles(user, onSuccess, onError){
    setTimeout(() => {
      if(user === 'ellie'){
        onSuccess({name:'ellie', role:'admin'});
      } else {
        onError(new Error('no access'));
      }
    }, 1000);
  }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');

userStorage.LoginUser(
  id,
  password,
  user => {
    userStorage.getRoles(
      user,
      userWithRole => {
        alert(`Hello ${userWithRole.name} you have a ${userWithRole.role} role`);
      },
      error => {console.log(error);
      });
  },
  error => {console.log(error);
});
