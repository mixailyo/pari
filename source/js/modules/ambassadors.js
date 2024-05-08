function ambassadorsInit() {
  const swiper1 = new Swiper('.ambassadors__slider:not(.ambassadors__slider--main)', {
    loop: true,
    // Navigation arrows
    navigation: {
      nextEl: '.ambassadors__navigation-btn--next',
      prevEl: '.ambassadors__navigation-btn--prev',
    },
    slidesPerView: 2,
    spaceBetween: 30
  });

  const swiper2 = new Swiper('.ambassadors__slider--main', {
    loop: true,
    // Navigation arrows
    navigation: {
      nextEl: '.ambassadors__navigation-btn--next',
      prevEl: '.ambassadors__navigation-btn--prev',
    },
  });
}

export { ambassadorsInit }