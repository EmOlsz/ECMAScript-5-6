document.addEventListener('DOMContentLoaded', () => {

    const images = document.querySelectorAll('.images li');
    const dotsContainer = document.querySelector('.dots');
    const prevBtn = document.querySelector('#prev');
    const nextBtn = document.querySelector('#next');
    let i = 0;


    // Create the same amount of dots as there is images in gallery (for easy change quantity of pictures -> "Liczba slajdów powinna być elastyczna i łatwo modyfikowalna")

    for (let j = 0; j <= images.length - 1; j++) {
        let newDot = document.createElement("LI");
        newDot.setAttribute('data-number', j);
        newDot.setAttribute('data-image', images[j].className);
        dotsContainer.appendChild(newDot);
    }

    const dots = document.querySelectorAll('.dots li');
    let dotActive = document.querySelector(`li[data-number="${i}"]`);;

    images[i].classList.add('img-active');
    dotActive.classList.add('dot-active');

    // Actions for buttons

    function prevPicture() {
        images[i].classList.remove('img-active');
        i--;
        if (i < 0) {
            i = images.length - 1;
        }
        images[i].classList.add('img-active');
        selectedDot();
    }

    function nextPicture() {
        images[i].classList.remove('img-active');
        i++;
        if (i > images.length - 1) {
            i = 0;
        }
        images[i].classList.add('img-active');
        selectedDot();
    }

    // Actions for dots

    function selectPicture() {
        let selectedPicture = document.querySelector(`.${this.dataset.image}`);
        images[i].classList.remove('img-active');
        i = this.dataset.number;
        selectedPicture.classList.add('img-active');
        selectedDot();
    }

    function selectedDot() {
        dotActive.classList.remove('dot-active');
        dotActive = document.querySelector(`li[data-number="${i}"]`);
        dotActive.classList.add('dot-active');
    }

    // Actions for keys

    function keyNavigation(e) {
        if (e.keyCode === 37) {
            prevPicture();
        }
        else if (e.keyCode === 39) {
            nextPicture();
        }
    }


    // Listeners

    prevBtn.addEventListener('click', prevPicture);
    nextBtn.addEventListener('click', nextPicture);
    dots.forEach(element => element.addEventListener('click', selectPicture));
    document.addEventListener('keydown', keyNavigation);

});