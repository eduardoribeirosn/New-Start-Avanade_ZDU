function displaynum(num1) {
Calculadora.text01.value = Calculadora.text01.value + num1;
}

function backspace() {
    let input = document.getElementById('result');
    let inputText = input.value;
    input.value = inputText.substring(0,inputText.length-1);
}

function limpar() {
    let input = document.getElementById('result');
    let inputText = input.value;
    input.value = inputText.substring(0,inputText.length-inputText.length);
}

function parents(paren) {
    Calculadora.text01.value = Calculadora.text01.value + paren;
    if(Calculadora.parent1.value === ")") {
        Calculadora.parent1.value = "(";
    } else {
        Calculadora.parent1.value = ")";
    }
    
}