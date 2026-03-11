// Dave King - 2026 March 4

// JavaScript code for form validation
document.getElementById("myForm").addEventListener("submit", function(event) {
  // Prevent form from submitting
  event.preventDefault();

  // Retrieve the input field value
  const inputValue = document.getElementById("inputField").value;

  // Regular expression pattern for alphanumeric input
  const pattern = /^[a-zA-Z0-9]+$/;

  // Check if the input value matches the pattern
  if (pattern.test(inputValue)) {
    // Valid input: display confirmation and submit the form   
    alert("Submission success!");   
    event.target.submit();
  } else {  
    // Invalid input: display error message
    alert("Invalid input: Letters and numbers only please.");
  }

  // Retrieve the input field element
  const inputField = document.getElementById("inputField");
  inputField.value = "";
});
