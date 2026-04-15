const sections = document.querySelectorAll(".section, .team");

window.addEventListener("scroll", () => {
    const trigger = window.innerHeight * 0.85;

    sections.forEach(sec => {
        const top = sec.getBoundingClientRect().top;

        if (top < trigger) {
            sec.style.opacity = 1;
            sec.style.transform = "translateY(0)";
        }
    });
});

// stato iniziale
sections.forEach(sec => {
    sec.style.opacity = 0;
    sec.style.transform = "translateY(50px)";
    sec.style.transition = "0.6s ease";
});