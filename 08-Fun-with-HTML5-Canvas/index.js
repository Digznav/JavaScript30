var canvas = document.querySelector('#draw');
var ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.strokeStyle = '#BADA55';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';

var isDrawing = false;
var lastY = 0;
var lastX = 0;
var hue = 0;
var width = 1;
var switchStroke = false;

function draw(event) {
    if (!isDrawing) {
        return;
    }

    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
    ctx.lineWidth = width;

    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(event.offsetX, event.offsetY);
    ctx.stroke();

    [lastX, lastY] = [event.offsetX, event.offsetY];
    hue++;

    if (hue >= 360) {
        hue = 0;
    }

    if (!switchStroke) {
        width++;

        if (width > 100) {
            switchStroke = true;
        };
    } else {
        width--;

        if (width < 10) {
            switchStroke = false;
        }
    }
}

function resetDrawing() {
    isDrawing = false;
}

function setDrawing() {
    isDrawing = true;
    [lastX, lastY] = [event.offsetX, event.offsetY];
}

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mousedown', setDrawing);
canvas.addEventListener('mouseup', resetDrawing);
canvas.addEventListener('mouseout', resetDrawing);
