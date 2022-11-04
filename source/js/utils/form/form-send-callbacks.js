import {modals} from '../../modules/init-modals';
import swal from 'sweetalert';

export const baseSendSuccess = (target) => {
  window.clearForm(target);
  if (document.querySelector('[data-modal="callback"].is-active')) {
    modals.close('callback');
  }
  swal('Успех!', 'Ваша заявка успешно отправлена! Скоро наш менеджер свяжется с Вами.', 'success');
  // eslint-disable-next-line no-console
  console.log('Ваша форма успешна отправлена');
};

export const baseSendError = () => {
  swal('Упс!', 'Нам жаль, но что-то пошло не так. Попробуйте проверить соединения с интернетом и повторить попытку', 'error');
  // eslint-disable-next-line no-console
  console.error('Произошла ошибка отправки');
};
