document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll("nav ul li a");
    const navbarHeight = document.querySelector("nav").offsetHeight; // Get navbar height

    navLinks.forEach(link => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            const targetId = link.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                // Calculate the target position with offset
                const targetPosition = targetElement.offsetTop - navbarHeight;

                // Smooth scroll to the position
                window.scrollTo({
                    top: targetPosition,
                    behavior: "smooth",
                });
            }
        });
    });
});

