window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

recognition.interimResults = true;
// recognition.lang = 'es-MX';
recognition.lang = 'en-US';

var p = document.createElement('p');
var words = document.querySelector('.words');
words.appendChild(p);

recognition.start();

recognition.addEventListener('result', function(event) {
  console.log(Array.from(event.results));
  var transcript = Array.from(event.results)
    .map(result => result[0])
    .map(result => result.transcript)
    .join('')
    // .reduce((text, result) => {
    //   return `${text}${result[0].transcript}`;
    // }, '');

  p.textContent = transcript;

  if (event.results[0].isFinal) {
    p = document.createElement('p');
    words.appendChild(p);
  }
});

recognition.addEventListener('end', recognition.start);
