// se declaran los productos y su precio
let productos = [
    {
        nombre: "harina",
        precio: 35
    },
    {
        nombre: "pan",
        precio: 25
    },
    {
        nombre: "papa",
 precio: 52
    },
    {
        nombre: "palta",
 precio: 55
    },
    {
        nombre: "fideos",
 precio: 85
    },
    {
        nombre: "aceite",
        precio: 350
    },
    {
        nombre: "sopa",
 precio: 86
    },
    {
        nombre: "mermelada",
        precio: 108
    },
    {
        nombre: "porotos",
 precio: 69
    },
    {
        nombre: "lentejas",
 precio: 85
    },
    {
        nombre: "mandarina",
 precio: 43
    },
    {
    nombre: "banana",
 precio: 79
},
{
    nombre: "leche de almendras",
    precio: 145
},
{
nombre: "papel higiénico",
 precio: 147
},
{
    nombre: "lavandina",
 precio: 55
},
{
    nombre: "alcohol en gel",
 precio: 123
},
{
    nombre: "shampoo",
 precio: 400
},
{
    nombre: "arroz",
 precio: 66
},
{
    nombre: "salsa de tomate",
    precio: 35
},
];
// se muestran los productos en el html
let idselect = document.getElementById("lista");
for (let i = 0; i < productos.length; i++) {
 let option = document.createElement("option");
 option.text = productos[i].nombre + productos[i].precio + "pesos";
 idselect.add(option);
}
// agrega productos al carrito
function carrito() {

}