const form = document.getElementById('message-form')
const input = document.getElementById('input')

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const message = input.value;

  if(message.trim() === ''){
      const errorMsg = document.querySelector('.errorMsg')
      errorMsg.style.display = "block";
      return;
  }
  const errorMsg = document.querySelector('.errorMsg');
  errorMsg.style.display = 'none';

  const result = document.querySelector('.result')
  result.textContent = message;
  result.style.display = "block";


  input.value = '';
})