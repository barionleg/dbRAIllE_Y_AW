const braille = [ // Все возможные комбинации из шести точек, упорядоченные в соответствии с их представлением в Юникоде.
	//  	0 	  1 	2 	 3 	  4    5 	6 	 7     8    9    A     B    C    D    E 	F
/*U+280x*/ 	"⠀", "⠁", "⠂", "⠃", "⠄", "⠅", "⠆", "⠇", "⠈", "⠉", "⠊", "⠋", "⠌", "⠍", "⠎", "⠏",
/*U+281x*/ 	"⠐", "⠑", "⠒", "⠓", "⠔", "⠕", "⠖", "⠗", "⠘", "⠙", "⠚", "⠛", "⠜", "⠝", "⠞", "⠟",
/*U+282x*/ 	"⠠", "⠡", "⠢", "⠣", "⠤", "⠥", "⠦", "⠧", "⠨", "⠩", "⠪", "⠫", "⠬", "⠭", "⠮", "⠯",
/*U+283x*/ 	"⠰", "⠱", "⠲", "⠳", "⠴", "⠵", "⠶", "⠷", "⠸", "⠹", "⠺", "⠻", "⠼", "⠽", "⠾", "⠿"
];
const perk = [ // Эквиваленты в комбинации Перкинса (f=точка 1, d=2, s=3, j=4, k=5, l=6) отсортированы по алфавиту.
//	 0	   1	  2	      3	 	 4		5	  	6		 7		 8	    9	    A		 B		 C		 D		   E		 F
	" ",  "f",   "d",   "df",   "s",   "fs",   "ds",   "dfs",   "j",   "fj",   "dj",   "dfj",   "js",   "fjs",   "djs",   "dfjs",
	"k",  "fk",  "dk",  "dfk",  "ks",  "fks",  "dks",  "dfks",  "jk",  "fjk",  "djk",  "dfjk",  "jks",  "fjks",  "djks",  "dfjks",
	"l",  "fl",  "dl",  "dfl",  "ls",  "fls",  "dls",  "dfls",  "jl",  "fjl",  "djl",  "dfjl",  "jls",  "fjls",  "djls",  "dfjls",
	"kl", "fkl", "dkl", "dfkl", "kls", "fkls", "dkls", "dfkls", "jkl", "fjkl", "djkl", "dfjkl", "jkls", "fjkls", "djkls", "dfjkls"
];
const alpha = [ /* Буквы, соответствующие одному знаку. необычные знаки,
  несуществующие в испанском языке или требующие интерпретации более одного знака, игнорируются ("�"). */
	   		" ", "a", ",", "b", ".", "k",  ";",  "l", "�",  "c", "i", "f", "í", "m",  "s", "p",
			"@", "e", ":", "h", "*", "o",  "!",  "r", "�",  "d", "j", "g", ")", "n",  "t", "q",
			"�", "�", "?", "(", "-", "u",  "\"", "v", "�",  "�", "�", "�", "ó", "x",  "é", "�",
			"�", "�", "�", "ü", "�", "z",  "=",  "á", "|",  "�", "w", "ñ", "�", "y",  "ú", "�"
];
const signosPuntNumer = [
	"+", "-", "*", "/", "="
]
const signosPuntNumerBrai = [
	"⠖", "⠤", "⠦", "⠴", "⠶"
]
const nums = [
  // a	b	c	d	 e	  f		g	h	  i	   j
	"⠁","⠃","⠉","⠙","⠑","⠋","⠛","⠓","⠊","⠚",
	"1", "2", "3", "4", "5", "6", "7", "8", "9", "0"
];
const primeras10letras = ["a","b","c", "d", "e", "f", "g", "h", "i","j"];
const letrasPuntos = ['f','d','s','j','k','l',' '];
var MAYUS = false;
var NUMERAL = false;

