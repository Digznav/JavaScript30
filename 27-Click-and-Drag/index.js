var items = document.querySelector('.items');
var mousePos = ;
var isDown = false;

function startDrag() {
  isDown = true;
  this.classList.add('active');
}

function dragging() {

}

function stopDrag() {
  isDown = false;
  this.classList.remove('active');
}

items.addEventListener('mousedown', startDrag);
items.addEventListener('mouseup', stopDrag);
