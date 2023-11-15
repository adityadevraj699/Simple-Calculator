let result = document.getElementById('result');

function appendValue(value) {
  result.value += value;
}

function clearResult() {
  result.value = '';
}

function deleteLastCharacter() {
  result.value = result.value.slice(0, -1);
}

function calculateResult() {
  try {
    const expression = result.value;
    const answer = eval(expression);
    result.value = answer;
  } catch (error) {
    result.value = 'Error';
  }
}