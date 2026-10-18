/* Update the footer year automatically */
const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}

/* Smoothly navigate to sections */
document.querySelectorAll('nav a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (event) => {
        const targetId = link.getAttribute("href");
        const target = document.querySelector(targetId);

        if (target) {
            event.preventDefault();
            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    });
});

/* Give feedback when project links are clicked */
document.querySelectorAll(".project-links a").forEach((link) => {
    link.addEventListener("click", () => {
        console.log("Opening project resource:", link.href);
    });
});

console.log("Japheth's portfolio is ready!");