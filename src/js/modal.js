import './render-functions/render-modal';

const modalEl = document.querySelector('section.modal');
console.log(modalEl);

const closeBtn = modalEl.querySelector('.modal-btn');
console.log(closeBtn);

closeBtn.addEventListener('click', modalCloseBtn);

function modalCloseBtn(e) { 
  modalEl.classList.toggle('is-open');
};
