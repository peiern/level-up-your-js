const checkboxes = document.querySelectorAll('.inbox input[type=checkbox]');

let lastChecked;

function handleCheck(e) {
  // check if shift key is down
  // and check that they are checking it
  let inBetween = false;
  if (e.shiftKey && this.checked){
    // loop over every single checkboxes
    checkboxes.forEach(checkbox => {
      if (checkbox === this || checkbox === lastChecked) {
        inBetween = !inBetween; // because we want to go both ways
      }

      if (inBetween) {
        checkbox.checked = true; // JS will automatically check the boxes
      }
    })

  }
  lastChecked = this;
}

checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));
