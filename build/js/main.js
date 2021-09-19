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

const modal = document.querySelector('.modal');
const modalButton = document.querySelector('.modal-button');
const modalClose = modal.querySelector('.modal__close');
const modalBase = document.querySelector('.modal__base');


modalButton.addEventListener('click', function () {
  modal.classList.add('modal--open');
});

modalBase.addEventListener('click', evt => {
  evt.target === modalBase && modal.classList.remove('modal--open');
});

modalClose.addEventListener('click', function () {
  modal.classList.remove('modal--open');
});

window.addEventListener('keydown', evt => {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (modal.classList.contains('modal--open')) {
      modal.classList.toggle('modal--open');
    }
  }
});
