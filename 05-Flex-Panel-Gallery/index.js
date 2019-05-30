function random(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

// Get the element, add a click listener...
document.querySelector('.panels').addEventListener('click', function panelClicks(e) {
  if(e.target && e.target.closest('.panel')) {
    var element = e.target.closest('.panel');
    element.classList.toggle('open');
  }
});


document.querySelectorAll('.panel').forEach(function each(element) {
  element.style.backgroundColor = `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`;

  element.addEventListener('transitionend', function showText(event) {
    if (event.propertyName == 'flex-grow') {
      event.target.classList.toggle('open-active');
    }
  }, false);
});