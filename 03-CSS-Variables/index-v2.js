var spacing = document.getElementById('spacing');
var blur = document.getElementById('blur');
var base = document.getElementById('base');

function changeHandler({ target }) {
    var prefix = target.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${target.name}`, `${target.value}${prefix}`);
}

blur.addEventListener('input', changeHandler, false);
base.addEventListener('input', changeHandler, false);
spacing.addEventListener('input', changeHandler, false);
