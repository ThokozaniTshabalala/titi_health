// sliderSettings.js in utils directory
export const sliderSettings = {
  slidesPerView: 4, // Show 3 slides at once
  spaceBetween: 30, // Consistent spacing between slides
  loop: false,       // Infinite scrolling
  grabCursor: true, // Show grab cursor on hover
  centeredSlides: false,
  freeMode: false,
  breakpoints: {
    // Responsive breakpoints
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 25
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 30
    }
  }
};