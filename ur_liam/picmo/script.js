var rango = [0,0]; //Диапазон для генерации случайного числа/буквы.
var respuesta = "пустой"; //Список для хранения последней представленной буквы.
var cajetines = [0,0,0,0,0,0]; //Список, который изменяют флажки


const respuestas = {
    //Первая строка (а-и // 1-10)
    1:{1:"а",2:[1,0,0,0,0,0]},
    2:{1:"б",2:[1,1,0,0,0,0]},
    3:{1:"в",2:[0,1,0,1,1,1]},
    4:{1:"г",2:[1,1,0,1,1,0]},
    5:{1:"д",2:[1,0,0,1,1,0]},
    6:{1:"е",2:[1,0,0,0,1,0]},
    7:{1:"ё",2:[1,0,0,0,0,1]},
    8:{1:"ж",2:[0,1,0,1,1,0]},
    9:{1:"з",2:[1,0,1,0,1,1]},
    10:{1:"и",2:[0,1,0,1,0,0]},

    //Второй ряд (й-т//11-20)
    11:{1:"й",2:[1,1,1,1,0,1]},
    12:{1:"к",2:[1,0,1,0,0,0]},
    13:{1:"л",2:[1,1,1,0,0,0]},
    14:{1:"м",2:[1,0,1,1,0,0]},
    15:{1:"н",2:[1,0,1,1,1,0]},
    16:{1:"о",2:[1,0,1,0,1,0]},
    17:{1:"п",2:[1,1,1,1,0,0]},
    18:{1:"р",2:[1,1,1,0,1,0]},
    19:{1:"с",2:[0,1,1,1,0,0]},
    20:{1:"т",2:[0,1,1,1,1,0]},

    //Третий ряд (у-ь//21-30)
    21:{1:"у",2:[1,0,1,0,0,1]},
    22:{1:"ф",2:[1,1,0,1,0,0]},
    23:{1:"х",2:[1,1,0,0,1,0]},
    24:{1:"ц",2:[1,0,0,1,0,0]},
    25:{1:"ч",2:[1,1,1,1,1,0]},
    26:{1:"ш",2:[1,0,0,0,1,1]},
    27:{1:"щ",2:[1,0,1,1,0,1]},
    28:{1:"ъ",2:[1,1,1,1,0,1]},
    29:{1:"ы",2:[0,1,1,1,0,1]},
    30:{1:"ь",2:[0,1,1,1,1,1]},	
    //Четвертый ряд (щ-я//31-33)
    31:{1:"э",2:[0,1,0,1,0,1]},
    32:{1:"ю",2:[1,1,0,0,1,1]},
    33:{1:"я",2:[1,1,0,1,0,1]},	
    //Пунктуация (34-45)
    34:{1:".",2:[0,1,0,0,1,1]},
    35:{1:"!",2:[0,1,1,0,1,0]},
    36:{1:"-",2:[0,0,1,0,0,1]},
    37:{1:"«",2:[0,1,1,0,0,1]},
    38:{1:"»",2:[0,0,1,0,1,1]},
    39:{1:"(",2:[1,1,0,0,0,1]},
    40:{1:")",2:[0,0,1,1,1,0]},
    41:{1:",",2:[0,1,0,0,0,0]},
    42:{1:"?",2:[0,1,0,0,0,1]},
    43:{1:"*",2:[0,0,1,0,1,0]},
    44:{1:"@",2:[0,0,0,0,1,0]},
    45:{1:"|",2:[0,0,0,1,1,1]},
    //Числа (44-53)
    46:{1:"1",2:[1,0,0,0,0,0]},
    47:{1:"2",2:[1,1,0,0,0,0]},
    48:{1:"3",2:[1,0,0,1,0,0]},
    49:{1:"4",2:[1,0,0,1,1,0]},
    50:{1:"5",2:[1,0,0,0,1,0]},
    51:{1:"6",2:[1,1,0,1,0,0]},
    52:{1:"7",2:[1,1,0,1,1,0]},
    53:{1:"8",2:[1,1,0,0,1,0]},
    54:{1:"9",2:[0,1,0,1,0,0]},
    55:{1:"0",2:[0,1,0,1,1,0]}
	// Математические знаки
    56:{1:"+",2:[0,1,1,0,1,0]},
    57:{1:"-",2:[0,0,1,0,0,1]},
    58:{1:"x",2:[0,1,1,0,0,1]},
    59:{1:"=",2:[0,1,1,0,1,1]},
    60:{1:"/",2:[0,1,0,0,1,1]}
}




