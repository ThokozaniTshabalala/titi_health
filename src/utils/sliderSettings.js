// sliderSettings.js in utils directory
export const sliderSettings = {
  slidesPerView: 'auto', // Changed to auto to respect card max-width
  spaceBetween: 30,
  loop: false,
  grabCursor: true,
  centeredSlides: false,
  freeMode: false,
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 25
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 25
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 30
    },
    1280: {
      slidesPerView: 4,
      spaceBetween: 35
    }
  }
};