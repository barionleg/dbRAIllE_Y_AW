const litterae = [
'а', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и',
'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т',
'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ъ', 'ы', 'ь',
'э', 'ю', 'я',

    '.', ',', ';', ':', '-',
    '?', '!', '"', '(', ')', '*',

    '$','%', '=', '+', '#',
    '|', '\'', '/', '\\', '{', '}',
    '[', ']', '@', '&',

    '¿', '¡',

    ' ', "\n", "\t"
];
const braille = [
    "⠁","⠃","⠺","⠛","⠙","⠑","⠡","⠚","⠵","⠊",
    "⠯","⠅","⠇","⠍","⠝","⠕","⠏","⠗","⠎","⠞",
    "⠥","⠋","⠓","⠉","⠟","⠱","⠭","⠷","⠮","⠾",    
    "⠪","⠳","⠫",             

    // знаки препинания
    "⠙", "⠂", "⠆", "⠒", "⠤",
	"⠢", "⠋", "⠦", "⠴", "⠣","⠜", 
    "⠔",

    "⠸⠜", "⠸⠴", "⠶", "⠖", "⠼⠐",
    "⠸", "⠄", "⠠⠂", "⠐⠄", "⠐⠸", "⠸⠂",
    "⠷", "⠾", "⠐", "⠠⠯",

    "⠢", "⠖",

    "⠀", "\n", "\t"
];
const nums = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
NUMERAL = false;


function convertir(input) {
    // Каждая буква в «inpute» …
    for (var i=0; i <= input.length; i++) {

        // если это число
        if (nums.indexOf(input[i]) > -1) {
            if ( ! NUMERAL) {
                NUMERAL = true;
                document.getElementById("output").value += "⠼";
            }
            document.getElementById("output").value += braille[nums.indexOf(input[i])];
            continue;
        }
        // Если нет, то это буква, пробел или знак препинания.
         else {
            // Он сравнивается с каждой буквой в «litterae».
            for (var j=0; j<=63; j++) {

                if (litterae[j] === input[i]) { // Пунктуация в нижнем регистре
                    if (NUMERAL && j <10) {
                        document.getElementById("output").value += "⠐";
                    }
                    document.getElementById("output").value += braille[j];
                    NUMERAL=false;
                    continue;
                }
                else if (litterae[j].toUpperCase() === input[i]) { // Заглавная буква
                    document.getElementById("output").value += "⠨";
                    document.getElementById("output").value += braille[j];
                    NUMERAL=false;
                    continue;
                }
            }
        }
    }
};

function borrarTodo () {
    document.getElementById("input").value = "";
    document.getElementById("output").value = "";
};

function desactivarCSS() {
    for ( i=0; i<document.styleSheets.length; i++) {
        void(document.styleSheets.item(i).disabled=true);
    }
};

function guardarTxt() {
    // Сохраните результат в виде текстового документа для загрузки.

    let textToSave = document.getElementById('output').value;

    if (textToSave.length <1) {
        alert("Вы еще не ввели текст");
        return 1;
    }  

    let documento = document.createElement('a');
    let creditos = "\n\nБлагодарим вас за использование BrailleTermWeb, бесплатного приложения с открытым исходным кодом.";
    textToSave += creditos;
  
    documento.href = 'data:attachment/text,' + encodeURI(textToSave);
    documento.target = '_blank';
    documento.download = 'Text_v_Braille.txt';
    documento.click();
};

borrarTodo();