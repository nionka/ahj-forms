/* eslint-disable no-param-reassign */
/* eslint-disable no-use-before-define */
/* eslint-disable no-shadow */

const btn = document.querySelector('.btn');
const title = 'I am title popover';
const text = 'I have some very important popover`s message';

btn.addEventListener('click', () => {
  const popover = document.querySelector('.container .popover');
  if (popover) {
    popover.remove();
  } else {
    createPopover(title, text);
  }
});

function createPopover(title, text) {
  const div = document.createElement('div');
  div.classList.add('popover');
  const h = document.createElement('h1');
  h.textContent = title;
  const divText = document.createElement('div');
  divText.textContent = text;
  div.append(h);
  div.append(divText);
  document.querySelector('.container').append(div);

  positionPopover(div);
}

function positionPopover(element) {
  const coords = btn.getBoundingClientRect();
  element.style.left = `${coords.left + coords.width / 2 - element.offsetWidth / 2}px`;
  element.style.top = `${coords.top - coords.height - element.offsetHeight / 2}px`;
}
