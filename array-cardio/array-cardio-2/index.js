// ## Array Cardio Day 2

const people = [
  { name: 'Wes', year: 1988 },
  { name: 'Kait', year: 1986 },
  { name: 'Irv', year: 1970 },
  { name: 'Lux', year: 2015 }
];

const comments = [
  { text: 'Love this!', id: 523423 },
  { text: 'Super good', id: 823423 },
  { text: 'You are the best', id: 2039842 },
  { text: 'Ramen is my fav food ever', id: 123523 },
  { text: 'Nice Nice Nice!', id: 542328 }
];

// Some and Every Checks
// Array.prototype.some() // is at least one person 19 or older?
// method 1:
const check = people.some(people => {
  const currentYear = new Date().getFullYear();
  const age = currentYear - people.year;
  if (age >= 19){
    return true
  };
})
console.log(check);

//method 2:
const isAdult = people.some(people => ((new Date()).getFullYear()) - people.year >= 19);
console.log(isAdult);

// Array.prototype.every() // is everyone 19 or older?
// method 1:
const isAbove = (people) => ((new Date().getFullYear()) - people.year) >= 19
const letsCheck = people.every(isAbove);
console.log(letsCheck);

// method 2:
const allAdults = people.every(people => ((new Date()).getFullYear()) - people.year >= 19);
console.log(allAdults);

// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423
const findComment = comments.find(comment => comment.id === 823423).text
console.log(findComment);

// Array.prototype.findIndex()
// Find the comment with this ID
// delete the comment with the ID of 823423
const index = comments.findIndex(comment => comment.id === 823423);
comments.splice(index, 1) // removing comment
console.log(comments); // show new comments array
