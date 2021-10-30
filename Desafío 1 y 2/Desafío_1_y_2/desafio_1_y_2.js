/*Consultar el nombre y la edad. Si es mayor de 18, accede a la web. Si es menor de 18, consultar si se encuentra con un tutor, si responde que sí accede a la web. En caso contrario, mostrar alerta y no permitir continuar*/

let nombreUsuario = prompt ("¡Bienvenid@! Por favor, indícanos tu nombre");
let edadUsuario = parseInt(prompt ("Indícanos tu edad"));
let tutor = prompt("¿Estás con un tutor? Si | No");

if(edadUsuario >= 18){
  console.log(nombreUsuario + " Tiene acceso a la tienda");
}
else if(tutor =="Si"){
  console.log(nombreUsuario + " Tiene acceso a la tienda");
}
else{
  console.log(nombreUsuario + " No tiene acceso a la tienda");
}
alert(nombreUsuario + " vuelve cuando tengas 18 o te encuentres con un tutor. Gracias!")



