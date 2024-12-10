document.addEventListener('DOMContentLoaded', function () {
    var swiper2 = new Swiper('.images', {
        direction: 'vertical',
        effect: 'cards',
        grabCursor: true,
        on: {
            init: function () {
                applySlideOffsets();
            },
            slideChange: function () {
                applySlideOffsets();
            },
        },
    });

    function applySlideOffsets() {
        const slides = document.querySelectorAll('.images-slides');
        const perSlideOffset = 1; 

        slides.forEach((slide, index) => {
            slide.style.marginTop = `${index * perSlideOffset}px`;
        });
    }
});