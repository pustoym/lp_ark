import {ieFix} from './utils/ie-fix';
import {iosVhFix} from './utils/ios-vh-fix';
import {initPhoneMask} from './utils/phone-mask';

import {initBurgers} from './modules/burger';
import {initModals} from './modules/init-modals';
import {initAccordions} from './modules/init-accordion';
import {initFormValidate} from './modules/init-form-validate';

// --

// Utils
// ---------------------------------

ieFix();
iosVhFix();

// Modules
// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {
  const pageNav = document.querySelector('.page-header__nav');
  const navBurger = document.querySelector('.page-header__burger');

  if (navBurger) {
    navBurger.onclick = () => {
      pageNav.classList.toggle('page-header__nav--closed');
      pageNav.classList.toggle('page-header__nav--opened');
    };
  }
  initBurgers();
  initModals();
  initAccordions();
  initPhoneMask();
  initFormValidate();

  window.addEventListener('load', () => {
  });
});
