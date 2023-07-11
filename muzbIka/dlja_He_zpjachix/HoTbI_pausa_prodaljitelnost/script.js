var numeroAnterior = 0; //Числовое значение текущей ноты
var contador = 0; //Он показывает инструкции только в первый раз.
//©хемма красная, 'Длительность Ноты', ряд первый снизу на табли©а
const respuestas = {
    1 : {1:'ДО целая нӨта', 2:'sfjkl'},  //ДОн целое ⠽   Y
    2 : {1:'Ре целая нӨта', 2:'fskl'},  //Ре целое ⠵ з z
    3 : {1:'МИ целая нӨта', 2:'dsfjl'},  //МИ целое ⠯ й 
    4 : {1:'ФА целая нӨта', 2:'dfsjkl'},  //ФА целое ⠿ 
    5 : {1:'$ОЛЬ целая нӨта', 2:'dfskl'},  //$ОЛЬ целое ⠷ ъ
    6 : {1:'ЛЯ целая нӨта', 2:'dsjl'},  //ЛЯ целое ⠮ ы 
    7 : {1:'©u целая нӨта', 2:'sdklj'},  //©u целое ⠾ ь 
//©хемма красная, 'Длительность Ноты', ряд второй снизу на табли©а
    8 : {1:'ДО I/II нӨты', 2:'sfjk'},  //ДОн Половинная ⠝ н n
    9 : {1:'Ре I/II нӨты', 2:'sfk'},  //Ре Половинная ⠕ о o
    10 : {1:'МИ I/II нӨты', 2:'dsfj'},  //МИ Половинная ⠏ п p
    11 : {1:'ФА I/II нӨты', 2:'dfskj'},  //ФА Половинная ⠟ ч q
    12 : {1:'$ОЛЬ I/II нӨты', 2:'dfsk'},  //$ОЛЬ Половинная ⠗ р r
    13 : {1:'ЛЯ I/II нӨты', 2:'sdj'},  //ЛЯ Половинная ⠎ с s
    14 : {1:'©u I/II нӨты', 2:'dsjk'},  //©u Половинная ⠞ т t
//©хемма красная, 'Длительность Ноты', ряд второй сверху на табли©а
    15 : {1:'ДО I/IV нӨты', 2:'fljk'},  //ДОн Четвертная ⠹ 
    16 : {1:'Ре Четвертная', 2:'fkl'},  //Ре Четвертная ⠱ ш
    17 : {1:'МИ I/IV нӨты', 2:'dflj'},  //МИ Четвертная ⠫ я
    18 : {1:'ФА I/IV нӨты', 2:'fdjkl'},  //ФА Четвертная ⠻ 
    19 : {1:'$ОЛЬ I/IV нӨты', 2:'fdkl'},  //$ОЛЬ Четвертная ⠳ ю
    20 : {1:'ЛЯ I/IV нӨты', 2:'djl'},  //ЛЯ Четвертная ⠪ э
    21 : {1:'©u I/IV нӨты', 2:'dlkj'},  //©u Четвертная ⠺ в w
//©хемма красная, 'Длительность Ноты', ряд первый сверху на табли©а
    22 : {1:'ДО I/VIII нӨты', 2:'fjk'},  //ДОн Восьмая ⠙ д d
    23 : {1:'Ре I/VIII нӨты', 2:'fk'},  //Ре Восьмая ⠑ е e
    24 : {1:'МИ I/VIII нӨты', 2:'dfj'},  //МИ Восьмая ⠋ ф f
    25 : {1:'ФА I/VIII нӨты', 2:'dfkj'},  //ФА Восьмая ⠛ г g
    26 : {1:'$ОЛЬ I/VIII нӨты', 2:'fdk'},  //$ОЛЬ Восьмая ⠓ х h
    27 : {1:'ЛЯ I/VIII нӨты', 2:'dj'},  //ЛЯ Восьмая ⠊ и i
    28 : {1:'©u I/VIII нӨты', 2:'djk'},  //©u Восьмая ⠚ ж j

    29 : {1:'До I/XVI нӨты', 2:'fsljk'}, //До шестнадцатая ⠽ Y (Это то же самое, что До целое, ©хемма красная, 'Длительность Ноты', ряд первый снизу на табли©а)
    30 : {1:'Ре I/XVI нӨты', 2:'sfkl'}, //Ре шестнадцатая ⠵ з z
    31 : {1:'МИ I/XVI нӨты', 2:'dfsjl'}, //МИ шестнадцатая ⠯ й
    32 : {1:'ФА I/XVI нӨты', 2:'dfsljk'}, //ФА шестнадцатая ⠿
    33 : {1:'$ОЛЬ I/XVI нӨты', 2:'dsfkl'}, //$ОЛЬ шестнадцатая ⠷ ъ
    34 : {1:'ЛЯ I/XVI нӨты', 2:'dslj'}, //ЛЯ шестнадцатая ⠮ ы
    35 : {1:'©u I/XVI нӨты', 2:'dsljk'}, //©u шестнадцатая ⠾ ь
    //Бронзовая схемма 'Пауза молчание'    
    36 : {1:'пауза целой нӨты', 2:'fsj'}, //пауза целой ноты ⠍ м m
    37 : {1:'Пауза I/II нӨты', 2:'sfl'}, //Пауза полу ноты ⠥ у u
    38 : {1:'Пауза I/IV нӨты', 2:'sdfl'}, //Пауза 1/Четверти н. ⠧   v
    39 : {1:'Пауза I/VIII нӨты', 2:'sflj'}, //Пауз. 1/Восьм. ноты ⠭ щ x
    40 : {1:'Пауза I/XVI нӨты', 2:'sfj'}  //П. I/XVI ⠍ м m полуквавер (то же, что и пауза целой ноты)
}
function NumAleatorio() {
    //Возвращает случайное целое число от 1 до 40.
    return Math.floor(Math.random() * (41 - 1) ) + 1;
}
function evaluar() {
    var respuestaOrdenada = respuestas[numeroAnterior][2].split('').sort().join('');
    var inputOrdenado = document.getElementById("respuesta").value.split('').sort().join('').toLowerCase();

    if(respuestaOrdenada === inputOrdenado) { //Правильный ответ
        siguiente();
        if (contador === 0) { //Он показывает инструкции только в первый раз.
            alert(`Верно!\nТеперь, что означает знак Брайля для ${respuestas[numeroAnterior][1]}?\n(Нажмите «Ввод», чтобы продолжить, и введите свой ответ, затем нажмите «Ввод» еще раз, чтобы отправить ответ)`);
            contador++;
        } else if (contador >= 1) {
            alert(`Правильно!\nТеперь, что означает знак Брайля для ${respuestas[numeroAnterior][1]}?`)
        }
    } else if (inputOrdenado.length === 1) { //Преобразовывала ли клавиатура ввод в один знак Брайля Unicode
        alert('Пожалуйста, убедитесь, что когда вы печатаете с помощью клавиатуры Perkins, пишутся буквы клавиатуры, а не знак Брайля. То есть при наборе знака «Целая До» ваша клавиатура должна набирать «f, s, j, k, l», а не «y».');
    } else { //неверный ответ
        if (contador === 0) {
            alert(`Ответ неверный, попробуйте еще раз.\nКаторый знак Брайля для ${respuestas[numeroAnterior][1]}?\n(Нажмите «Ввод», чтобы продолжить и ввести свой ответ, затем нажмите «Ввод» еще раз, чтобы отправить ответ )`);
            contador++
        } else if (contador >=1) {
        alert(`Ответ неверный, попробуйте еще раз.\Каторый знак Брайля для ${respuestas[numeroAnterior][1]}?\n`);
        }
        resetear();
    }
}
function resetear() {document.getElementById("respuesta").value= ""}
function siguiente() {
    var num = NumAleatorio();
    while (num === numeroAnterior) {
        //Этот цикл позволяет избежать повторного представления одной и той же буквы подряд.
        num = NumAleatorio()
    }
	    numeroAnterior = num;
    document.getElementById("imagen").src = 'notas/' + num + '.svg';
    resetear();
    numeroAnterior = num;
    document.getElementById("nota").innerHTML= `Каторый знак Брайля для ${respuestas[numeroAnterior][1]}?`;
    resetear();
}

//При открытии или перезагрузке страницы:
resetear() //Если браузер сохранил последний ход
siguiente()
// Нажатие ввода после ввода в поле ввода активирует кнопку «Оценить».
document.addEventListener("keyup", function(event) {
    if (event.key === 'Enter') {
        evaluar();
    } else if (event.key === '.') {
        // Ключ "." активировать «Далее»
        siguiente();
    }
});