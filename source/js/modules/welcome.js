function welcomeInit() {
  const welcomeToggler = document.querySelector('.welcome__toggler');

  if (welcomeToggler) {
    welcomeToggler.addEventListener('click', () => {
      const welcomeWrapper = document.querySelector('.welcome__wrapper');
      welcomeWrapper.classList.toggle('is-active');
    })
  }
}

export { welcomeInit }