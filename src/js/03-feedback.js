import throttle from 'lodash.throttle';

const feedbackForm = document.querySelector('.feedback-form');
const fbEmail = document.querySelector('[name="email"]');
const fbMessage = document.querySelector('[name="message"]');

const storageKey = 'feedback-form-state';

let formData = {};

feedbackForm.addEventListener('input', throttle(onInput, 500));
feedbackForm.addEventListener('submit', onSubmitForm);

function onInput(e) {
  formData[e.target.name] = e.target.value;
  localStorage.setItem(storageKey, JSON.stringify(formData));
}

function onSubmitForm(e) {
  e.preventDefault();
  feedbackForm.reset();
  console.log(JSON.parse(localStorage.getItem(storageKey)));
  localStorage.removeItem(storageKey);
}

preload();

function preload() {
  const preData = JSON.parse(localStorage.getItem(storageKey));
  if (preData) {
    fbEmail.value = preData.email;
    fbMessage.value = preData.message;
  }
}
