  //Get the form and input element
const form = document.getElementById('message-form')
const input = document.getElementById('input')

  // Add event listener for form submission
form.addEventListener('submit', function (e) {
  e.preventDefault();

  const message = input.value;
  // Display an error message if the input is empty
  if(message.trim() === ''){
      const errorMsg = document.querySelector('.errorMsg')
      errorMsg.style.display = "block";
      return; // Stop further execution
  }
          
  // Hide the error message
  const errorMsg = document.querySelector('.errorMsg');
  errorMsg.style.display = 'none';

  // Display the entered message in the result section
  const result = document.querySelector('.result')
  result.textContent = message;
  result.style.display = "block";

  // Clear the input field
  input.value = '';
})