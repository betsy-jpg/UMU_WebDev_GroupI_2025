

// Get elements
const openBtn = document.getElementById("open");
const closeBtn = document.getElementById("close");
const modal = document.getElementById("modal");

// Open modal
openBtn.addEventListener("click", () => {
  modal.style.display = "flex";  // show form
});

// Close modal
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";  // hide form
});

// Optional: close modal if user clicks outside the form
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});


//validation

const form = document.querySelector(".modal-form");

form.addEventListener("submit", function (e) {
  e.preventDefault(); // stop form from submitting until validated

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const password2 = document.getElementById("password2").value.trim();

  // Name required
  if (name === "") {
    alert("Please enter your name");
    return;
  }

  // Email must include @
  if (!email.includes("@")) {
    alert("Please enter a valid email address");
    return;
  }

  // Password minimum length
  if (password.length < 6) {
    alert("Password must be at least 6 characters");
    return;
  }

  // Passwords must match
  if (password !== password2) {
    alert("Passwords do not match");
    return;
  }

  // If all good
  alert("Form submitted successfully!");
  form.reset();
  modal.style.display = "none";
});