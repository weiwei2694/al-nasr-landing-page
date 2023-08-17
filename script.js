// ==== Navigation Bar ====
const menuToggle = document.querySelector(".navbar__button-menu");
const navigationBar = document.querySelector(".navbar__list");

menuToggle.addEventListener("click", () => {
    navigationBar.classList.toggle("active");
});

// ==== Section ( Splide ) ====
const group1PrevBtn = document.getElementById("group1-prevbtn");
const group2NextBtn = document.getElementById("group2-nextbtn");

const options = {
    type: "loop",
    drag: "free",
    perPage: 2,
    pagination: false,
    arrows: false,
    breakpoints: {
        // Smartphone - Tablet
        992: {
            perPage: 1,
        },
    }
};

document.addEventListener("DOMContentLoaded", () => {
    // Group 1
    const testimonialCardsGroup1 = new Splide(
        "#testimonial__cards-group1",
        options
    ).mount();

    group1PrevBtn.addEventListener("click", () => {
        testimonialCardsGroup1.go("<");
    });

    // Group 2
    const testimonialCardsGroup2 = new Splide("#testimonial__cards-group2", {
        ...options,
        snap: true
    }).mount();

    group2NextBtn.addEventListener("click", () => {
        testimonialCardsGroup2.go(">");
    });
});
