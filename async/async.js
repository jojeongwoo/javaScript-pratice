// async & await
// clear style of using promise

// 1. async

function fetchUser(){
  // wait 10s
  return new Promise((resolve, reject) =>{
    resolve('ellie');
  });
}

const user = fetchUser();
user.then(console.log);
console.log(user);

// same code

async function fetchUser(){
  // wait 10s
  return ('ellie');
}

const user1 = fetchUser();
user1.then(console.log);
console.log(user1);


// 2. await 

function delay(ms){
  return new Promise(resolve => setTimeout(resolve,ms));
}

async function getApple(){
  await delay(1000);
  return 'apple';
}

async function getBanana(){
  await delay(1000);
  return 'banana';
}

async function pickFruits(){
  const applePromise = getApple();
  const bananaPromise = getBanana();
  const apple = await applePromise;
  const banana = await bananaPromise;
  return `${apple} + ${banana}`;
}

// 5. useful Promise APIs
function pickAllFruits(){
  return Promise.all([getApple(), getBanana()])
  .then(fruits => fruits.join(' + ')
  );
}

pickFruits().then(console.log);

function pickOnlyOne(){
  return Promise.race([getApple(), getBanana()]);
}

pickOnlyOne().then(console.log);