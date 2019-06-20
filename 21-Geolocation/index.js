var arrow = document.querySelector('.arrow');
var speed = document.querySelector('.speed-value');

navigator.geolocation.watchPosition(({ coords }) => {
  arrow.style.transform = `rotate(${coords.heading}deg)`;
  speed.textContent = coords.speed;
}, console.error);
