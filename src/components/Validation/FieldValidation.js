const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

const input = document.querySelector('.email-field');

export function onInput() {
  if (isEmailValid(input.value)) {
    input.style.borderColor = 'rgba(250,250,250,0.0';
  } else {
    input.style.borderColor = 'red';
  }
}

input.addEventListener('input', onInput);

function isEmailValid(value) {
    return EMAIL_REGEXP.test(value)
}