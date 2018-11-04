let slides = document.querySelectorAll( '.slide' );
let currentSlide = 0;
console.log(slides[currentSlide]);
let slideInterval = setInterval(nextSlide,8000);

function nextSlide() {
    slides[currentSlide].className = 'slide';
    currentSlide = (currentSlide+1)%slides.length;
    slides[currentSlide].className = 'slide showing';
}
