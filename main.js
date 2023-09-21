const input = document.querySelectorAll('input');
const btn = document.querySelector('.btn');
const error = document.querySelectorAll('.error-text');
const errorText = [
  'First Name cannot be empty',
  'Last Name cannot be empty',
  'Looks like this is not an email',
  'Password cannot be empty',
];
btn.addEventListener('click', () => {
  let validMailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  for (let i = 0; i < input.length; i++) {
    for (let i = 0; i < error.length; i++) {
      if (input[i].value === '') {
        input[i].classList.add('error');
        error[i].classList.remove('not-shown');
        error[i].innerHTML = errorText[i];
      } else {
        input[i].classList.remove('error');
        error[i].innerHTML = '';
      }
      if (i == 2 && !input[2].value.match(validMailFormat)) {
        input[i].classList.add('error');
        error[i].innerHTML = errorText[i];
      }
    }
  }
});
