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

document.querySelectorAll('.slider-section').forEach(section => {
    
    const track = section.querySelector('.slider-track');
    const images = section.querySelectorAll('.slider-track img');

    const next = section.querySelector('.arrow.right');
    const prev = section.querySelector('.arrow.left');

    let index = 0;

    function updateSlider() {
        track.style.transform = `translateX(-${index * 100}%)`;
    }

    next.addEventListener('click', () => {
        index = (index + 1) % images.length;
        updateSlider();
    });

    prev.addEventListener('click', () => {
        index = (index - 1 + images.length) % images.length;
        updateSlider();
    });

});