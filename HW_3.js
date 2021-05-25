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

//[product, quantity, price]

var arr = [
    ['prod1', 2, 1500]
    ['prod2', 5, 300]
    ['prod3', 3, 800]
]
arr.forEach(element => {

});