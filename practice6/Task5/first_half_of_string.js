function first_half() {
    let str = document.getElementById('str').value;

    if (str.length % 2 === 0) {
        document.getElementById('result').innerHTML = `Первая половина: ${str.slice(0, str.length / 2)}`;
    } else {
        document.getElementById('result').innerHTML = "Строка имеет нечетную длину.";
    }
}
