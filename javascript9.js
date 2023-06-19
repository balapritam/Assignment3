<
    function validateForm() {
      // Reset error messages
      clearErrorMessages();

      // Get form inputs
      var nameInput = document.getElementById("name");
      var emailInput = document.getElementById("email");
      var passwordInput = document.getElementById("password");
      var confirmPasswordInput = document.getElementById("confirmPassword");

      // Validate name field
      if (nameInput.value === "") {
        displayErrorMessage(nameInput, "Name field cannot be empty");
        return false;
      } else if (!/^[a-zA-Z]+$/.test(nameInput.value)) {
        displayErrorMessage(nameInput, "Name should contain only letters");
        return false;
      }

      // Validate email field
      if (emailInput.value === "") {
        displayErrorMessage(emailInput, "Email field cannot be empty");
        return false;
      } else if (!/\S+@\S+\.\S+/.test(emailInput.value)) {
        displayErrorMessage(emailInput, "Invalid email address");
        return false;
      }

      // Validate password field
      if (passwordInput.value === "") {
        displayErrorMessage(passwordInput, "Password field cannot be empty");
        return false;
      } else if (passwordInput.value.length < 8) {
        displayErrorMessage(passwordInput, "Password should be at least 8 characters long");
        return false;
      } else if (!/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/.test(passwordInput.value)) {
        displayErrorMessage(passwordInput, "Password should contain at least one uppercase letter, one lowercase letter, and one digit");
        return false;
      }

      // Validate confirm password field
      if (confirmPasswordInput.value === "") {
        displayErrorMessage(confirmPasswordInput, "Confirm Password field cannot be empty");
        return false;
      } else if (confirmPasswordInput.value !== passwordInput.value) {
        displayErrorMessage(confirmPasswordInput, "Passwords do not match");
        return false;
      }

      // Form validation passed
      return true;
    }

    function displayErrorMessage(inputElement, message) {
      var errorMessage = document.createElement("span");
      errorMessage.className = "error-message";
      errorMessage.textContent = message;
      inputElement.parentNode.appendChild(errorMessage);
    }

    function clearErrorMessages() {
      var errorMessages = document.getElementsByClassName("error-message");
      for (var i = 0; i < errorMessages.length; i++) {
        errorMessages[i].remove();
      }
    }
  