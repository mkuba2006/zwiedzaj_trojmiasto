let swiper1;
function initializeSwiper() {
    const bodyWidth = document.body.clientWidth;

    if (bodyWidth > 850) {
        swiper1 = new Swiper(".mySwiper", {
            parallax: true,
            slideToClickedSlide: true,
            speed: 700,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            mousewheel: true,
            on: {
                slideChange: function () {
                    updateActiveButton(swiper1.activeIndex);
                },
            },
        });
    } else {
        swiper1 = new Swiper(".mySwiper", {
            direction: "vertical",
            parallax: false,
            slideToClickedSlide: false,
            speed: 10,
            freeMode: true,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            mousewheel: true,
            breakpoints: {
                850: {
                    autoHeight: true,
                    direction: "horizontal",
                    slidesPerView: "auto",
                    spaceBetween: 100,
                    freeMode: true,
                },
            },
            on: {
                slideChange: function () {
                    updateActiveButton(swiper1.activeIndex);
                },
            },
        });
    }
}

function updateActiveButton(activeIndex) {
    const buttons = document.querySelectorAll("ul .li_aside");

    buttons.forEach((button, index) => {
        const col = button.querySelector(".column");
        const isActive = index === activeIndex - 1;

        button.querySelector("a button").classList.toggle("active2", isActive);
        button.classList.toggle("active2", isActive);
        col.classList.toggle("active", isActive);
    });
}

function setupHoverEffects() {
    document.querySelectorAll("#aside_ul a button").forEach(button => {
        button.addEventListener("mouseenter", () => {
            const column = button.closest(".li_aside").querySelector(".column");
            button.classList.add("hovered2");
            column.classList.add("hovered");
        });

        button.addEventListener("mouseleave", () => {
            const column = button.closest(".li_aside").querySelector(".column");
            button.classList.remove("hovered2");
            column.classList.remove("hovered");
        });
    });
}

function setupNavigation() {
    document.querySelectorAll("aside a").forEach((link, index) => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            swiper1.slideTo(index + 1);
        });
    });
}
function setupNavigation2() {
    document.querySelectorAll("#nav_ul a").forEach((link) => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const slideIndex = parseInt(link.getAttribute("data-swiper-slide"));
            swiper1.slideTo(slideIndex);
        });
    });
}
function setupButtonClickHandlers() {
    const buttons = document.querySelectorAll("ul a button");

    buttons.forEach(button => {
        button.classList.remove("active");

        button.addEventListener("click", function () {
            buttons.forEach(btn => btn.classList.remove("active"));
            this.classList.add("active");
        });
    });
}

document.addEventListener("DOMContentLoaded", () => {
    initializeSwiper();
    setupHoverEffects();
    setupNavigation();
    setupNavigation2()
    setupButtonClickHandlers();
});