function generarNumAleatorio(r1,r2) {
    //Возвращает случайное целое число между r1 и r2 (включая оба параметра)
    return Math.floor(Math.random() * (r2 +1 - r1) ) + r1;
}
function generarLetra() {
    //Генерирует случайную букву в указанном диапазоне.
    var num = generarNumAleatorio(rango[0],rango[1]);
    while (num === respuesta) {
        //Этот цикл позволит избежать отображения одной и той же буквы дважды подряд.
        num = generarNumAleatorio(rango[0],rango[1]);
    }
    respuesta = num; //В 'response' хранится значение, соответствующее букве.
    document.getElementById("letra").innerHTML = respuestas[respuesta][1]; // и метка показывает значение, соответствующее знаку / букве.
    resetear();
}
function siguiente() {
    //Обновляет диапазон в соответствии с выбранной опцией и генерирует (новую) букву
    var dropd_opciones = document.getElementById("opcion");
    var seleccion = dropd_opciones.options[dropd_opciones.selectedIndex].value;
    if (seleccion === "1a") {
        rango[0] = 1;
        rango[1] = 10;
    } else if (seleccion === "2a") {
        rango[0] = 11;
        rango[1] = 20;
    } else if (seleccion === "3a") {
        rango[0] = 21;
        rango[1] = 30;
    } else if (seleccion === "4a") {
        rango[0] = 31;
        rango[1] = 33;
    } else if (seleccion === "Пунктуация") {
        rango[0] = 34;
        rango[1] = 45;
    } else if (seleccion === "Числа") {
        rango[0] = 46;
        rango[1] = 55;
	} else if (seleccion === "Математические знаки") {
        rango[0] = 56;
        rango[1] = 60;
    } else if (seleccion === "1-2") {
        rango[0] = 1;
        rango[1] = 20;
    } else if (seleccion === "1-3") {
        rango[0] = 1;
        rango[1] = 26;
    } else if (seleccion === "1-4") {
        rango[0] = 1;
        rango[1] = 33;
    } else if (seleccion === "1-5") {
        rango[0] = 1;
        rango[1] = 45;
    } else if (seleccion === "1-6") {
        rango[0] = 1;
        rango[1] = 55;
    } else if (seleccion === "1-7") {
        rango[0] = 1;
        rango[1] = 60;
        document.getElementById("mensaje").innerHTML = "Выберите одну или несколько строк для просмотра.";
    }
    generarLetra();
    document.getElementById("veredicto").innerHTML = "Какая это буква, для данного знака Брайля,<br/>цифра или знак препинания?";
}
function cb(punto) {
    //Каждое действие флажка изменяет список "ящики"
    if (cajetines[punto - 1] === 0) {
        cajetines[punto - 1] = 1;
    } else if (cajetines[punto - 1] === 1) {
        cajetines[punto - 1] = 0;
    }
}
function evaluar() {
//Сначала оценивает ответ и возвращает вердикт, затем генерирует новое письмо, если ответ был правильным.
    if (respuesta === "пустой") {
        document.getElementById("veredicto").innerHTML = "<em>Пожалуйста, выберите вариант и нажмите 'Далее'.</em><br/>";
    } else if (JSON.stringify(respuestas[respuesta][2])===JSON.stringify(cajetines)) {
        document.getElementById("veredicto").innerHTML = "ответ  <em>Правильный!</em>!<br/>"; 
    } else {
        document.getElementById("veredicto").innerHTML = "ответ <strong>Не правильный</strong><br/>попробуйте в другой раз:";
    }
        
    var mensaje = document.getElementById("mensaje").innerHTML;
    if ( mensaje === "Выберите одну или несколько строк для просмотра.") {
        document.getElementById("mensaje").innerHTML = " ";
    }
}
function resetear() {
// Снимите все галочки и сбросьте список "ящики"
    var cajetinesInput = document.getElementById('cajetinesInput');
    var puntos = cajetinesInput.getElementsByTagName('input');
    for (var i=0; i<(puntos.length); i++) {
        puntos[i].checked = false;
    }

    cajetines = [0,0,0,0,0,0];
}

function desactivarCSS() {
    for ( i=0; i<document.styleSheets.length; i++) {
        void(document.styleSheets.item(i).disabled=true);
    }
}

// Нажатие клавишу ввод после ввода и кликните кнопку «Оценить»().
document.addEventListener("keyup", function(event) {
    if (event.key === 'Enter') {
        evaluar();
    } else if (event.key === '.') {
        // Точка "." или "далее"
        siguiente();
    }
});

resetear();
