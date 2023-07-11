var rango = [0,0]; //Диапазон для генерации случайного числа/буквы.
var respuesta = "пустой"; //Список для хранения последней представленной буквы.

const todasLasFilas = {
    //Первая строка (а-и // 1-10)
    1:["а","<br/>O ·<br/>· ·<br/>· ·<br/>"],2:["б","<br/>O ·<br/>O ·<br/>· ·<br/>"],3:["в","<br/>· O<br/>O O<br/>· O<br/>"],5:["г","<br/>O O<br/>O O<br/>· ·<br/>"],4:["д","<br/>O O<br/>· O<br/>· ·<br/>"],6:["е","<br/>O ·<br/>· O<br/>· ·<br/>"],7:["ё","<br/>O ·<br/>· ·<br/>· O<br/>"],10:["ж","<br/>· O<br/>O O<br/>· ·<br/>"],9:["з","<br/>O ·<br/>· O<br/>O O<br/>"],8:["и","<br/>· O<br/>O ·<br/>· ·<br/>"],
    //Второй ряд (й-т//11-20)
    11:["й","<br/>O O<br/>O ·<br/>O O<br/>"],12:["к","<br/>O ·<br/>· ·<br/>O ·<br/>"],13:["л","<br/>O ·<br/>O ·<br/>O ·<br/>"],14:["м","<br/>O O<br/>· ·<br/>O ·<br/>"],15:["н","<br/>O O<br/>· O<br/>O ·<br/>"],16:["о","<br/>O ·<br/>· O<br/>O ·<br/>"],17:["п","<br/>O O<br/>O ·<br/>O ·<br/>"],18:["р","<br/>O ·<br/>O O<br/>O ·<br/>"],19:["с","<br/>· O<br/>O ·<br/>O ·<br/>"],20:["т","<br/>· O<br/>O O<br/>O ·<br/>"],
    //Третий ряд (у-ь//21-30)
    21:["у","<br/>O ·<br/>· ·<br/>O O<br/>"],22:["ф","<br/>O O<br/>O ·<br/>· ·<br/>"],23:["х","<br/>O ·<br/>O O<br/>· ·<br/>"],24:["ц","<br/>O O<br/>· ·<br/>· ·<br/>"],25:["ч","<br/>O O<br/>O O<br/>O ·<br/>"],26:["ш","<br/>O ·<br/>· O<br/>· O<br/>"],27:["щ","<br/>O O<br/>· ·<br/>O O<br/>"],28:["ъ","<br/>O ·<br/>O O<br/>O O<br/>"],29:["ы","<br/>· O<br/>O ·<br/>O O<br/>"],30:["ь","<br/>· O<br/>O O<br/>O O<br/>"],
    //Четвертый ряд (щ-я//31-33)
    31:["э","<br/>· O<br/>O ·<br/>· O<br/>"],32:["ю","<br/>O ·<br/>O O<br/>· O<br/>"],33:["я","<br/>O O<br/>O ·<br/>· O<br/>"],
    //Пунктуация (34-43)
    34:[".","<br/>· ·<br/>O O<br/>· O<br/>"],35:["!","<br/>· ·<br/>O O<br/>O ·<br/>"],36:["-","<br/>· ·<br/>· ·<br/>O O<br/>"],37:["«","<br/>· ·<br/>O ·<br/>O O<br/>"],38:["»","<br/>· ·<br/>· O<br/>O O<br/>"],39:["(","<br/>O ·<br/>O ·<br/>· O<br/>"],40:[")","<br/>· O<br/>· O<br/>O ·<br/>"],41:[",","<br/>· ·<br/>O ·<br/>· ·<br/>"],42:["?","<br/>· ·<br/>O ·<br/>· O<br/>"],43:["*","<br/>· ·<br/>· O<br/>O ·<br/>"],
   // Числа (44-53)
    44:["1","<br/>· O  O ·<br/>· O  · ·<br/>O O  · ·<br/>"],45:["2","<br/>· O  O ·<br/>· O  O ·<br/>O O  · ·<br/>"],46:["3","<br/>· O  O O<br/>· O  · ·<br/>O O  · ·<br/>"],47:["4","<br/>· O  O O<br/>· O  · O<br/>O O  · ·<br/>"],48:["5","<br/>· O  O ·<br/>· O  · O<br/>O O  · ·<br/>"],49:["6","<br/>· O  O O<br/>· O  O ·<br/>O O  · ·<br/>"],50:["7","<br/>· O  O O<br/>· O  O O<br/>O O  · ·<br/>"],51:["8","<br/>· O  O ·<br/>· O  O O<br/>O O  · ·<br/>"],52:["9","<br/>· O  · O<br/>· O  O ·<br/>O O  · ·<br/>"],53:["0","<br/>· O  · O<br/>· O  O O<br/>O O  · ·<br/>"]
}

