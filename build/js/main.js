'use strict';

const accordion = document.querySelectorAll('.accordion');
// const accordionBlock = document.querySelectorAll('.accordion__block');


accordion.forEach((elem) => {
  elem.addEventListener('click', function () {

    const accordionBlockActive = document.querySelectorAll('.accordion__block--active');

    accordionBlockActive.forEach((elem) => {
      elem.classList.remove('accordion__block--active');
    })

    const parentElem = this.parentNode;

    const accordionBlock = parentElem.querySelector('.accordion__block');

    if (accordionBlock.classList.contains('accordion__block--active')) {
      accordionBlock.classList.toggle('accordion__block--active');
      accordionToggle.classList.toggle('accordion__toggle--close');
    }
    else {
      accordionBlock.classList.add('accordion__block--active');
    }
  })
})

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
