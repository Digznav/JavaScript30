var spacing = document.getElementById('spacing');
var blur = document.getElementById('blur');
var base = document.getElementById('base');

function changeSpacing(event) {
    document.documentElement.style.setProperty(`--${event.target.name}`, event.target.value + event.target.dataset.sizing);
}

function changeBlur(event) {
    document.documentElement.style.setProperty(`--${event.target.name}`, event.target.value + event.target.dataset.sizing);
}

function changeColor(event) {
    document.documentElement.style.setProperty(`--${event.target.name}`, event.target.value);
}

spacing.addEventListener('input', changeSpacing, false);
blur.addEventListener('input', changeBlur, false);
base.addEventListener('input', changeColor, false);
