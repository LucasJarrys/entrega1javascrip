const edad = (x) => 2023 - x;


let num = parseInt(prompt("Para adivinar su edad ingrese el año en el que nacio"));
let edadAprox = edad(num);

alert(`Tu edad aproximada es ${edadAprox} años`)