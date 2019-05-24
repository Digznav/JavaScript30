var hourHand = document.querySelector('.hour-hand');
var minuteHand = document.querySelector('.min-hand');
var secondHand = document.querySelector('.second-hand');

function setDate() {
    var now = new Date();
    var seconds = now.getSeconds();
    var secondsDegrees = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    var minutes = now.getMinutes();
    console.log((minutes / 60) * 360);
    var minDegrees = ((minutes / 60) * 360) + ((seconds / 60) * 6) + 90;
    minuteHand.style.transform = `rotate(${minDegrees}deg)`;

    var hours = now.getHours();
    var hoursDegrees = ((hours / 12) * 360) + ((minutes / 60) * 30) + 90;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

setInterval(setDate, 1000);

setDate();
