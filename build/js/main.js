'use strict';

const accordion = document.querySelector('.accordion');
const accordionButton = accordion.querySelectorAll('.accordion__button');
const accordionItems = accordion.querySelectorAll('.accordion__item');

if(accordion && accordionButton && accordionItems) {
  function toggleAccordion () {
    const thisItem = this.parentNode;

    accordionItems.forEach(item => {
      if (thisItem == item) {
        thisItem.classList.toggle('accordion__item--active');
        return;
      }
      item.classList.remove('accordion__item--active');
    });
  }

  accordionButton.forEach(block => block.addEventListener('click', toggleAccordion));
}

'use strict';

const inputPhones = document.querySelectorAll('[type=tel]');

if(inputPhones) {
  for (let i = 0; i < inputPhones.length; i++) {
    new IMask(inputPhones[i], {
      mask: '+7(000)000-00-00',
    });
  }
}

'use strict';

(() => {
  const modal = document.querySelector('.modal');
  const modalButton = document.querySelector('.modal-button');
  const modalBase = modal.querySelector('.modal__base');
  const modalClose = modal.querySelector('.modal__close');
  const form = modal.querySelector('form');
  const userName = modal.querySelector('#user-name');
  const phone = modal.querySelector('[type=tel]');
  const message = modal.querySelector('#message');
  const isStorageSupport = true;
  const storage = {};

  try {
    storage.name = localStorage.getItem('name');
    storage.phone = localStorage.getItem('phone');
    storage.message = localStorage.getItem('message');
  } catch (err) {
    isStorageSupport = false;
  }

  modalButton.addEventListener('click', () =>{
    modal.classList.add('modal--open');

    if (storage.name) {
      userName.value = storage.name;
      phone.value = storage.phone;
      message.value = storage.message;
      message.focus();
    } else {
      userName.focus();
    }
  });

  modalBase.addEventListener('click', evt => {
    evt.target === modalBase && modal.classList.remove('modal--open');
  });

  modalClose.addEventListener('click', () => {
    modal.classList.remove('modal--open');
  });

  form.addEventListener('submit', () => {
    if (isStorageSupport) {
      localStorage.setItem('name', userName.value);
      localStorage.setItem('phone', phone.value);
      localStorage.setItem('message', message.value);
    }
  });

  window.addEventListener('keydown', evt => {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (modal.classList.contains('modal--open')) {
        modal.classList.toggle('modal--open');
      }
    }
  });
})();
