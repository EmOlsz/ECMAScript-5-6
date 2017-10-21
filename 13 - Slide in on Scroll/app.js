function debounce(func, wait = 20, immediate = true) {
    var timeout;
    return function() {
        var context = this, args = arguments;
        var later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

const images = document.querySelectorAll('.site-wrap img');

function animateImg() {
    images.forEach(image => {
        const activate = window.scrollY + window.innerHeight;
    const deactivate = window.scrollY;
    const imageMiddle = image.offsetTop + (image.height / 2);
    const imageBottom = image.offsetTop + image.height;

    activate > imageMiddle && deactivate < imageBottom ? image.classList.add('active') : image.classList.remove('active');
});
}

window.addEventListener('scroll', debounce(animateImg));