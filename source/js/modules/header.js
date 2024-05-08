function headerInit() {
  let headerHumburger = document.querySelector('.header__humburger');
  let headerMini = document.querySelector('.header--mini');

  if (headerHumburger) {
    headerHumburger.addEventListener('click', () => {
      let headerMenu = document.querySelector('.header__menu');
      headerMenu.classList.toggle('is-active');
    })
  }

  if (headerMini) {
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 400) {
        headerMini.classList.remove('header--mini');
        headerMini.classList.add('header--white');
      } else {
        headerMini.classList.add('header--mini');
        headerMini.classList.remove('header--white');
      }
    })
  }
}

export { headerInit }