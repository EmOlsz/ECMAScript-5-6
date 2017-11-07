const msg = new SpeechSynthesisUtterance();
let voices = [];
const voicesDropdown = document.querySelector('[name="voice"]');
const options = document.querySelectorAll('[type="range"], [name="text"]');
const speakButton = document.querySelector('#speak');
const stopButton = document.querySelector('#stop');
msg.text = document.querySelector('[name="text"]').value;


function getVoices() {
    voices = this.getVoices();
    const html = voices
            .map(voice => `<option value="${voice.name}">${voice.name} (${voice.name})</option>`)
            .join('');
    voicesDropdown.innerHTML = html;
}

function setVoices() {
    msg.voice = voices.find(voice => voice.name == this.value);
}

function run() {
    speechSynthesis.speak(msg);
}

function stop() {
    speechSynthesis.cancel();
}

function setOptions() {
    msg[this.name] = this.value;
}


speechSynthesis.addEventListener('voiceschanged', getVoices);
voicesDropdown.addEventListener('change', setVoices);
speakButton.addEventListener('click', run);
stopButton.addEventListener('click', () => stop);
options.forEach(option => option.addEventListener('change', setOptions));