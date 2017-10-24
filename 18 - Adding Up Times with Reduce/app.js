const videosNode = document.querySelectorAll('.videos li');
const videos = Array.from(videosNode);

function getSum(a, b) {
    return a + b;
}

let result = videos
        .map(video => {
        const time = video.dataset.time.split(':').map(parseFloat);
        const min = time[0];
        const sec = time[1];
        return min * 60 + sec})
        .reduce(getSum);

console.log(result);

const hours = Math.floor(result / 3600);
result = result % 3600;
const minutes = Math.floor(result / 60);
result = result % 60;
const seconds = result;

console.log(hours + ":" + minutes + ":" + seconds);