//1. how to pull out data-time attribute from the DOM
// 2. and convert them into mins, secs
// 3. add it all up using reduce()
// 4. and figure out the total hrs, mins and sec

// 1.
const timeNodes = [...document.querySelectorAll('[data-time]')]; // convert timeNodes into an array
// 2.
const seconds = timeNodes
  .map(node => node.dataset.time) // map into an array of string
  .map(timeCode => {
    const [mins, secs] = timeCode.split(':').map(parseFloat); // turning string to numbers and into mins and seconds
    return (mins * 60) + secs; // adding in seconds
  })
  // 3.
  .reduce((total, vidSeconds) => total + vidSeconds) // adding it all up

  // 4.
let secondsLeft = seconds
const hours = Math.floor(secondsLeft / 3600);
secondsLeft = secondsLeft % 3600; // how many secs are left

const mins = Math.floor(secondsLeft / 60); // from the seconds left, we get the mins
secondsLeft = secondsLeft % 60; // value of the final seconds left
const totalDuration = document.querySelector('#total-duration').insertAdjacentText('beforeend', `${hours}:${mins}:${secondsLeft}`)
