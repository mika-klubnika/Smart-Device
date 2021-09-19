'use strict';

const inputPhones = document.querySelectorAll('#phone');

if(inputPhones) {
  for (let i = 0; i < inputPhones.length; i++) {
    new IMask(inputPhones[i], {
      mask: '+7(000)000-00-00',
    });
  }
}
