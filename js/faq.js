// scripts.js
function toggleAnswer(button) {
  const answer = button.nextElementSibling;
  const isVisible = answer.style.display === "block";

  // Close all other answers if necessary (optional)
  document
    .querySelectorAll(".faq-answer")
    .forEach((ans) => (ans.style.display = "none"));

  // Toggle the clicked answer
  answer.style.display = isVisible ? "none" : "block";
}
