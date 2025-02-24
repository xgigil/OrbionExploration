document.addEventListener("DOMContentLoaded", () => { 
    const sections = document.querySelectorAll(".fade-section");
    const header = document.querySelector("header");
    let lastScrollY = window.scrollY;

    function revealOnScroll() {
        sections.forEach((section) => {
            const sectionTop = section.getBoundingClientRect().top;
            const sectionBottom = section.getBoundingClientRect().bottom;
            if (sectionTop < window.innerHeight * 0.8) {
                section.classList.add("visible");
            }
            if (sectionBottom < 0 || sectionTop > window.innerHeight) {
                section.classList.remove("visible");
            }
        });
    }

    function handleHeaderScroll() {
        if (window.scrollY > lastScrollY) {
            header.classList.add("hidden");
        } else {
            header.classList.remove("hidden");
        }
        lastScrollY = window.scrollY;
    }

    window.addEventListener("scroll", () => {
        revealOnScroll();
        handleHeaderScroll();
    });
});

document.getElementById("application-form").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Application Submitted Successfully!");
    setTimeout(() => {
        window.location.href = "index.html";
    }, 1000);
});


