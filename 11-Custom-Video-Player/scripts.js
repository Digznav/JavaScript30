const videoWrapper = document.querySelector('.player');
const video = document.querySelector('.player__video');
const progressWrapper = document.querySelector('.progress');
const buttons = document.querySelectorAll('.player__button');
const playerSlider = document.querySelectorAll('.player__slider');

const playButton = buttons[0];
const progressBar = progressWrapper.querySelector('.progress__filled');
var holdToSeek = false;

video.volume = 0;

function playPause() {
    if (video.paused || video.ended) {
        video.play();
        playButton.textContent = '❚ ❚';
    } else {
        video.pause();
        playButton.textContent = '►';
    }
}

function skipTo(event) {
    if (video.currentTime > 0 && video.currentTime < video.duration) {
        video.currentTime += Number(event.target.dataset.skip);
    }
}

function resetControls() {
    video.currentTime = 0;
    playButton.innerText = '►';
    progressBar.style.flexBasis = 0;
    playerSlider.forEach(slider => {
        slider.value = 1;
    });
}

function seekInVideo(event) {
    var left = event.pageX - (videoWrapper.offsetLeft + ((videoWrapper.offsetWidth - videoWrapper.clientWidth) / 2));
    var totalWidth = video.clientWidth;
    var percentage = left / totalWidth;
    var vidTime = video.duration * percentage;

    if (vidTime >= 0 && vidTime <= video.duration) {
        video.currentTime = vidTime;
    }
}

function seekWhileHolding(event) {
    console.log(holdToSeek);
    if (holdToSeek) {
        seekInVideo(event);
    }
}

function resetHoldToSeek() {
    holdToSeek = false;
}

function updateProgress() {
    var percentage = (video.currentTime * 100) / video.duration;
    progressBar.style.flexBasis = `${percentage.toFixed(5)}%`;
}

buttons.forEach(btn => {
    if (!btn.classList.contains('toggle')) {
        btn.addEventListener('click', skipTo);
    }
});

playerSlider.forEach(slider => {
    slider.addEventListener('input', function sliderInput(event) {
        var slide = event.target;
        video[slide.name] = Number(slide.value);
    });
});

playButton.addEventListener('click', playPause);

progressWrapper.addEventListener('mousedown', event => {
    holdToSeek = true;
    seekInVideo(event);
});

progressWrapper.addEventListener('mouseup', resetHoldToSeek);
progressWrapper.addEventListener('mousemove', seekWhileHolding);

videoWrapper.addEventListener('mousemove', seekWhileHolding);

document.body.addEventListener('mousemove', seekWhileHolding);
document.body.addEventListener('mouseup', resetHoldToSeek);
// document.body.addEventListener('mouseout', resetHoldToSeek);

video.addEventListener('click', playPause);
video.addEventListener('ended', resetControls);
video.addEventListener('timeupdate', updateProgress);

resetControls();