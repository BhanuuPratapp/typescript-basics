var num1element = document.getElementById('num1');
var num2element = document.getElementById('num2');
var buttonelement = document.querySelector('button');
function add(num1, num2) {
    return num1 + num2;
}
console.log(add(1, 6));
buttonelement.addEventListener('click', function () {
    var num1 = num1element.value;
    var num2 = num2element.value;
    var result = add(+num1, +num2);
    console.log(result);
});
