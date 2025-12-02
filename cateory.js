// ===============================
// MOBILE NAVIGATION TOGGLE
// ===============================

const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});


// ===============================
// NEWSLETTER EMAIL VALIDATION
// ===============================

const newsletterForm = document.querySelector('.footer-newsletter form');
const emailInput = newsletterForm.querySelector('input');

newsletterForm.addEventListener('submit', (e) => {
  e.preventDefault(); // prevent actual submission

  const email = emailInput.value.trim();

  if (email === "") {
    alert("Please enter your email.");
    return;
  }

  // Simple email validation regex
  const emailPattern = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;

  if (!emailPattern.test(email)) {
    alert("Please enter a valid email address.");
  } else {
    alert("Thank you for subscribing! ☕");
    emailInput.value = ""; // clear input
  }
});


// ===============================
// SMOOTH SCROLL (OPTIONAL)
// ===============================

document.querySelectorAll('a[href^=\"#\"]').forEach(link => {
  link.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
