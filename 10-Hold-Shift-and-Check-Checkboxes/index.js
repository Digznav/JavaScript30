// Get the element, add a click listener...
var allInputs = document.querySelectorAll('.item input');
var shiftPressed = false;
var currentClicked = document.querySelector('.inbox input');

document.querySelector('.inbox').addEventListener('click', function panelClicks(event) {
    if(event.target && event.target.nodeName.toLowerCase() == 'input') {

        if (shiftPressed) {
            var start = Number(currentClicked.dataset.key);
            var end = Number(event.target.dataset.key);
            
            if (start < end) {
                console.log('forward', start, end);

                for (let i = start; i < end; i++) {
                    allInputs[i].checked = true;
                }
            } else {
                console.log('backward', start, end);

                for (let i = start; i > end; i--) {
                    console.log(i);
                    allInputs[i].checked = true;
                }
            }
        }

        currentClicked = event.target;
    }
});

window.addEventListener('keydown', () => {
    shiftPressed = true;
});

window.addEventListener('keyup', () => {
    shiftPressed = false;
});
