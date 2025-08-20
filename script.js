let runningtotal = 0;
let buffer = "0";
let previousOperator;

/* funcao que faz o nome ficar trocando utilidade publica*/
function apresentacao(elementId, texts, speed = 100, index = 0) {
    let i = 0;
    const element = document.getElementById(elementId);
    element.innerText = '';
    function typing() {
        if (i < texts[index].length) {
            element.innerHTML += texts[index].charAt(i);
            i++;
            setTimeout(typing, speed);
        } else {
            setTimeout(function() {
                index = (index + 1) % texts.length;
                apresentacao(elementId, texts, speed, index);
            }, 5000);
        }
    }
    typing();
}

window.onload = function() {
    apresentacao("apresentacao-texto", ["CRIADO POR", "PHTSILVA", "Calculadora"], 80);
};


/* Demorei para pegar o jeito de como usa o Js vai consegui entender */
const screen = document.querySelector('.tela');

function buttonClick(value) {
    if (isNaN(value)) {
        handleSymbol(value);
    } else{
        handleNumber(value);
    }
    screen.innerText = buffer;
}

function handleSymbol(symbol){
    switch(symbol) {
        case 'C':
            buffer = "0";
            runningtotal = 0;
            break;
        case "=":
            if(previousOperator === null) {
                return;
            }
            flushOperation(parseInt(buffer));
            previousOperator = null;
            buffer = runningtotal;
            runningtotal = 0;
            break;
        case "←":
            if(buffer.length === 1){
                buffer = '0';
            }else{
                buffer = buffer.substring(0, buffer.length - 1);
            }
            break;
        case '+':
        case '-':
        case 'x':
        case '÷':
            handleMath(symbol);
            break;
    }
}

function handleMath(symbol) {
    if(buffer === '0'){
        return;
    }

    const intbuffer = parseInt(buffer);

    if(runningtotal === 0){
        runningtotal = intbuffer;
    }else {
        flushOperation(intbuffer);
    }
    previousOperator = symbol;
    buffer = "0";
}
/* parte da funcao que realiza as operacoes numericas */
function flushOperation(intbuffer) {
    if(previousOperator === "+"){
        runningtotal += intbuffer;
    }else if(previousOperator === "-"){
        runningtotal -= intbuffer;
    }else if(previousOperator === "x"){
        runningtotal *= intbuffer;
    }else if(previousOperator === "÷"){
        runningtotal /= intbuffer;
    }
}

function handleNumber(numberString) {
    if (buffer === "0") {
        buffer = numberString;
    } else {
        buffer += numberString;
    }
}

function init(){
    const buttons = document.querySelectorAll('.calc-btn');
    buttons.forEach(function(button) {
        button.addEventListener('click', function(event) {
            buttonClick(event.target.innerText);
        });
    });
}

init();

/* Qualquer erro de digitacao meu teclado nn tem acento */