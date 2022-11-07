const initBurgers = () => {
  const burgers = document.querySelectorAll('.burger');
  const links = document.querySelectorAll('.main-nav__link');
  const mainBurger = document.querySelector('.main-nav__toggler');
  const mainNav = document.querySelector('.main-nav');

  burgers.forEach((burger) => {
    burger.addEventListener('click', ({target}) => {
      let targetId = target.getAttribute('data-target-id');
      let targetClassToggle = target.getAttribute('data-target-class-toggle');

      if (targetId && targetClassToggle) {
        target.classList.toggle('burger--close');
        document.getElementById(targetId).classList.toggle(targetClassToggle);
      }
    });
  });

  links.forEach((link) => link.addEventListener('click', () => {
    mainBurger.classList.toggle('burger--close');
    mainNav.classList.toggle('main-nav--open');
  }));

  const pageNav = document.querySelector('.page-header__nav');
  const navBurger = document.querySelector('.page-header__burger');

  if (navBurger) {
    navBurger.onclick = () => {
      pageNav.classList.toggle('page-header__nav--closed');
      pageNav.classList.toggle('page-header__nav--opened');
    };
  }

};

export {initBurgers};
