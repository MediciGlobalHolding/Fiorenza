document.addEventListener("DOMContentLoaded", function() {
    console.log("Fiorenza website loaded successfully!");

    // Example: Smooth scrolling effect for navigation links
    document.querySelectorAll("nav ul li a").forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 50,
                    behavior: "smooth"
                });
            }
        });
    });

    // Example: Button hover effect
    document.querySelectorAll(".buttons a").forEach(button => {
        button.addEventListener("mouseenter", () => {
            button.style.backgroundColor = "#ffcc00"; // Highlight effect
        });
        button.addEventListener("mouseleave", () => {
            button.style.backgroundColor = "gold";
        });
    });
});
