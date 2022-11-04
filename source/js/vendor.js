import Swiper, {Pagination, Autoplay} from 'swiper';
import sal from 'sal.js';
sal();

const logoCarousel = new Swiper('#logoCarousel', {
  loop: true,
  slidesPerView: 4,
  spaceBetween: 22,

  breakpoints: {
    768: {
      spaceBetween: 38,
    },
    992: {
      slidesPerView: 6,
      spaceBetween: 60,
    },
  },
});


const mainSlider = new Swiper('#mainSlider', {
  loop: true,
  modules: [Pagination, Autoplay],
  autoplay: {
    delay: 2500,
    pauseOnMouseEnter: true,
    // disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    dynamicBullets: true,
    clickable: true,
  },

});
