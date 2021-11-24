let textArea = document.getElementById('textarea')

function display(value) {
  textArea.value += value;
}

function clr() {
  textArea.value = ' ' ;
}

function calculate() {
  var value = document.getElementById('textarea').value
  var answer = eval(value);
  document.getElementById('textarea').value=answer;
}