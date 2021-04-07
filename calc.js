let number1Input = document.getElementById('number1');
let number2Input = document.getElementById('number2');

let getNumberFromInput = function (input) {
    return (new Number(input.value));
}

let getNumbers = function () {
    let number1 = getNumberFromInput(number1Input);
    let number2 = getNumberFromInput(number2Input);
    let rezult = {
        num1: number1,
        num2: number2
    }
    return rezult;
}

let onOperationBtnClick = function (e) {
    let press = e.target;
    let pressValue = press.value;
    let numbersObj = getNumbers();
    let rezult;
    switch (pressValue) {
        case "+":
            rezult = numbersObj.num1 + numbersObj.num2;
            break;
        case "-":
            rezult = numbersObj.num1 - numbersObj.num2;
            break;
        case "*":
            rezult = numbersObj.num1 * numbersObj.num2;
            break;
        case "/":
            rezult = numbersObj.num1 / numbersObj.num2;
            break;
        case "**":
            rezult = numbersObj.num1 ** numbersObj.num2;
            break;
        case "корень":
            rezult = numbersObj.num1 ** (1 / numbersObj.num2);
            break;
    }
    document.getElementById("rezult").innerHTML = rezult;
}

let addListenerBtn = function (id) {
    let btn = document.getElementById(id);
    btn.addEventListener('click', onOperationBtnClick);

}

let operationBtnId = ['plusBtn',
    'minusBtn',
    'multiplyBtn',
    'devideBtn',
    'degreeBtn',
    'rootBtn'];

for (let i = 0; i < operationBtnId.length; i++) {
    addListenerBtn(operationBtnId[i]);
}
