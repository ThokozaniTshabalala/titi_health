// sliderSettings.js in utils directory
export const sliderSettings = {
  slidesPerView: 'auto', // Show 3 slides at once
  spaceBetween: 10, // Consistent spacing between slides
  loop: false,       // Infinite scrolling
  grabCursor: true, // Show grab cursor on hover
  centeredSlides: false,
  freeMode: false,
  breakpoints: {
    // Responsive breakpoints
    320: {
      slidesPerView: 1,
      spaceBetween: 10
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 15
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 15
    }
  }
};