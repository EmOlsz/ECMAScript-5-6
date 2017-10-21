const player = document.querySelector('.player');
const video = document.querySelector('.viewer');
const progress = document.querySelector('.progress');
const progressBar = document.querySelector('.progress__filled');
const playBtn = document.querySelector('.toggle');
const sliders = document.querySelectorAll('.player__slider');
const skipBtns = document.querySelectorAll('[data-skip');
let handleMove = false;

// Added play/pause functionality with change of playBtn content

function playPause() {
    const action = video.paused ? 'play' : 'pause';
    video[action]();
}

function buttonChange() {
    const btnContent = video.paused ? '►' : '❚ ❚';
    playBtn.innerText = btnContent;
}

// Added skip video time functionality

function skip() {
    const skipAmount = parseInt(this.dataset.skip);
    video.currentTime += skipAmount;
}

// Added volume and speed range functionality

function volSpeedRange() {
    video[this.name] = this.value;
}

// Added video time range functionality

function handleProgress() {
    const percent = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${percent}%`;
}

function videoRange(e) {
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
}


video.addEventListener('click', playPause);
video.addEventListener('play', buttonChange);
video.addEventListener('pause', buttonChange);
video.addEventListener('timeupdate', handleProgress);
video.addEventListener('mousemove', handleProgress);

playBtn.addEventListener('click', playPause);

skipBtns.forEach(btn => btn.addEventListener('click', skip));

sliders.forEach(slider => slider.addEventListener('change', volSpeedRange));
sliders.forEach(slider => slider.addEventListener('mousemove', volSpeedRange));

progress.addEventListener('click', videoRange);
progress.addEventListener('mousemove', (e) => handleMove && videoRange(e));
progress.addEventListener('mousedown', () => handleMove = true);
progress.addEventListener('mouseup', () => handleMove = false);
progress.addEventListener('mouseout', () => handleMove = false);

