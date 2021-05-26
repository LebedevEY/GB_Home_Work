//Первое задание

function isNatural(num) {
    for (var j = 2; j < num; j++) {
        if (num % j == 0) {
            return false;
        }
    }
    return true;
}

var i = 2;

while (i < 100) {
    if (isNatural(i) == true) {
        console.log(i);
    }
    i++;
}

//Второе задание

var arr = [
    { id: 'prod1', price: 200, quantity: 8 },
    { id: 'prod2', price: 1500, quantity: 4 },
    { id: 'prod3', price: 800, quantity: 7 }
];

var prodSum = [];

arr.forEach(function (arr) {
    let sum = arr.price * arr.quantity;
    prodSum.push(sum);
});

var reducer = (accumulator, currentValue) => accumulator + currentValue;

console.log('Сумма товаров: ' + prodSum.reduce(reducer));

//Третье задание

for (i = 0; i < 10; console.log(i++)) { };

//Четвёртое задание

var i = 0;
var j = 'x';
while (i < 20) {
    console.log(j);
    j += 'x';
    i++;
}