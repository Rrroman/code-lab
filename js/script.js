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

const listText = ['First:', 'Second:', 'Third:', 'Fourth:', 'Fifth:'];

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

bodyElement.appendChild(createList(5, listText));
