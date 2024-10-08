document.getElementById('multiplyButton').addEventListener('click', multiplyNumbers);
document.getElementById('divideButton').addEventListener('click', divideNumbers);
function multiplyNumbers() {
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);

    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById('result').innerHTML = "Пожалуйста, введите действительные числа.";
        return;
    }
    let multiplication = num1 * num2;
    document.getElementById('result').innerHTML = `Результат умножения: ${multiplication}`;
}

function divideNumbers() {
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);

    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById('result').innerHTML = "Пожалуйста, введите действительные числа.";
        return;
    }
    if (num2 === 0) {
        document.getElementById('result').innerHTML = "Деление на ноль невозможно.";
    } else {
        let division = num1 / num2;
        document.getElementById('result').innerHTML = `Результат деления: ${division}`;
    }
}