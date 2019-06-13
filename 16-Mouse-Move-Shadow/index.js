const hero = document.querySelector('.hero');
const text = hero.querySelector('h1');

function random(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

hero.addEventListener('mousemove', function name(event) {
  var x = event.clientX - (window.innerWidth / 2);
  var y = event.clientY - (window.innerHeight / 2);

  var reducedX = Math.floor(x * 0.4);
  var reducedY = Math.floor(y * 0.4);

  var invertX = reducedX * -1;
  var invertY = reducedY * -1;

  text.style.textShadow = `
    ${invertX}px ${invertY}px 0 rgba(${random(0, 255)},${random(0, 255)},${random(0, 255)},0.7),
    ${invertY}px ${invertX}px 0 rgba(${random(0, 255)},${random(0, 255)},${random(0, 255)},0.7),
    ${reducedX}px ${reducedY}px 0 rgba(${random(0, 255)},${random(0, 255)},${random(0, 255)},0.7),
    ${reducedY}px ${reducedX}px 0 rgba(${random(0, 255)},${random(0, 255)},${random(0, 255)},0.7),

    ${invertX / 2}px ${invertY / 2}px 0 rgba(${random(0, 255)},${random(0, 255)},${random(0, 255)},0.7),
    ${invertY / 2}px ${invertX / 2}px 0 rgba(${random(0, 255)},${random(0, 255)},${random(0, 255)},0.7),
    ${reducedX / 2}px ${reducedY / 2}px 0 rgba(${random(0, 255)},${random(0, 255)},${random(0, 255)},0.7),
    ${reducedY / 2}px ${reducedX / 2}px 0 rgba(${random(0, 255)},${random(0, 255)},${random(0, 255)},0.7)
  `;
});