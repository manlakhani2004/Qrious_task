    let menuToggle = document.querySelector(".toggle-menu");
        let navbar = document.getElementById("navbar");

        menuToggle.addEventListener("click", () => {
            navbar.classList.toggle("active");

            if (navbar.classList.contains("active")) {
                menuToggle.textContent = "✖";  // close icon
            } else {
                menuToggle.textContent = "☰";  // hamburger icon
            }
        });