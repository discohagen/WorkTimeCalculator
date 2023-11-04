const resultElement =
  document.querySelector('.out');

const inputElements = Array.from(
  document.querySelectorAll('.in')
);

const plus = document.querySelector(
  '.plus-button'
);
const minus = document.querySelector(
  '.minus-button'
);

const form =
  document.querySelector('form');
form.addEventListener('submit', (e) => {
  e.preventDefault();

  var inputValues =
    parseInputsToNumbers(inputElements);

  var resultValue = calculateEndOfWork(
    inputValues
  );

  var parsedResult =
    parseNumberToTimeStr(resultValue);

  resultElement.value = parsedResult;
});

function calculateEndOfWork([
  start,
  breakStart,
  breakEnd,
  workTime,
  saldoToUse,
]) {
  if (
    minus.classList.contains('active')
  ) {
    saldoToUse = -1 * saldoToUse;
  }
  return (
    start +
    (breakEnd - breakStart) +
    workTime -
    saldoToUse
  );
}

function parseTimeToHours(timeString) {
  const [hours, minutes] = timeString
    .split(':')
    .map((num) => parseInt(num));

  const totalHours =
    hours + minutes / 60;

  return (
    Math.round(totalHours * 100) / 100
  );
}

function parseInputsToNumbers(inputs) {
  return inputs.map((input) =>
    parseTimeToHours(input.value)
  );
}

function parseNumberToTimeStr(num) {
  const hours = parseInt(num);
  const minutes = Math.round(
    (num - hours) * 60
  );
  if (minutes < 10) {
    return hours + ':0' + minutes;
  }
  return hours + ':' + minutes;
}

//sign buttons

plus.onclick = function () {
  if (
    plus.classList.contains('inactive')
  ) {
    plus.classList.replace(
      'inactive',
      'active'
    );
    minus.classList.replace(
      'active',
      'inactive'
    );
  }
};

minus.onclick = function () {
  if (
    minus.classList.contains('inactive')
  ) {
    minus.classList.replace(
      'inactive',
      'active'
    );
    plus.classList.replace(
      'active',
      'inactive'
    );
  }
};
