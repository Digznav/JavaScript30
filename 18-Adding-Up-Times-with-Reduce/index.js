var videos = Array.from(document.querySelectorAll('.videos li'));

var totalSeconds = videos.reduce((total, itm) => {
  var [min, sec] = itm.dataset.time.split(':').map(Number);
  return total + (min * 60) + sec;
}, 0);

console.log(totalSeconds);

var measuredTime = new Date(null);
measuredTime.setSeconds(totalSeconds);

console.log(
  measuredTime.getUTCHours(),
  measuredTime.getMinutes(),
  measuredTime.getSeconds()
);
