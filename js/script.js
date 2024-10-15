document
  .getElementById("signup-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    // Basic form validation (optional)
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    if (name && email && password === confirmPassword) {
      window.location.href = "email-verification.html";
    }
  });

//  Login from
document
  .getElementById("login-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    // Get the form field values
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Simple validation (checks if the fields are filled)
    if (email === email && password === password) {
      // Simulate login success
      alert("Login successful!");
      window.location.href = "dashboard.html"; // Redirect to dashboard after login
    } else {
      alert("Please fill in all fields.");
    }
  });

// forget passworld
document
  .getElementById("forgot-password-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting

    const email = document.getElementById("email").value;

    // Simulate sending the email (this would be handled by a server in a real-world scenario)
    if (email) {
      alert(`Password reset instructions have been sent to ${email}`);
      window.location.href = "login.html"; // Redirect to the login page
    } else {
      alert("Please enter a valid email address");
    }
  });

// Reporting page

// report

// ==========================================================================
const steps = Array.from(document.querySelectorAll(".form-step"));
const nextButtons = document.querySelectorAll('button[id^="next"]');
const prevButtons = document.querySelectorAll('button[id^="prev"]');
let currentStep = 0;

// Show the initial step
steps[currentStep].classList.add("active");

// Handle Next button click
nextButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    // Validate the current step before proceeding to the next step
    if (validateStep(index)) {
      steps[currentStep].classList.remove("active");
      currentStep++;
      if (currentStep < steps.length) {
        steps[currentStep].classList.add("active");
      } else {
        currentStep = steps.length - 1; // Prevent going beyond the last step
      }
    }
  });
});

// Handle Previous button click
prevButtons.forEach((button) => {
  button.addEventListener("click", () => {
    steps[currentStep].classList.remove("active");
    currentStep--;
    if (currentStep >= 0) {
      steps[currentStep].classList.add("active");
    } else {
      currentStep = 0; // Prevent going before the first step
    }
  });
});

// Form submission event listener
document
  .getElementById("victim-report-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    if (validateStep(currentStep)) {
      // Ensure the last step is validated
      alert("Your report has been submitted successfully.");
      window.location.href = "thank-you.html"; // Redirect to the thank you page
    }
  });

// Validate each step
function validateStep(stepIndex) {
  const currentFields = steps[stepIndex].querySelectorAll(
    "input, select, textarea"
  );
  let isValid = true;

  currentFields.forEach((field) => {
    if (!field.checkValidity()) {
      isValid = false;
      field.classList.add("error"); // Optionally add an error class to highlight the field
    } else {
      field.classList.remove("error");
    }
  });

  if (!isValid) {
    alert("Please fill out all required fields.");
  }

  return isValid;
}

// Function to switch between sections
function showNextSection(sectionNumber) {
  const sections = document.querySelectorAll(".form-section");
  sections.forEach((section) => section.classList.remove("active"));

  const nextSection = document.getElementById(`section-${sectionNumber}`);
  nextSection.classList.add("active");
}

// Handle form submission
const form = document.getElementById("victimForm");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  alert("Thank you! Your report has been submitted.");
  // Redirect or reset form as needed
});
