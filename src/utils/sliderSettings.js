// sliderSettings.js in utils directory
export const sliderSettings = {
  slidesPerView: 'auto', // Changed to auto to respect card max-width
  spaceBetween: 25,
  loop: false,
  grabCursor: true,
  centeredSlides: false,
  freeMode: false,
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 15
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 20
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 25
    },
    1280: {
      slidesPerView: 4,
      spaceBetween: 30
    }
  }
};