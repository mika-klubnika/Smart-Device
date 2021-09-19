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
