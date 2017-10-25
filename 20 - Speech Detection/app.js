window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true;
recognition.lang = 'en-US';

let paragraph = document.createElement('P');
const container = document.querySelector('.words');
container.appendChild(paragraph);

function execute(e) {
    const array = Array.from(e.results);
    const result = array.map(item => item[0])
                        .map(item => item.transcript)
                        .join('');
    paragraph.textContent = result;

    if (e.results[0].isFinal) {
        paragraph = document.createElement('P');
        container.appendChild(paragraph);
    }

    if (result.includes('Maximilian')) {
        window.open("http://www.maksymilianolszewski.com");
    }

}

recognition.addEventListener('result', execute);
recognition.addEventListener('end', recognition.start);

recognition.start();