document.addEventListener('DOMContentLoaded', function() {
    function playSound(e) {
        const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
        const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
        audio.currentTime = 0;
        audio.play();
        key.classList.add('playing');
    }
    function deleteClass() {
        const keys = document.querySelectorAll('.key');
        keys.forEach(key => key.classList.remove('playing'));
    }
    document.addEventListener('keydown', playSound);
    document.addEventListener('transitionend', deleteClass);
});