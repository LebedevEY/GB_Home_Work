//Первое задание.

let number = Math.floor(Math.random() * 1000);

// let num = 1020;

console.log(number)

function hundreds() {
    hundred = Math.floor(number / 100);
    return hundred;
}

function dozens() {
    dozen = Math.floor((number - hundred * 100) / 10);
    return dozen;
}

function units() {
    unit = number - (hundred * 100 + dozen * 10);
    return unit;
}

function numToObject (num) {
    if (num > 0 && num < 1000) {
         let object = {
             Сотен: hundreds(),
             Десятков: dozens(),
             Единиц: units(),
         };
        console.log(object);
    } else {
        console.log('Число превышает 999');
        let object = {};
        console.log(object);
    }
}

numToObject(number);

// Второе задание

let cart = [
    { id: 'prod1', price: 200, quantity: 8 },
    { id: 'prod2', price: 1500, quantity: 4 },
    { id: 'prod3', price: 800, quantity: 7 }
];

let sums = cart.map((cart) => cart.price * cart.quantity);

console.log('Сумма товаров: ' + sums.reduce((total, currentValue) => total + currentValue, 0));
