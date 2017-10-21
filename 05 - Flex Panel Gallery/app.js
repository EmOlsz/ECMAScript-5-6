const panel = document.querySelectorAll('.panel');

function toggleOpen(e) {
    this.classList.toggle('open');
}
function toggleActive(e) {
    if (e.propertyName.includes('flex')) {
        this.classList.toggle('open-active');
    }
}

panel.forEach(a => a.addEventListener('click', toggleOpen));
panel.forEach(b => b.addEventListener('transitionend', toggleActive));