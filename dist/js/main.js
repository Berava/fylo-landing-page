const showcaseForm = document.getElementsByClassName('showcase-form-email');
const showcaseInput = document.getElementById('showcase-input');
const showcaseError = document.getElementById('showcase-input-error');
const accessFormEmail = document.getElementsByClassName('access-form-email');
const accessInput = document.getElementById('access-input');
const accessError = document.getElementById('access-input-error');

function styleError(item) {
  switch (item) {
    case 'showcase':
      showcaseInput.classList.add('invalid');
      showcaseError.textContent = showcaseError.dataset.msg;
      break;
    case 'access':
      accessInput.classList.add('incvalid');
      accessError.textContent = accessError.dataset.msg;
      break;
  }
}

function removeError(item) {
  switch (item) {
    case 'showcase':
      showcaseInput.classList.remove('invalid');
      showcaseError.textContent = '';
      break;
    case 'access':
      accessInput.classList.remove('invalid');
      accessError.textContent = '';
      break;
  }
}

showcaseForm[0].addEventListener('submit', e => {
  e.preventDefault();
  if (!showcaseInput.validity.valid || showcaseInput.value === '') {
    styleError('showcase');
  } else {
    removeError('showcase');
  }
});

showcaseForm[0].addEventListener('input', e => {
  if (showcaseInput.value === '' && showcaseInput.validity.valid) {
    removeError('showcase');
  }
});

accessFormEmail[0].addEventListener('submit', e => {
  e.preventDefault();
  if (!accessInput.validity.validity || accessInput.value === '') {
    styleError('access');
  } else {
    remove('access');
  }
});

accessFormEmail[0].addEventListener('input', e => {
  if (accessInput.value === '' && accessInput.validity.valid) {
    removeError('access');
  }
});
