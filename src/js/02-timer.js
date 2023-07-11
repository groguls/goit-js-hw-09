import flatpickr from 'flatpickr';
import { Ukrainian } from 'flatpickr/dist/l10n/uk.js';
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import 'notiflix/dist/notiflix-3.2.6.min.js';

const refs = {
  inputEl: document.querySelector('#datetime-picker'),
  buttonEl: document.querySelector('[data-start]'),
  daysField: document.querySelector('[data-days]'),
  hoursField: document.querySelector('[data-hours]'),
  minutesField: document.querySelector('[data-minutes]'),
  secondsField: document.querySelector('[data-seconds]'),
};

refs.buttonEl.addEventListener('click', onBtnClick);
refs.buttonEl.disabled = true;
let selectedTime = null;

const options = {
  locale: Ukrainian,
  altInput: true,
  altFormat: 'F j, Y H:i',
  dateFormat: 'U',
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    selectedTime = selectedDates[0].getTime();
    const currentTime = Date.now();
    if (currentTime < selectedTime) {
      refs.buttonEl.disabled = false;
      return selectedTime;
    } else {
      refs.buttonEl.disabled = true;
      Notify.failure('Please choose a date in the future', {
        clickToClose: true,
      });
    }
  },
};

const fp = flatpickr(refs.inputEl, options);

function onBtnClick() {
  refs.buttonEl.disabled = true;
  fp.set('clickOpens', false);

  const timerID = setInterval(() => {
    const currentTime = Date.now();
    const timer = selectedTime - currentTime;
    if (timer < 0) {
      clearInterval(timerID);
      return;
    }
    const { days, hours, minutes, seconds } = convertMs(timer);
    refs.daysField.textContent = addLeadingZero(days);
    refs.hoursField.textContent = addLeadingZero(hours);
    refs.minutesField.textContent = addLeadingZero(minutes);
    refs.secondsField.textContent = addLeadingZero(seconds);
  }, 1000);
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}
