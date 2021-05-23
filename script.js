function getRandomNumber(min, max) {
    return Math.floor(min + Math.random() * (max - min + 1));
}

console.log('\n%cПервое задание', 'color:red')
var a = 1, b = 1, c, d;
c = ++a;
console.log(c + '\nПотому, что при префиксной форме записи оператор ++ возвращает новое значение переменной.');
d = b++;
console.log(d + '\nПотому, что при постфиксной форме записи оператор ++ возвращает значение переменной, которое было до произведённых действий.');
c = (2 + ++a);
console.log('Результат вычисления (2+ ++a): ' + c + '\nПервоначальное значение a = 2, префиксный ++ увеличивает значение на 1 и возвращает результат. Далее происходит вычисление.');
d = (2 + b++);
console.log('Результат вычисления (2 + b++): ' + d + '\nПервоначальное значение b = 2, постфиксный ++ возвращает это значение, происходит вычисление. Далее к значению b прибавляется 1');
console.log('a = ' + a + ' (дважды применён префиксный ++)');
console.log('b = ' + b + ' (дважды применён постфиксный ++)');

console.log('\n%cВторое задание', 'color:red')
var a = 2;
var x = 1 + (a *= 2);
console.log('x = ' + x + '\nПотому, что a *= 2 то же самое, что и a = a * 2');

console.log('\n%cТретье задание', 'color:red')

var a = getRandomNumber(-100, 100);
var b = getRandomNumber(-100, 100);
if (a >= 0 && b >= 0) {
    var res = a - b;
} else if (a < 0 && b < 0) {
    var res = a * b;
} else if (a >= 0 && b < 0 || a < 0 && b >= 0) {
    var res = a + b;
}
console.log(res);

console.log('\n%cЧетвёртое задание', 'color:red')

var a = getRandomNumber(1, 15)
switch (a) {
    case 1:
        console.log(a);
        a++;
    case 2:
        console.log(a);
        a++;
    case 3:
        console.log(a);
        a++;
    case 4:
        console.log(a);
        a++;
    case 5:
        console.log(a);
        a++;
    case 6:
        console.log(a);
        a++;
    case 7:
        console.log(a);
        a++;
    case 8:
        console.log(a);
        a++;
    case 9:
        console.log(a);
        a++;
    case 10:
        console.log(a);
        a++;
    case 11:
        console.log(a);
        a++;
    case 12:
        console.log(a);
        a++;
    case 13:
        console.log(a);
        a++;
    case 14:
        console.log(a);
        a++;
    case 15:
        console.log(a);
        a++;
}

console.log('\n%cПятое задание', 'color:red');

function add(a, b) {
    var res = a + b;
    return res;
}

function subtract(a, b) {
    var res = a - b;
    return res;
}

function increase(a, b) {
    var res = a * b;
    return res;
}

function degree(a, b) {
    var res = a / b;
    return res;
}
console.log('Все функции  на месте');

console.log('\n%cШестое задание', 'color:red');

function mathOperation(arg1, arg2, operation) {
    var res = operation(arg1, arg2);
    return res;
}

console.log(mathOperation(10, 7, subtract));

console.log('\n%cСедьмое задание', 'color:red');

console.log(null == 0, null === 0, null > 0, null < 0, null <= 0, null >= 0);
console.log("Это объясняется логикой работы операторов >= и <= и их оптимизацией. В начале работы алгоритма опертора он проверяет верно ли, что null меньше 0. Получив false, делается логичный вывод, что null больше либо равен 0. <= работает также, но в обратном направлении.")

console.log('\n%cВосьмое задание', 'color:red');

function power(val, pow) {
    let res = 1;
    for (i = 0; i < pow; i++) {
        res *= val;
    }
    return res;
}

console.log(power(2, 10));