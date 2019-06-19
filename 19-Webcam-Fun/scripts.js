const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');


function playVideo() {
  navigator.mediaDevices.getUserMedia({ audio: false, video: true })
    .then(function (stream) {
      // video.src = window.URL.createObjectURL(stream);

      video.srcObject = stream;
      video.play();
    })
    .catch(console.error);
}

function paintVideoToCanvas() {
  var width = video.videoWidth;
  var height = video.videoHeight;

  return setInterval(() => {
    ctx.drawImage(video, 0, 0, width, height);
    var pixels = ctx.getImageData(0, 0, width, height);

    // pixels = redEffect(pixels);
    // pixels = rgbSplit(pixels);
    // ctx.globalAlpha = 0.1;

    pixels = greenScreen(pixels);

    ctx.putImageData(pixels, 0, 0);
  }, 1000 / 30);
}

function redEffect(pixels) {
  for (let i = 0; i < pixels.data.length; i += 4) {
    pixels.data[i] = pixels.data[i] + 100; // Red
    pixels.data[i + 1] = pixels.data[i + 1] - 50; // Green
    pixels.data[i + 2] = pixels.data[i + 2] * 0.5; // Blue
  }

  return pixels;
}

function rgbSplit(pixels) {
  for (let i = 0; i < pixels.data.length; i += 4) {
    pixels.data[i - 150] = pixels.data[i]; // Red
    pixels.data[i + 100] = pixels.data[i + 1]; // Green
    pixels.data[i - 150] = pixels.data[i + 2]; // Blue
  }

  return pixels;
}

function greenScreen(pixels) {
  const levels = {};

  document.querySelectorAll('.rgb input').forEach((input) => {
    levels[input.name] = input.value;
  });

  for (i = 0; i < pixels.data.length; i += 4) {
    red = pixels.data[i];
    green = pixels.data[i + 1];
    blue = pixels.data[i + 2];
    alpha = pixels.data[i + 3];

    if (red >= levels.rmin
      && green >= levels.gmin
      && blue >= levels.bmin
      && red <= levels.rmax
      && green <= levels.gmax
      && blue <= levels.bmax) {
      // take it out!
      pixels.data[i + 3] = 0;
    }
  }

  return pixels;
}

function takePhoto() {
  // Played the sound.
  snap.currentTime = 0;
  snap.play();

  // Take data out of the canvas.
  var data = canvas.toDataURL('image/jpeg');
  var link = document.createElement('a');
  link.href = data;
  link.setAttribute('download', 'handsome');
  link.innerHTML = `<img src="${data}" alt="Photo" />`;
  strip.insertBefore(link, strip.firstChild);
}

video.addEventListener('loadedmetadata', function() {
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
});

video.addEventListener('canplay', paintVideoToCanvas);


playVideo();
