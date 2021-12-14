const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const moles = document.querySelectorAll('.mole');
let lastHole;
let timeUp = false;
let score = 0;

// a function that gives us a random amt of time between min and max
function randTime(min, max) {
  return Math.random() * (min - max) + min;
}

// a function that picks a hole for the mole to pop up from
function randHole(holes) {
  const index = Math.floor(Math.random()* holes.length);
  const hole = holes[index];
  if (hole === lastHole){
    return randHole(holes);
  }
  lastHole = hole;
  return hole;
}

// a function for popping up moles
function popUp() {
  const time = randTime(300, 1000);
  const hole = randHole(holes);
  hole.classList.add('up');
  // let mole disappear automatically
  setTimeout(() => {
    hole.classList.remove('up');
    if (!timeUp) popUp(); // restart game again after mole disappears
  }, time);
}

function startGame() {
  scoreBoard.textContent = 0;
  timeUp = false;
  score = 0;
  popUp();
  setTimeout(() => timeUp = true, 10000);
}

// function to hit the mole
function hit(e) {
  if(!e.isTrusted) return; // isTrusted is from the DOM when a mouse event happened
  score++;
  this.classList.remove('up');
  scoreBoard.textContent = score;
}

moles.forEach(mole => {
  mole.addEventListener('click', hit)
});
