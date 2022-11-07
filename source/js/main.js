import {ieFix} from './utils/ie-fix';
import {iosVhFix} from './utils/ios-vh-fix';

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

  initBurgers();
  initModals();
  initAccordions();
  initFormValidate();

  window.addEventListener('load', () => {
  });
});
