// 1. Use strict
// added in ES 5
// use this for Vanila Javascript.
'use strict';

// 2. Variable r(read), w(write)
// let (added in ES6)
let globalName = 'global name'; //어플리케이션 실행과 동시에 메모리에 적재되어있기 때문에 최소한으로 해야한다.
{
  let name = 'JeongWoo';
  console.log(name);
  name = 'YuJeong';
  console.log(name);
  console.log(globalName);
}
console.log(name);
console.log(globalName);

//var (don't ever use this!)
//var hoisting(move declaration from bottom to top)
//has no block scope

//3. Constant, r(read only)
// favor immutable data type always for a few reasons:
// - security
// - thread safety
// - reduce human mistakes

// Note!
// Immutable data types: premitive types, frozen objects
// Mutable data types: all objects by default are mutable in JS

//4. Variable types
// primitive, single item: number, string, boolean, null, undefiedn, symbol
// object, box container
// function, first-class function -> fuction을 매개변수로 사용가능

const count = 17; //integer
const size = 17.1; //decimal number
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

// number - special numeric values: infinity, -infinity, NaN
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 0;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// bigInt (fairly new, don't use it yet)
const bigInt = 1231231232131313124141414121333n;
console.log(`value: ${bigInt}, type:${typeof bigInt}`);

console.clear();
// String
const char = 'c';
const name2 = 'JeongWoo';
const greeting = 'hello ' + name2;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloYu = `hi ${name2}!`;
console.log(`value: ${helloYu}, type: ${typeof helloYu}`);

//boolean
// false: 0, null, undefined, NaN, ''
// true: any other value
const canRead = true;
const test = 3 < 1; // false
console.log(`value: ${canRead}, type:${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

// null
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

//undefined
let x;
console.log(`value: ${x}, type: ${typeof x}`);

//symbol, create unique indentifiers for objects
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2);

const gSymbol1 = Symbol.for('id'); // create same symbol 
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2);

console.log(`value:${symbol1.description}, type: ${typeof symbol1}`);


// 5. Dynamic typing
let text = 'hello';
console.log(text.charAt(1));
console.log(`value:${text}, type:${typeof text}`);
text = 1;
console.log(`value:${text}, type:${typeof text}`);
text = '7' + 10;
console.log(`value:${text}, type:${typeof text}`);
text = '8' / '8';
console.log(`value:${text}, type:${typeof text}`);


