document
  .querySelector('form')
  .addEventListener('submit', (e) => {
    e.preventDefault();

    const resultElement =
      document.querySelector('.out');

    resultElement.value =
      parseNumberToTimeStr(
        calculateEndOfWork(
          parseInputElementsToNumberValues(
            Array.from(
              document.querySelectorAll(
                '.in'
              )
            )
          )
        )
      );
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

function parseInputElementsToNumberValues(
  inputs
) {
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
