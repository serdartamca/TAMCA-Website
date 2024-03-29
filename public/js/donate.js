<<<<<<< HEAD
=======
const paypalButton = document.getElementById('paypal-donate-button-container-unauth');
const requiredFieldIds = ['signUpfirstName', 'signUplastName', 'signUpEmail'];

// Function to check if all of the required fields are empty.
function areAllRequiredFieldsFilled() {
  for (const fieldId of requiredFieldIds) {
    const field = document.getElementById(fieldId);

    if (field.value === '') {
      return false;
    }
  }

  return true;
}

// Function to update the button's CSS based on field validation
function updateButtonStyle() {
  if (areAllRequiredFieldsFilled()) {
    paypalButton.classList.remove('disabled'); // Remove the "disabled" class
  } else {
    paypalButton.classList.add('disabled'); // Add the "disabled" class
  }
}

// Initial update of the button's style
updateButtonStyle();

// Update the button's style whenever a required field changes
for (const fieldId of requiredFieldIds) {
  const field = document.getElementById(fieldId);

  field.addEventListener('input', function() {
    updateButtonStyle();
  });
}
>>>>>>> e86871af171eec83c687abfd208ceb541481a78c
