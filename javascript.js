const helado = 450
let topping = "KitKat";
let precio ;
let precioFinal ;

if (topping == "Oreo") {
    precio=10
} else if (topping == "KitKat") {
    precio=15
} else if (topping == "Kinder") {
    precio=25
} else {
    console.log ("No tenemos este topping")
}
 
precioFinal= helado + precio

console.log ( "El helado cuesta $" + precioFinal)


