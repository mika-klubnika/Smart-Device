'use strict';

const accordion = document.querySelector('.accordion');
const accordionButton = accordion.querySelectorAll('.accordion__button');
const accordionItems = accordion.querySelectorAll('.accordion__item');

if(accordion && accordionButton && accordionItems) {
  accordionItems.forEach(item => {
    item.classList.remove('accordion__item--nojs');
  })

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

const phones = document.querySelectorAll('[type=tel]');

if(phones) {
  phones.forEach(phone => {
    var im = new Inputmask('+7 (999) 999-99-99', {
      oncomplete: function () {
        phone.setCustomValidity('');
      }
    });

    phone.addEventListener('input', () => {
      phone.setCustomValidity('Введите корректный номер телефона');
    });

    im.mask(phone);
  })
}

'use strict';

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

if (modal && modalButton && modalBase && modalClose) {
  try {
    storage.name = localStorage.getItem('name');
    storage.phone = localStorage.getItem('phone');
    storage.message = localStorage.getItem('message');
  } catch (err) {
    isStorageSupport = false;
  }

  modalButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    modal.classList.add('modal--open');
    document.body.classList.add('hidden');

    if (storage.name) {
      userName.value = storage.name;
      phone.value = storage.phone;
      message.value = storage.message;
      message.focus();
    } else {
      userName.focus();
    }
  });

  modalBase.addEventListener('click', (evt) => {
    if(evt.target === modalBase) {
      modal.classList.remove('modal--open')
      document.body.classList.remove('hidden');
    }
  });

  modalClose.addEventListener('click', () => {
    modal.classList.remove('modal--open');
    document.body.classList.remove('hidden');
  });

  form.addEventListener('submit', () => {
    if (isStorageSupport) {
      localStorage.setItem('name', userName.value);
      localStorage.setItem('phone', phone.value);
      localStorage.setItem('message', message.value);
    }
  });

  window.addEventListener('keydown', (evt) => {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (modal.classList.contains('modal--open')) {
        modal.classList.remove('modal--open');
        document.body.classList.remove('hidden');
      }
    }
  });
}
