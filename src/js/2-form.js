
const formData = { email: '', message: '' };
const formElements = document.querySelector('.feedback-form');
const localStorageKey = 'feedback-form-state';

formElements.addEventListener('input', ({ target }) => {
  const { name, value } = target;
  
  if (name === 'email' || name === 'message') {
    formData[name] = value.trim();
    localStorage.setItem(localStorageKey, JSON.stringify(formData));
  }
});

function loadFormData() {
  const savedData = JSON.parse(localStorage.getItem(localStorageKey));
  if (savedData) {
    const { email, message } = savedData;

    if (email) {
      formElements.elements.email.value = email;
      formData.email = email;
    }
    if (message) {
      formElements.elements.message.value = message;
      formData.message = message;
    }
  }
}
window.addEventListener('DOMContentLoaded', loadFormData);

formElements.addEventListener('submit', e => {
  e.preventDefault();
  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
  }

  console.log(formData);
  
  formElements.reset();
  localStorage.removeItem(localStorageKey);
});
