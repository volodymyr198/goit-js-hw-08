import throttle from 'lodash.throttle';

const form = document.querySelector('form');
const input = document.querySelector('input');
const textarea = document.querySelector('textarea');

const STORAGE_KEYS = 'feedback-form-state';
let formData = JSON.parse(localStorage.getItem(STORAGE_KEYS)) || {};

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onFormData, 500));

populateData();

function onFormSubmit(event) {
  event.preventDefault();

  console.log(JSON.parse(localStorage.getItem(STORAGE_KEYS)));

  event.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEYS);
  formData = {};
}

function onFormData(event) {
  formData[event.target.name] = event.target.value;

  localStorage.setItem(STORAGE_KEYS, JSON.stringify(formData));
}

function populateData() {
  const savedData = JSON.parse(localStorage.getItem(STORAGE_KEYS));

  if (savedData) {
    input.value = savedData.email || '';
    textarea.value = savedData.message || '';
  }
}