function convertir(input) {
    var textoBrai = document.getElementById("outputBraille");
    var texto = document.getElementById("outputTexto");

    // Отсортируйте ввод в алфавитном порядке и передайте его в нижний регистр:
	input = input.split('').sort().join('').toLowerCase();
	document.getElementById("input").value = "";
	document.getElementById("input").focus();

    // Пробелы проходят как есть
    if (input == " ") {
        textoBrai.value += braille[0];
        texto.value +=  " ";
		NUMERAL = false;
		return 0;
    }
     else if (input == "jl") { // знак заглавной буквы
		MAYUS = true;
		NUMERAL = false;
      	textoBrai.value += braille[40];
      	return 0;
    }
     else if (input == "jkls") { // Цифра
		NUMERAL = true;
		MAYUS = false; // Предотвратить ошибку пользователя
      	textoBrai.value += braille[60];
		return 0;
    }
    // еще...
    /***********************************
	 * ЕСЛИ ЭТО БУКВА ИЛИ ЦИФРА БРАЙЛЯ
	************************************/

	for (var i = 0; i <= 64; i++) {
		if (input == perk[i]) {
			// В текст добавлен знак Брайля.
			textoBrai.value += braille[i];

			// И знак алфавита добавляется в 'OutputText':

			//Если это точка 5, за которой следуют цифры
			if (NUMERAL && i == 16) {
				NUMERAL = 0;
			}
			 else if (MAYUS) {
				texto.value += alpha[i].toUpperCase();
				MAYUS = 0;
				NUMERAL = 0;
			}	
			 else if (NUMERAL && primeras10letras.indexOf(alpha[i]) > -1) {
				// Если включена ЦИФРА и буква находится в диапазоне от a до j
				// написать число
				for (var j=0; j<10; j++) {
					if (nums[j] == braille[i]) {
						texto.value += nums[j+10];
						return 0;
					}
				}
			} 
			 else if (NUMERAL && (signosPuntNumerBrai.indexOf(braille[i]) > -1) ) {
				// Если включена цифра и был написан знак точки. математический
				for (var j=0; j<5; j++) {
					if (signosPuntNumerBrai[j] === braille[i]) {
						texto.value += signosPuntNumer[j];
						NUMERAL = false;
						return 0;
					}
				}
			}
			 else if (NUMERAL && primeras10letras.indexOf(alpha[i]) == -1) { // Если пишется ЦИФРА и минус буква. вне диапазона
				NUMERAL=0;
				texto.value += alpha[i];
			}
			 else {
				texto.value += alpha[i];
			}
		}
	}
};

function salto() {
	document.getElementById("outputBraille").value += "\n";
	document.getElementById("outputTexto").value += "\n";
	document.getElementById("input").focus();
	NUMERAL = false;
};
function tab() {
	document.getElementById("outputBraille").value += "\t";
	document.getElementById("outputTexto").value += "\t";
	document.getElementById("input").focus();
	NUMERAL = false;
};

function borrarUna() {
	// Удаляет последний элемент обеих частей

	let outputBraille = document.getElementById("outputBraille").value;
	let outputTexto = document.getElementById("outputTexto").value;
	document.getElementById("outputBraille").value = outputBraille.substring(0, outputBraille.length - 1);
	document.getElementById("outputTexto").value = outputTexto.substring(0, outputTexto.length - 1);

	outputBraille = document.getElementById("outputBraille").value;
	outputTexto = document.getElementById("outputTexto").value;

	if (outputBraille[outputBraille.length -1] === "⠨" ||
		outputBraille[outputBraille.length -1] === "⠼") {
		// Если после удаления последнего символа Брайля осталась буква s. цифра или заглавная:
			document.getElementById("outputBraille").value = outputBraille.substring(0, outputBraille.length - 1);
			NUMERAL = false;
			// Shift не отключен, потому что он длится только для одной буквы.
	} else if (outputBraille[outputBraille.length -1] === "⠐" &&
				outputTexto[outputTexto.length -1] != "@") {
				// Если это так, точка 5 остается в конце как разделитель букв и цифр.
			document.getElementById("outputBraille").value = outputBraille.substring(0, outputBraille.length - 1);
			NUMERAL = true;

	}

	document.getElementById("input").focus();
};

