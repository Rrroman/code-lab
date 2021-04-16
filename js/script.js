// First version

// const bodyElement = document.querySelector('body');

// const ul = document.createElement('ul');

// function createList(num, parentElement, text) {
//   const fragment = document.createDocumentFragment();
//   for (let i = 0; i < num; i += 1) {
//     const li = document.createElement('li');
//     li.textContent = `${text} ${i}`;

//     fragment.appendChild(li);
//   }

//   parentElement.appendChild(fragment);

//   return parentElement;
// }

// bodyElement.appendChild(createList(5, ul, 'Element number:'));

//==============================================================

// second

// const bodyElement = document.querySelector('body');

// function createList(num, parentElement, text) {
//   const ul = document.createElement('ul');

//   const fragment = document.createDocumentFragment();
//   for (let i = 0; i < num; i += 1) {
//     const li = document.createElement('li');
//     li.textContent = `${text} ${i}`;

//     fragment.appendChild(li);
//   }

//   ul.appendChild(fragment);

//   parentElement.appendChild(ul);
// }

// createList(5, bodyElement, 'Element number:');

//==============================================================

// Third version

const mainListText = ['First:', 'Second:', 'Third:', 'Fourth:', 'Fifth:'];
const secondaryListText = ['but', 'text', 'is', 'not', 'unique'];

const bodyElement = document.querySelector('body');

function createList(num, text) {
  const ul = document.createElement('ul');

  const fragment = document.createDocumentFragment();
  for (let i = 0; i < num; i += 1) {
    const li = document.createElement('li');
    li.textContent = `${text[i]} ${i + 1}`;

    fragment.appendChild(li);
  }

  ul.appendChild(fragment);

  return ul;
}

const mainList = createList(5, mainListText);
const secondaryList = createList(5, secondaryListText);

bodyElement.insertAdjacentElement('afterbegin', mainList);
bodyElement.insertAdjacentElement('beforeend', secondaryList);

const omg = document.createElement('h2');
omg.textContent = 'I am out of control';
bodyElement.insertAdjacentElement('beforebegin', omg);

const lol = document.createElement('h1');
lol.textContent = 'Even crazier';
const html = omg.parentElement;
html.insertAdjacentElement('afterbegin', lol);
