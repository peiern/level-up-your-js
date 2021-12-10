// start with strings, numbers and booleans
let age = 100;
let age2 = age;
console.log(age, age2);
age = 200;
console.log(age, age2);

// Let's say we have an array
const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];

// and we want to make a copy of it.
const team = players
console.log(players, team);
// You might think we can just do something like this:
team[3] = 'Lux' // referencing the original arrary and when updating the reference, it will always go back to the original array. different from strings, boolean and numbers

// however what happens when we update that array? -> the original changes
// now here is the problem!
// oh no - we have edited the original array too!
// Why? It's because that is an array reference, not an array copy. They both point to the same array!
// So, how do we fix this? We take a copy instead!
// one way
const team2 = players.slice(); // empty slice just returns a copy of the original array
team2[3] = 'Lux'
console.log(team2);
// or create a new array and concat the old one in
const team3 = [].concat(players)
// or use the new ES6 Spread
const team4 = [...players]; //... = spread. spread takes every item of the original array and put it into the containing array
// or
const team5 = Array.from(players)
// now when we update it, the original one isn't changed

// The same thing goes for objects, let's say we have a person object

// with Objects
const person = {
  name: 'Wes Bos',
  age: 80
};

// and think we make a copy:
const captain = person;
captain.number = 99; // we cannot do this. this changes the original object as we're making a reference

// how do we take a copy instead?
const capt2 = Object.assign({}, person, { number: 99 }); // starts with an blank obj -> {}, pass in the obj that we want to copy -> person, fold in the new property -> { number: 99 }
// We will hopefully soon see the object ...spread
const capt3 = {...person};
capt3.number = 99;

// Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.
const wes = {
  name: 'Wes',
  age: 100,
  social: {
    twitter: '@wesbos',
    facebook: 'wesbos.developer'
  }
};

const dev = Object.assign({}, wes); // Object.assign is only for 1 level deep

const dev2 = JSON.parse(JSON.stringify(wes)); // we can do this for multi-level cloning
