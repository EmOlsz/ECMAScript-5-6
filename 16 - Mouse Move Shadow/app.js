const hero = document.querySelector('.hero');
const element = hero.querySelector('h1');
const range = 500;

function moveShadow(e) {
    const {offsetWidth: width, offsetHeight: height} = hero;
    let {offsetX: x, offsetY: y} = e;

    if (this !== e.target) {
        x += e.target.offsetLeft;
        y += e.target.offsetTop;
    }


    const rangeX = Math.round((x / width * range) - (range / 2));
    const rangeY = Math.round((y / height * range) - (range / 2));

    console.log(rangeX, rangeY);

    element.style.textShadow = `
        ${rangeX}px ${rangeY}px 0 hsla(${rangeX * -1}, 25%, 75%, 1),
        ${rangeX * -1}px ${rangeY}px 0 hsla(${rangeY}, 50%, 50%, 1),
        ${rangeY}px ${rangeX  * -1}px 0 hsla(${rangeX}, 75%, 25%, 1)
      `;
}

hero.addEventListener('mousemove', moveShadow);