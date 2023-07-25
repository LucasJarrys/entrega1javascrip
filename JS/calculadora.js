function calculadora(num1, operacion, num2) {
    switch (operacion) {
      case "+":
        return num1 + num2;
        break;
  
      case "-":
        return num1 - num2;
        break;
  
      case "*":
        return num1 * num2;
        break;
  
      case "/":
        return num1 / num2;
        break;
  
      default:
        return "Operacion no encontrada";
        break;
    }
  }
  
  let numero1 = parseInt(prompt("Ingrese el primer numero"));
  let operacion = prompt("Ingrese la operación");
  let numero2 = parseInt(prompt("Ingrese el segundo numero"));
  let resultado = calculadora(numero1, operacion, numero2 );
  
  alert(`El resultado de la operacion es: ${resultado}`);

  let operacion2 = prompt("Quiere ingresar otra cuenta?");
  if (operacion2 === "si"){
    let numero1 = parseInt(prompt("Ingrese el número uno"));
    let operacion = prompt("Ingrese la operación");
    let numero2 = parseInt(prompt("Ingrese el número dos"));
    
    let resultado = calculadora(numero1, operacion, numero2 );
      
    alert(`El resultado de la operacion es: ${resultado}`);
  }       
else{
    alert("oka hasta luego")
}