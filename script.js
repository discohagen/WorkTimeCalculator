const result =
  document.querySelector('.out');

const form =
  document.querySelector('form');
form.addEventListener('submit', (e) => {
  e.preventDefault();

  const inputs = Array.from(
    document.querySelectorAll('.in')
  );
  const inputValues =
    parseInputsToNumbers(inputs);

  result.value = calculateEndOfWork(
    inputValues
  );
});

function calculateEndOfWork([
  start,
  breakStart,
  breakEnd,
  workTime,
  saldoToUse,
]) {
  if (saldoToUse) {
    return (
      start +
      (breakEnd - breakStart) +
      workTime -
      saldoToUse
    );
  }
  return (
    start +
    (breakEnd - breakStart) +
    workTime
  );
}

function parseTimeToHours(timeString) {
  const [hours, minutes] = timeString
    .split(':')
    .map((num) => parseInt(num, 10));
  const totalHours =
    hours + minutes / 60;
  return totalHours.toFixed(2);
}

function parseInputsToNumbers(inputs) {
  const parsedValues = [];
  inputs.forEach((input) => {
    parsedValues.push(
      parseInputsToNumbers(input.value)
    );
  });
  return parsedValues;
}
