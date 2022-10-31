const textarea = document.querySelector('textarea');
const counter = document.querySelector('.counter');
let characters;

const handleInput = () => {
  // track number of characters in textarea by making it an array and using length method
  characters = textarea.value.split('').length;

  // change counter color by adding/removing classes when characters hits certain values
  characters > 129 && characters < 140 ? counter.classList.add('near-limit') : counter.classList.remove('near-limit');
  characters > 139 ? counter.classList.add('at-limit') : counter.classList.remove('at-limit');

  // update counter
  counter.innerHTML = `${characters}/140`;
}

//event listener that fires with every change to textarea
textarea.addEventListener('input', handleInput);