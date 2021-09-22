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

if (modal && modalButton && modalBase && modalClose && form && userName && phone && message) {
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
