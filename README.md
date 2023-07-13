# Message-displaying
This code creates a webpage with a message input form and a result section to 
display the entered message. An event listener is added to the 'form' variable to 
listen for the "submit" event. The event listener function is executed when the form is submitted.
the 'e.preventDefault()' method is called to prevent the default form submission behavior,
which would cause a page refresh. The entered message is obtained from the value 
of the 'input' variable. If the message is empty or contains only whitespace characters 
after trimming, an error message is displayed by modifying the CSS display property of 
the element with the class "errorMsg" to "block". The 'return' statement is used to stop 
further execution if the input is empty, preventing the rest of the code from running.
If the input is not empty, the error message is hidden by setting the CSS 'display'
property of the element with the class "errorMsg" to "none". The entered message is displayed
in the result section by modifying the 'textContent' property of the element with the 
class "result" to the value of the 'message' variable. The CSS 'display' property of the 
element with the class "result" is set to "block" to make the result section visible.
The input field is cleared by setting the value of the 'input' variable to an empty string.

This code ensures that when the form is submitted, the entered message is displayed in 
the result section, and if the input is empty, an error message is shown.

