function sumTriple() {
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);

    let sum;
    if (num1 === num2) {
        sum = 3 * (num1 + num2);
    } else {
        sum = num1 + num2;
    }

    document.getElementById('result').innerHTML = `Результат: ${sum}`;
}
