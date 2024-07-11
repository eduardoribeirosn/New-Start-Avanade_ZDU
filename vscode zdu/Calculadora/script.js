function displaynum(num1) {
    Calculadora.text01.value = Calculadora.text01.value + num1;
    console.log("Funciona!");
}

function clear() {
    console.log("Funciona!");
    let result = document.getElementById(result);
    result.value = "";

}