let firstValue = prompt("Ingrese el primer valor de la suma:");
let secondValue = prompt("Ingrese el segundo valor de la suma:");
let resultado = (parseInt(firstValue) + parseInt(secondValue));

if(resultado < 1000){
    alert("El resultado de la suma sería: " + resultado + " y es menor a 1000");
} else if (resultado === 1000) {
    alert("El resultado de la suma sería: " + resultado + ". Justo el número que tenía en mente.");
} else {
    alert("El resultado de la suma sería: " + resultado + " y es mayor a 1000");
}