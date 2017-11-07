const nav = document.querySelector('#main');
const navOffset = nav.offsetTop;
const navHeight = nav.offsetHeight;

function triggerNav() {
    const windowOffset = window.scrollY;
    if (windowOffset >= navOffset) {
        document.body.classList.add('fixed-nav');
        document.body.style.paddingTop = navHeight + 'px';
    } else {
        document.body.classList.remove('fixed-nav');
        document.body.style.paddingTop = 0;
    }
}

window.addEventListener('scroll', triggerNav);