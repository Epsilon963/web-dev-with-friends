alert("Saludos,¡Bienvenido a El Perro que Pizza!");
prompt("¿Qué deseas comer, pizza o perro?");

let order = prompt("Escriba el producto que desea:");

let perroPrice = 5
let pizzaPrice = 10

if (order
      === "perro") {
    alert("Escogiste " + order
      + ".Su precio es " + perroPrice + ".Ve a la caja,por favor.");
}

if (order
      === "pizza") {
    alert("Escogiste " + order
      + ".Su precio es " + pizzaPrice + ".Ve a la caja,por favor.");
}