const addItems = document.querySelector('.add-items');
const inputAdd = addItems.querySelector('input[type="text"]');

const itemsList = document.querySelector('.plates');
const items = !localStorage.getItem('items') ? [] : JSON.parse(localStorage.getItem('items'));

if (!localStorage.getItem('items')) {
  localStorage.setItem('items', JSON.stringify(items));
}

function updateList() {
  var checkList = items.map(function createLi(itm, idx) {
    return `
      <li>
        <input type="checkbox" data-index="${idx}" id="item${idx}" ${itm.done ? 'checked' : ''}>
        <label for="item${idx}">${itm.text}</label>
      </li>
    `;
  });

  itemsList.innerHTML = checkList.join('');
}

function updateOnSbumit(event) {
  event.preventDefault();

  items.push({
    text: inputAdd.value,
    done: false
  });
  
  updateList();
  
  localStorage.setItem('items', JSON.stringify(items));
  event.target.reset();
}

function updateOnCheck(event) {
  if (event.target.matches('input')) {
    var input = event.target;
    var idx = Number(input.dataset.index);

    items[idx].done = input.checked;
    localStorage.setItem('items', JSON.stringify(items));
  }
}

addItems.addEventListener('submit', updateOnSbumit);
itemsList.addEventListener('click', updateOnCheck);

updateList();
