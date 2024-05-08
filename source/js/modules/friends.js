function friendsInit() {
  const friendsSlider = document.querySelector('.friends__slider');

  if (friendsSlider) {
    const swiper = new Swiper(friendsSlider, {
      navigation: {
        nextEl: '.friends__slider .swiper-navigation__btn--next',
        prevEl: '.friends__slider .swiper-navigation__btn--prev',
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
          spaceBetween: 20
        },
        768: {
          slidesPerView: 2.2,
          spaceBetween: 15
        },
        1280: {
          slidesPerView: 4,
          spaceBetween: 30
        }
      }
    });
  }
}

export { friendsInit }