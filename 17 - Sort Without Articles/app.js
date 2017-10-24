const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];
const list = document.querySelector('#bands');

function forgotArticle(band) {
    return band.replace(/^(the |an |a )/i, '');
}

(function sortArray() {
    const newArray = bands.sort((a, b) => forgotArticle(a) > forgotArticle(b) ? 1 : -1 );
    list.innerHTML = newArray.map(item => `<li>${item}</li>`).join('');
})();