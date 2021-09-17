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
