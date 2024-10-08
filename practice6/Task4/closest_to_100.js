function near_100() {
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);

    let diff1 = Math.abs(num1 - 100);
    let diff2 = Math.abs(num2 - 100);

    let closest;
    if (diff1 < diff2) {
        closest = num1;
    } else if (diff2 < diff1) {
        closest = num2;
    } else {
        closest = "Одинаково близки";
    }

    document.getElementById('result').innerHTML = `Ближайшее к 100: ${closest}`;
}
