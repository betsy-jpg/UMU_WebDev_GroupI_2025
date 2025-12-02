
//  Order Button Popup
document.querySelectorAll(".btn-outline-info").forEach(btn => {
    btn.addEventListener("click", (e) => {
        e.preventDefault();

        let item = btn.closest(".card").querySelector("h5").innerText;

        alert(`☕ Thank you for choosing Cafena Coffee!\nYou ordered: ${item}\nYour drink is being prepared!`);
    });
});
  // Function to scroll the window to the top (position 0)
function scrollToNavbar() {
  // window.scrollTo() moves the viewport.
  // We use an object for smooth scrolling effect.
  window.scrollTo({
    top: 0,           // Scroll to the very top of the page
    behavior: 'smooth' // Makes the scroll transition smooth instead of instant
  });
}

//inserted icons
