const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listEl = document.querySelector('ul');

let arrListItemEl = [];
for (const ingredient of ingredients) {
  const listItemEl = document.createElement('li');
  listItemEl.classList.add('item');
  listItemEl.textContent = ingredient;
  arrListItemEl.push(listItemEl);
}
document.body.append(...arrListItemEl)
