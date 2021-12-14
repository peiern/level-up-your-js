const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const moles = document.querySelectorAll('.mole');
let lastHole;

// a function that gives us a random amt of time between min and max
function randTime(min, max) {
  return Math.random() * (min - max) + min;
}

// a function that picks a hole for the mole to pop up from
function randHole(holes) {
  const index = Math.floor(Math.random()* holes.length);
  const hole = holes[index];
  if (hole === lastHole){
    alert('Ah nah thats the same one dude');
    return randHole(holes);
  }
  lastHole = hole;
  return hole;
}
