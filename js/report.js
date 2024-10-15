const steps = Array.from(document.querySelectorAll(".form-step"));
const nextButtons = document.querySelectorAll('button[id^="next"]');
const prevButtons = document.querySelectorAll('button[id^="prev"]');
let currentStep = 0;

nextButtons.forEach((button) => {
  button.addEventListener("click", () => {
    steps[currentStep].classList.remove("active");
    currentStep++;
    steps[currentStep].classList.add("active");
  });
});

prevButtons.forEach((button) => {
  button.addEventListener("click", () => {
    steps[currentStep].classList.remove("active");
    currentStep--;
    steps[currentStep].classList.add("active");
  });
});

document
  .getElementById("victim-report-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Your report has been submitted successfully.");
    // You can redirect the user to a confirmation page or dashboard
    window.location.href = "Report-Confirmation.html";
  });
