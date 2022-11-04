const initBurgers = () => {
  const burgers = document.querySelectorAll('.burger');
  const links = document.querySelectorAll('.main-nav__link')
  const mainBurger = document.querySelector('.main-nav__toggler')
  const mainNav = document.querySelector('.main-nav')

  burgers.forEach(burger => {
    burger.addEventListener('click', showBurgerTarget)
  });

  links.forEach(link => link.addEventListener('click', () => {
    mainBurger.classList.toggle('burger--close');
    mainNav.classList.toggle('main-nav--open');
  }));

}

function showBurgerTarget() {
  let targetId = this.getAttribute('data-target-id');
  let targetClassToggle = this.getAttribute('data-target-class-toggle');
  if (targetId && targetClassToggle) {
    this.classList.toggle('burger--close');
    document.getElementById(targetId).classList.toggle(targetClassToggle);
  }
}

export {initBurgers};