function generarNumAleatorio(r1,r2) {
   // Возвращает случайное целое число между r1 и r2 (включая оба параметра)
    return Math.floor(Math.random() * (r2 +1 - r1) ) + r1;
}

function generarLetra() {
    // Генерирует случайную букву в указанном диапазоне.
    var num = generarNumAleatorio(rango[0],rango[1]);
    while (todasLasFilas[num][0] === respuesta) {
        //Этот цикл позволит избежать отображения одной и той же буквы дважды подряд.
        num = generarNumAleatorio(rango[0],rango[1]);
    }
    respuesta = todasLasFilas[num][0]; //В 'response' хранится значение, соответствующее букве.
    document.getElementById("letraBraille").innerHTML = todasLasFilas[num][1]; // и метка показывает значение, соответствующее знаку Брайля.
}

function Далее() {
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
        rango[1] = 43;
        document.getElementById("mensaje").innerHTML = "Для '?' и '¡!', пишите только закрывающий знак.<br/>То есть: только '!' и '?'.";
    } else if (seleccion === "Числа") {
        rango[0] = 44;
        rango[1] = 53;
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
        rango[1] = 43;
        document.getElementById("mensaje").innerHTML = "Для '?' и '¡!', пишите только закрывающий знак.<br/>То есть: только '!' и '?'.";
    } else if (seleccion === "1-6") {
        rango[0] = 1;
        rango[1] = 53;
        document.getElementById("mensaje").innerHTML = "Для '?' и '¡!', пишите только закрывающий знак.<br/>То есть: только '!' и '?'.";
    } else if (seleccion === "none selected") {
        rango[0] = 0;
        rango[1] = 0;
        document.getElementById("mensaje").innerHTML = "Выберите одну или несколько строк для просмотра.";
    }
    generarLetra();
    document.getElementById("veredicto").innerHTML = "<em>Какая это буква, цифра или знак препинания?</em>";
    document.getElementById("respuesta").value = "";
}

function evaluar() {
//Сначала оценивает ответ и возвращает вердикт, затем генерирует новое письмо, если ответ был правильным.
    var inputRespuesta = document.getElementById("respuesta").value;
    if (respuesta === "vacia") {
        document.getElementById("veredicto").innerHTML = "<em>Пожалуйста, выберите вариант и нажмите 'Далее'.</em>";
    }
    else if (inputRespuesta == respuesta || inputRespuesta.toLowerCase() == respuesta) {
        document.getElementById("veredicto").innerHTML = "<em>Правильно!</em> а теперь?";
        generarLetra();
        document.getElementById("respuesta").value = "";
    } 
    else {
        document.getElementById("veredicto").innerHTML = `<strong>Неправильно</strong>, ответ был '<em> ${respuesta} </em>'`;
    }
        
    var mensaje = document.getElementById("mensaje").innerHTML;
    if ( mensaje === "Выберите одну или несколько строк для просмотра.") {
        document.getElementById("mensaje").innerHTML = " ";
    }
}

function desactivarCSS() {
    for ( i=0; i<document.styleSheets.length; i++) {
        void(document.styleSheets.item(i).disabled=true);
    }
}

// Нажатие клавишу ввод после ввода и кликните кнопку «Оценить».
var inputField = document.getElementById("respuesta");
inputField.addEventListener("keyup", function(event) {
    if (event.key === 'Enter') {
        document.getElementById("Оценить").click();
    }
});
