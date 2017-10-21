const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const items = JSON.parse(localStorage.getItem('items')) || [];

function addToList(elements = [], elementsList) {
    elementsList.innerHTML = elements.map((element, index) => {
            return`
          <li>
            <input id="element${index}" type="checkbox" data-index=${index} ${element.checked ? "checked" : ''} />
            <label for="element${index}">${element.name}</label>
          </li>`;
}).join('');
}

function addItem(e) {
    e.preventDefault();
    const name = this.querySelector('[name=item]').value;
    const item = {
        name,
        checked: false
    };
    items.push(item);
    addToList(items, itemsList);
    localStorage.setItem('items', JSON.stringify(items));
    this.reset();
}

function toggleCheck(e) {
    if (!e.target.matches('input')) return;
    const input = e.target;
    const index = input.dataset.index;
    items[index].checked = !items[index].checked;
    localStorage.setItem('items', JSON.stringify(items));
    addToList(items, itemsList);
}

addItems.addEventListener('submit', addItem);
itemsList.addEventListener('click', toggleCheck);

addToList(items, itemsList);