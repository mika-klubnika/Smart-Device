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
