var allKeys = document.querySelectorAll('.key');

function playSound(event) {
    var audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    var keyBtn = document.querySelector(`.key[data-key="${event.keyCode}"]`);

    if(!audio) return;

    audio.currentTime = 0;
    audio.play();
    keyBtn.classList.add('playing');
}

function removeTransition(event) {
    if (event.propertyName != 'transform') return;

    this.classList.remove('playing');
}

window.addEventListener('keydown', playSound);


allKeys.forEach(function eachKey(key) {
    key.addEventListener('transitionend', removeTransition);
});