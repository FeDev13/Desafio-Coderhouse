let cliente = prompt("ingrese cliente");
let dias = parseInt(prompt("ingrese cantidad de dias desde la notificacion"));

for (i = 0; i < dias; i++) {
  if (dias <= 10) {
    console.log("cliente al dia");
  } else if (dias > 10 && dias <= 30) {
    console.log("cliente levemente demorado");
  } else {
    console.log("cliente en mora, intimar");
  }
}
