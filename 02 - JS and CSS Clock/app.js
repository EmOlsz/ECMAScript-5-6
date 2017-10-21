const secondHand = document.querySelector('.second-hand');
const minutesHand = document.querySelector('.min-hand');
const hoursHand = document.querySelector('.hour-hand');
const numbers = document.querySelector('.time');

document.addEventListener('DOMContentLoaded', function() {
    function setTime() {
        const time = new Date();

        const seconds = time.getSeconds();
        const secondsDegree = ((seconds / 60) * 360) + 90;
        secondHand.style.transform = `rotate(${secondsDegree}deg)`;
        numbers.innerText = seconds;

        const minutes = time.getMinutes();
        const minutesDegree = ((minutes / 60) * 360) + 90;
        minutesHand.style.transform = `rotate(${minutesDegree}deg)`;

        const hours = time.getHours();
        const hoursDegree = ((hours / 12) * 360) + 90;
        hoursHand.style.transform = `rotate(${hoursDegree}deg)`;
    }

    setInterval(setTime, 1000);
});