const form = document.getElementsByClassName('showcase-form-email');
const showcaseInput = document.getElementById('showcase-input');
const spanError = document.getElementById('showcase-input-error');

function styleError() {
  showcaseInput.classList.add('invalid');
  spanError.textContent = spanError.dataset.msg;
}

function removeError() {
  showcaseInput.classList.remove('invalid');
  spanError.textContent = '';
}

form[0].addEventListener('submit', e => {
  e.preventDefault();
  if (!showcaseInput.validity.valid) {
    styleError();
  } else {
    removeError();
  }
});

form[0].addEventListener('input', e => {
  if (showcaseInput.value === '' && showcaseInput.validity.valid) {
    removeError();
  }
});
