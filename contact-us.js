
        function sendMessage() {
            alert("Your message has been sent!");
        }

        const backToTop = document.getElementById("backToTop");

        // Show button when scrolling down
        window.addEventListener("scroll", () => {
            if (window.scrollY > 400) {
                backToTop.classList.add("show");
            } else {
                backToTop.classList.remove("show");
            }
        });

        // Scroll back to top smoothly
        backToTop.addEventListener("click", () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });

        


        