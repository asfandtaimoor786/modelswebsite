/************************
EXPLORE SWIPER
************************/
var swiper = new Swiper('.ExploreModelsSwiper', {
  slidesPerView: 2,
  spaceBetween: 10,
  slidesPerGroup: 1,
  loop: true,
  centeredSlides: true,
  breakpoints: {
    480: {
      slidesPerView: 2,
    },
    640: {
      slidesPerView: 3,
    },
    992: {
      slidesPerView: 4,
    },
    1200: {
      slidesPerView: 5,
    },
  },
});

/************************
FOLLOW SWIPER
************************/
var swiper = new Swiper('.FollowSwiper', {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    480: {
      slidesPerView: 1.2,
      spaceBetween: 10,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    992: {
      slidesPerView: 2.5,
      spaceBetween: 20,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
});

/************************
GALLERY SWIPER
************************/

var swiper = new Swiper('.GalleryRightSwiper', {
  slidesPerView: 1.2,
  spaceBetween: 10,
  loop: true,
  speed: 4000,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 2.5,
      spaceBetween: 10,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 4,
      spaceBetween: 20,
    },

    768: {
      slidesPerView: 5,
      spaceBetween: 20,
    },
    992: {
      slidesPerView: 8,
      spaceBetween: 20,
    },
    1200: {
      slidesPerView: 9.8,
      spaceBetween: 20,
    },
  },
});
var swiper = new Swiper('.GalleryLeftSwiper', {
  slidesPerView: 1.8,
  spaceBetween: 10,
  loop: true,
  speed: 4000,
  autoplay: {
    delay: 0,
    reverseDirection: true,
    disableOnInteraction: false,
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 2.3,
      spaceBetween: 10,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 3.4,
      spaceBetween: 20,
    },

    768: {
      slidesPerView: 5.4,
      spaceBetween: 20,
    },
    992: {
      slidesPerView: 7.2,
      spaceBetween: 20,
    },
    1200: {
      slidesPerView: 9.1,
      spaceBetween: 20,
    },
  },
});
