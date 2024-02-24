function keyboardvalue(event) {
    var val = event.key;
    if ((val >= '0' && val <= '9') || val === '+' || val === '-' || val === '*' || val === '/' || val === '.') {
        result(val);
    } else {}
}

function result(ch){
    document.getElementById('display').value += ch;
}
function cal() {
    var result = eval(document.getElementById('display').value);
    try {
    document.getElementById('display').value = result;
    } catch (error) {
    document.getElementById('display').value = 'Error';
    }
  }
function clearInput() {
    var currentValue = document.getElementById('display').value;
    document.getElementById('display').value = currentValue.slice(0, -1);
}
function allclear() {
    var currentValue = document.getElementById('display').value;
    document.getElementById('display').value =' ';
}
function toggleSign() {
    let currentValue = document.getElementById('display').value;
    if (currentValue.startsWith('-')) {
        document.getElementById('display').value = currentValue.substring(1);
    } else {
        document.getElementById('display').value = '-' + currentValue; 
    }
  }