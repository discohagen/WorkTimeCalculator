const form =
  document.querySelector('form');
form.addEventListener('submit', (e) => {
  e.preventDefault();

  const result =
    document.querySelector('.out');

  const inputs = Array.from(
    document.querySelectorAll('.in')
  );

  const inputValues =
    parseInputsToNumbers(inputs);

  const resultValue =
    calculateEndOfWork(inputValues);

  const parsedResult =
    parseNumberToTimeStr(resultValue);

  result.value = parsedResult;
});

function calculateEndOfWork([
  start,
  breakStart,
  breakEnd,
  workTime,
  saldoToUse,
]) {
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
