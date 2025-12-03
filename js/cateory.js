

const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});


const posts = document.querySelectorAll('.post');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, {
  threshold: 0.2
});

posts.forEach(post => observer.observe(post));

const newsletterForm = document.querySelector('.footer-newsletter form');
const emailInput = newsletterForm.querySelector('input');

newsletterForm.addEventListener('submit', (e) => {
  e.preventDefault(); 

  const email = emailInput.value.trim();

  if (email === "") {
    alert("Please enter your email.");
    return;
  }

  const emailPattern = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;

  if (!emailPattern.test(email)) {
    alert("Please enter a valid email address.");
  } else {
    alert("Thank you for subscribing! ☕");
    emailInput.value = "";
  }
});


  

