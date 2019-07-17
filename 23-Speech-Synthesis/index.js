const msg = new SpeechSynthesisUtterance();
var voices = [];
const voicesDropdown = document.querySelector('[name="voice"]');
const options = document.querySelectorAll('[type="range"], [name="text"]');
const speakButton = document.querySelector('#speak');
const stopButton = document.querySelector('#stop');

msg.text = options[2].value;

function populateVoices() {
  voices = this.getVoices();

  voices.forEach((voice, idx) => {
    var option = document.createElement('option');
    option.textContent = `${voice.name} (${voice.lang})`;

    if(voice.default) {
      option.textContent += ' (Default)';
      option.selected = true;
    }

    option.value = idx;

    voicesDropdown.appendChild(option);
  });
}

speechSynthesis.addEventListener('voiceschanged', populateVoices);

speakButton.addEventListener('click', (event) => {
  event.preventDefault();

  var rate = options[0];
  var pitch = options[1];

  msg.voice = voices[Number(voicesDropdown.value)];
  // console.log(rate.value, pitch.value);

  speechSynthesis.speak(msg);
});
