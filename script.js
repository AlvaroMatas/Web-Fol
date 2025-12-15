document.getElementById("info-btn").addEventListener("click", () => {
    window.scrollTo({
        top: document.querySelector(".servicios").offsetTop,
        behavior: "smooth"
    });
});

document.getElementById("info-btn").addEventListener("click", () => {
    window.scrollTo({
        top: document.querySelector(".section").offsetTop,
        behavior: "smooth"
    });
});

function revealOnScroll() {
    const reveals = document.querySelectorAll(".reveal");

    reveals.forEach(el => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {
            el.classList.add("active");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();
