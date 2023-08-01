var cajetines = {    /* Список, который изменяют флажки */
    /* правый */
    1:[0,0,0,0,0,0], 2:[0,0,0,0,0,0], 
    /* левый */
    3:[0,0,0,0,0,0], 4:[0,0,0,0,0,0]
};

var numeroAnterior = 0; //Числовое значение текущей ноты

// Перерывы
const segunda = [0,0,1,1,0,0];
const tercera = [0,0,1,1,0,1];
const cuarta = [0,0,1,1,1,1];
const quinta = [0,0,1,0,1,0];
const sexta = [0,0,1,0,1,1];
const septima = [0,1,0,0,1,0];
const octava = [0,0,1,0,0,1];

// Изменения
const sostenido = [1,0,0,1,0,1];
const bemol = [1,1,0,0,0,1];
const becuadro = [1,0,0,0,0,1];

const respuestas = {
    1 : {1:segunda, 2:sexta, 3:quinta, 4:octava},
    2 : {1:cuarta, 2:sexta, 3:tercera, 4:septima},
    3 : {1:cuarta, 2:sexta, 3:tercera, 4:sexta},
    4 : {1:cuarta, 2:sexta, 3:tercera, 4:quinta},
    5 : {1:tercera, 2:sexta, 3:segunda, 4:cuarta},
    6 : {1:tercera, 2:cuarta, 3:tercera, 4:quinta},
    7 : {1:quinta, 2:octava, 3:segunda, 4:cuarta},
    8 : {1:sexta, 2:octava, 3:tercera, 4:cuarta},
    9 : {1:quinta, 2:octava, 3:segunda, 4:cuarta},
    10 : {1:septima, 2:octava, 3:tercera, 4:quinta},
    11 : {1:sexta, 2:septima, 3:tercera, 4:cuarta},
    12 : {1:sexta, 2:octava, 3:tercera, 4:quinta},
    13 : {1:quinta, 2:octava, 3:sexta, 4:octava},
    14 : {1:quinta, 2:septima, 3:cuarta, 4:octava},

    15 : {1:bemol, 2:cuarta, 3:bemol, 4:tercera},
    16 : {1:bemol, 2:sexta, 3:bemol, 4:quinta},
    17 : {1:sostenido, 2:quinta, 3:becuadro, 4:quinta},
    18 : {1:becuadro, 2:quinta, 3:bemol, 4:quinta},
    19 : {1:bemol, 2:cuarta, 3:bemol, 4:quinta},
    20 : {1:bemol, 2:segunda, 3:bemol, 4:tercera},
    21 : {1:sostenido, 2:sexta, 3:sostenido, 4:tercera},
    22 : {1:sostenido, 2:septima, 3:becuadro, 4:tercera},
    23 : {1:sostenido, 2:octava, 3:becuadro, 4:tercera},
    24 : {1:becuadro, 2:cuarta, 3:bemol, 4:segunda}
}
function NumAleatorio() {
    //Возвращает случайное целое число между 1 y 24
    return Math.floor(Math.random() * (25 - 1) ) + 1;
}
function evaluar() {
    if (JSON.stringify(respuestas[numeroAnterior][1])===JSON.stringify(cajetines[1]) &&
        JSON.stringify(respuestas[numeroAnterior][2])===JSON.stringify(cajetines[2])) {
            document.getElementById("veredictoDerecha").innerHTML = "¡La mano derecha es <em>correcta</em>!"; 
        } else {
            document.getElementById("veredictoDerecha").innerHTML = "La mano derecha es <strong>incorrecta</strong>";
        }
    if (JSON.stringify(respuestas[numeroAnterior][3])===JSON.stringify(cajetines[3]) &&
        JSON.stringify(respuestas[numeroAnterior][4])===JSON.stringify(cajetines[4])) {
            document.getElementById("veredictoIzquierda").innerHTML = "¡La mano izquierda es <em>correcta</em>!"; 
        } else {
            document.getElementById("veredictoIzquierda").innerHTML = "La mano izquierda es <strong>incorrecta</strong>";
        }
}
function resetear() {
    //Снимите все галочки и сбросьте список "boxes"
    var cajetinesInput = document.getElementById('cajetinesInput');
    var puntos = cajetinesInput.getElementsByTagName('input');
    for (var i=0; i<(puntos.length); i++) {
        puntos[i].checked = false;
    }
    cajetines = {1:[0,0,0,0,0,0], 2:[0,0,0,0,0,0], 3:[0,0,0,0,0,0], 4:[0,0,0,0,0,0]};
}
function cb(cajetin, punto) {
    //Каждое действие галочки изменяет список «полей».
    if (cajetines[cajetin][punto - 1] === 0) {
        cajetines[cajetin][punto - 1] = 1;
    } else if (cajetines[cajetin][punto - 1] === 1) {
        cajetines[cajetin][punto - 1] = 0;
    }
}
function siguiente() {
    let num = NumAleatorio();
    while (num === numeroAnterior) {
        //Этот цикл позволяет избежать повторного представления одной и той же буквы подряд.
        num = NumAleatorio()
    }
    numeroAnterior = num;
    document.getElementById("imagen").src = './HoTbI/' + numeroAnterior + '.svg';
    resetear();

    document.getElementById("veredictoDerecha").innerHTML = "<em>¿Y ahora?</em>"
    document.getElementById("veredictoIzquierda").innerHTML = "⠀"
}

//При открытии или перезагрузке страницы:
resetear(); //На случай, если браузер сохранил последний ход
siguiente();
document.getElementById("veredictoDerecha").innerHTML = "Введите правильный знак для каждого интервала, затем нажмите <em>оценить</em>."
document.getElementById("veredictoIzquierda").innerHTML = "Если ваш результат правильный, нажмите <em>Далее</em> чтобы отобразить новый аккорд."
alert("Для правой руки,запишите интервалы относительно верхней ноты сверху вниз.\
    \nДля левой руки записывайте ноты относительно нижней ноты.\
    \nЕсли есть изменение, оно записывается перед разрывом.\
    \nВы можете нажать 'Enter', чтобы оценить свой ответ и ключ, чтобы указать ' . ', чтобы показать новый аккорд.\
    \n\n(Для получения дополнительной информации смотрите шпаргалку, чуть позже добавиться страница где вы можете \
      \nнайти вводное руководство по брайлевской нотографии. bunioჼ КомпозА℞ &∞ ჼ©ŒmeЖ sien©e 1932 )"
);

document.addEventListener("keyup", function(event) {
    if (event.key === 'Enter') {
        evaluar();
    } else if (event.key === '.') {
        // Ключ "." активировать «Далее»
        siguiente();
    }
});