function borrarTodo() {
	document.getElementById("input").value = "";
	document.getElementById("outputBraille").value = "";
	document.getElementById("outputTexto").value = "";
	document.getElementById("input").focus();
	MAYUS = false;
	NUMERAL = false;
};


function guardarTxt() {
    // Сохраните результат в виде текстового документа для загрузки.
	
	let textToSave = document.getElementById('outputTexto').value;
	
    if (textToSave.length <1) {
        alert("Вы еще не ввели текст");
        return 1;
    }  
	
	let documento = document.createElement('a');
	textToSave += "\n\n";
	textToSave += document.getElementById('outputBraille').value;
    let creditos = "\n\nБлагодарим вас за использование DB'mе₽минаЛ'Б₽айлЯ, бесплатного приложения с открытым исходным кодом.";
    textToSave += creditos;
  
    documento.href = 'data:attachment/text,' + encodeURI(textToSave);
    documento.target = '_blank';
    documento.download = 'Бонус.txt';
    documento.click();
};
// "Используйте клавиатуру Qwerty для ввода символов Брайля и пробелов, как если бы вы использовали "+
// "писатель Брайля:\nПоместите указательные пальцы на клавиши "J" И "F".\nКнопка "+"
// «F» означает точку Брайля 1, «D» — 2, а «S» — 3. Аналогично, клавиши «J», «+
// "'K' и 'L' обозначают точки 4, 5 и 6 соответственно.\nЧтобы написать, например, букву 's', "+
// "вам нужно будет одновременно нажать клавиши "D", "S" и "J".\n"+
// "Вы также можете ввести "специальные" символы, такие как знак решетки и заглавные буквы. Чтобы ввести "+
// "пробел нажмите пробел.\n"+
// "Если вы используете устройство с сенсорным экраном, нажмите кнопку "Для сенсорного экрана"" +
// "чтобы отключить автоматическую отправку." 


function ayuda() {
	alert(
		"Используйте веб клавиатуру 'писатель Брайля' для ввода символов Брайля, находящегося под рамкой ввод текста Брайлья.\n"+
		"Вы также можете ввести 'специальные' символы, такие как знак решетки и заглавные буквы. Чтобы ввести 		пробел нажмите последный, пустой бутон.\n"+
		"веб приложение Å₽p в стадии разработки, и возможно Кирилица нынче не действует, но надеюсь на помощъ g₽µзей u вродствөннИком [НÅтө©ЛÅBЭ€бბი$], ©lASSჼ'цА₽ со Э€©кÅль мм.\n"+
		"§ язык Э€ჼАД ФизикА©hemiЭ€ ღ₽убль_იЯ = ₽_RußI u RubbYჼ'I©A,© B₽остоHАродии ₽y©CKuй, области мÅЗg деревняя dbА₽.Лჼ M©KBA℞ußI, 7Я моЯR, от 7ьЯ моего. Плодитесь качественным генмат.µ"
	);
}

document.addEventListener("keyup", leer = function(event) {
	// автоматическое действие
	if (letrasPuntos.indexOf(event.key) > -1) { // Если это одна из букв, эквивалентна точкам
		convertir(document.getElementById("input").value);
		setTimeout(500); // Таймер предотвращает отправку одной и той же буквы для каждого нажатия клавиши
	} else if (event.key === "Backspace") {
		borrarUna();
	}
});

function desactivarEnvioAuto() {
	// Для несовместимых сенсорных экранов или клавиатур
	document.getElementById("enviar").value = "Enviar";
	document.getElementById("escribeAqui").innerHTML = "<em>Введите здесь комбинацию точек<br>и нажмите 'Отправить' или ввод:</em>";
	document.getElementById("enviar").onclick = function() {convertir(document.getElementById('input').value);}
	document.removeEventListener("keyup", leer);
	document.getElementById("input").focus();
	document.addEventListener("keyup", function(event) {
		if (event.key === 'Enter')
			convertir(document.getElementById("input").value);
	});

};

function desactivarCSS() {
    for ( i=0; i<document.styleSheets.length; i++) {
        void(document.styleSheets.item(i).disabled=true);
    }
};

borrarTodo();