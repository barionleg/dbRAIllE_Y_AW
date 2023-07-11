var cajetines = [0,0,0,0,0,0]; //Список, который изменяют флажки
var numeroAnterior = 0; //Числовое значение текущей ноты

const respuestas = {
    1 : [1,0,1,1,1,1], //До круглый...
    2 : [1,0,1,0,1,1],
    3 : [1,1,1,1,0,1],
    4 : [1,1,1,1,1,1],
    5 : [1,1,1,0,1,1],
    6 : [0,1,1,1,0,1],
    7 : [0,1,1,1,1,1], //Си круглый

    8 : [1,0,1,1,1,0], //До белый...
    9 : [1,0,1,0,1,0],
    10 : [1,1,1,1,0,0],
    11 : [1,1,1,1,1,0],
    12 : [1,1,1,0,1,0],
    13 : [0,1,1,1,0,0],
    14 : [0,1,1,1,1,0],

    15 : [1,0,0,1,1,1], //До чёрная
    16 : [1,0,0,0,1,1],
    17 : [1,1,0,1,0,1],
    18 : [1,1,0,1,1,1],
    19 : [1,1,0,0,1,1],
    20 : [0,1,0,1,0,1],
    21 : [0,1,0,1,1,1],

    22 : [1,0,0,1,1,0], //До глубокая
    23 : [1,0,0,0,1,0],
    24 : [1,1,0,1,0,0],
    25 : [1,1,0,1,1,0],
    26 : [1,1,0,0,1,0],
    27 : [0,1,0,1,0,0],
    28 : [0,1,0,1,1,0],

    29 : [1,0,1,1,1,1], //До Полуглубокая тишина (равный До круглая)
    30 : [1,0,1,0,1,1],
    31 : [1,1,1,1,0,1],
    32 : [1,1,1,1,1,1],
    33 : [1,1,1,0,1,1],
    34 : [0,1,1,1,0,1],
    35 : [0,1,1,1,1,1],

    36 : [1,0,1,1,0,0], //круглая тишина
    37 : [1,0,1,0,0,1], //белая тишина
    38 : [1,1,1,0,0,1], //тишина черного
    39 : [1,0,1,1,0,1], //глубокая тишина
    40 : [1,0,1,1,0,0]  //Полуглубокая тишина (прямо как круглое)
}

function NumAleatorio() {
    //Возвращает случайное целое число от 1 до 40.
    return Math.floor(Math.random() * (41 - 1) ) + 1;
}
function evaluar() {
    if(JSON.stringify(respuestas[numeroAnterior])===JSON.stringify(cajetines)) {
        document.getElementById("veredicto").innerHTML = "Ответ  <em>правильный</em>"; 
    } else {
    document.getElementById("veredicto").innerHTML = "Ответ      <strong>неправильный</strong>";
    }
}
function resetear() {
    //Desmarca todas las checkboxes y resetea la lista "cajetines"
    var cajetinesInput = document.getElementById('cajetinesInput');
    var puntos = cajetinesInput.getElementsByTagName('input');
    for (var i=0; i<(puntos.length); i++) {
        puntos[i].checked = false;
    }

    cajetines = [0,0,0,0,0,0];
}
function cb(punto) {
    //Каждое действие флажка изменяет список «каналов».
    if (cajetines[punto - 1] === 0) {
        cajetines[punto - 1] = 1;
    } else if (cajetines[punto - 1] === 1) {
        cajetines[punto - 1] = 0;
    }
}
function siguiente() {
    var num = NumAleatorio();
    while (num === numeroAnterior) {
        //Этот цикл позволит избежать показа одной и той же ноты дважды подряд.
        num = NumAleatorio()
    }
    numeroAnterior = num;
    document.getElementById("imagen").src = 'HoTbI/' + num + '.svg';
    resetear();

    document.getElementById("veredicto").innerHTML = "<em>и сейчас?</em>"
}

// При открытии или перезагрузке страницы:
resetear() //Если браузер сохранил последний ход
siguiente()
document.getElementById("veredicto").innerHTML = "Напишите правильный знак Брайля для каждой заметки, затем <em>Оценить</em> или «Ввод».\
    <br/>Чтобы показать новую ноту, <em>Следующий</em> или клавишу Точка ' <em>.</em> '"

function desactivarCSS() {
    for ( i=0; i<document.styleSheets.length; i++) {
        void(document.styleSheets.item(i).disabled=true);
    }
}

document.addEventListener("keyup", function(event) {
    if (event.key === 'Enter') {
        evaluar();
    } else if (event.key === '.') {
        // Ключ "." активировать «Далее»
        siguiente();
    }
});