// bubbling = browser will figure out what is clicked, but it will also create clicks for every element upwards from where the original click began

const divs = document.querySelectorAll('div');
function logText(e) {
  console.log(this.classList.value);
  e.stopPropagation() // stop bubbling this event upwards
}

divs.forEach(div => div.addEventListener('click', logText));
// capture: true => event is run on capture down, instead of bubbling
// once: true => it will listen for a click once, and then unbind itself, kinda like stopping itself. its the same as removeEventListener
