const Pizzas = [{
    id: 1,
    nombre: 'Muzarela',
    precio: 550,
    Ingredientes: ['Muzarela', 'Oregano'],
},
{
    id: 6,
    nombre: 'Bacon',
    precio: 1400,
    Ingredientes: ['Chedar', 'Bacon', 'Muzarela', 'huevo frito'],
},
{
    id: 3,
    nombre: 'Calabresa',
    precio: 1200,
    Ingredientes: ['Muzarela', 'Salame'],
},
{
    id: 4,
    nombre: 'especial',
    precio: 3000,
    ingredientes: ['muzzarela', 'morron', 'choclo', 'huevo', 'parmesano'],
},
{
    id: 5,
    nombre: 'Fugazeta',
    precio: 1100,
    Ingredientes: ['Muzarela', 'Cebolla'],
},
{

    id: 2,
    nombre: 'Napolitana',
    precio: 1100,
    Ingredientes: ['Muzarela', 'Tomate', 'Jamon'],
},
];
//Ejercicio A
Pizzas.forEach(numero => {
    if (numero.id % 2 != 0)
        console.log(`Las pizzas impares son: ${numero.nombre}`);
});
// Ejercicio B

const pizzasMenorA = () => {
    if (pizzas.some((pizza) => pizza.precio < 600)) {
        return 'hay pizzas menor a 600$';
    } else {
        return 'no hay pizzas menores a 600$';
    }
};

//Ejercicio C
Pizzas.forEach(nombres => { console.log(`Variedad de pizza : ${nombres.nombre}`) });
//Ejercicio D y E
Pizzas.forEach(precios => { console.log(`La variedad de pizza "${precios.nombre}" tiene un precio de $${precios.precio}`) });