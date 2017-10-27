const anchors = document.querySelectorAll('a');
const span = document.createElement('SPAN');
span.classList.add('highlight');
document.body.append(span);

function highlight(e) {
    const data = this.getBoundingClientRect();
    span.style.width = `${data.width}px`;
    span.style.height = `${data.height}px`;
    span.style.top = `${data.top + window.scrollY}px`;
    span.style.left = `${data.left + window.scrollX}px`;
}

anchors.forEach(anchor => anchor.addEventListener('mouseover', highlight));