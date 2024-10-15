// testimonials section
const cards = document.querySelectorAll(".testimonial-card");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
let currentCard = 0;

// Show the initial testimonial card
cards[currentCard].classList.add("active");

// Function to show the next card
function showNextCard() {
  cards[currentCard].classList.remove("active");
  currentCard = (currentCard + 1) % cards.length;
  cards[currentCard].classList.add("active");
}

// Function to show the previous card
function showPrevCard() {
  cards[currentCard].classList.remove("active");
  currentCard = (currentCard - 1 + cards.length) % cards.length;
  cards[currentCard].classList.add("active");
}

// Event listeners for buttons
nextBtn.addEventListener("click", showNextCard);
prevBtn.addEventListener("click", showPrevCard);

// FAQ
const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {
  const question = item.querySelector(".faq-question");

  question.addEventListener("click", () => {
    // Toggle the active state for the clicked item
    item.classList.toggle("active");

    // Get the answer div inside the clicked item
    const answer = item.querySelector(".faq-answer");

    // Toggle max height to show/hide the answer
    if (item.classList.contains("active")) {
      answer.style.maxHeight = answer.scrollHeight + "px";
    } else {
      answer.style.maxHeight = "0";
    }
  });
});

// footer
// Scroll to top functionality
const scrollTopBtn = document.querySelector(".scroll-top-btn");

// When the button is clicked, scroll to the top smoothly
scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
