const array = [];
const wordToMatch = 'javascript';

document.addEventListener('keyup', (e) => {
    array.push(e.key);
array.splice(-wordToMatch.length -1, array.length - wordToMatch.length);
let code = array.join('');
if (code.includes(wordToMatch)) cornify_add();
});