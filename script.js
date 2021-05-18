function write(text) {
    document.getElementById("info").innerHTML = text;

}

button1.onclick = function convertation() {
    var valC = document.getElementById('value_C').value;
    var valF = (9 / 5) * valC + 32;
    alert(valF + ' градусов по Фаренгейту');
}

button2.onclick = function () {
    var name = 'Василий';
    var admin = name;
    write('Админ у нас ' + admin);
}

button3.onclick = function () {
    var result = 1000 + "108";
    write('Результат: ' + result);
}

button4.onclick = function () {

    write('Разница в том, при использовании async файл script.js загружается независимо от HTML-документа и выполняется сразу после загрузки. При наличии нескольких файлов script.js тот, который раньше загрузится - раньше выполнится. При использовании defer файл также загружается независимо, но выполняется только после полной загрузки HTML. К тому же defer сохраняет относительный порядок файлов script.');
}

