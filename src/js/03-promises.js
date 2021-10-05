import notiflix from 'notiflix';

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  const obj = { position, delay };

  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) resolve(obj);
      else reject(obj);
    }, delay);
  })

    .then(({ position, delay }) => {
      notiflix.Notify.success(`Fulfilled promise ${position} in ${delay}ms`);
    })

    .catch(({ position, delay }) => {
      notiflix.Notify.failure(`Rejected promise ${position} in ${delay}ms`);
    });
};

const inputForm = document.querySelector('.form');

inputForm.addEventListener('submit', createPromise);

function createPromise(event) {
  event.preventDefault();

  let delay = parseInt(event.target.elements.delay.value);
  const step = parseInt(event.target.elements.step.value);
  const amount = parseInt(event.target.elements.amount.value);

  for (let position = 1; position <= amount; position++) {
    createPromise(position, delay);

    delay = delay + step;
  }
};