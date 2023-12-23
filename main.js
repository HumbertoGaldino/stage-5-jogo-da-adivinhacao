// Variáveis
const screenOne = document.querySelector(".screenOne");
const screenTwo = document.querySelector(".screenTwo");
const btnTry = document.querySelector("#btnTry");
const btnReset = document.querySelector("#btnReset");

let randomNumber = Math.round(Math.random() * 10);
let xAttempts = 1;

// Eventos
btnTry.addEventListener('click',handleTryClick);
btnReset.addEventListener('click', handleResetClick);

document.addEventListener('keydown', handleEnterClick);

// Funções 

function toggleScreen(){
    screenOne.classList.toggle("hide");
    screenTwo.classList.toggle("hide");
}

function handleEnterClick(event) {
    if(event.key == "Enter" && screenOne.classList.contains("hide")){
        handleResetClick();
    }
}

// Callbacks
function handleTryClick(event) {
    event.preventDefault();

    const inputNumber = document.querySelector("#inputNumber");
    

    if(Number(inputNumber.value) == randomNumber){
        toggleScreen();

        screenTwo.querySelector("h2").innerText = `Você acertou em ${xAttempts} tentativa(s)!`;
    }
    
    inputNumber.value = ""
    xAttempts++;
};

function handleResetClick(event){
    toggleScreen();
    randomNumber = Math.round(Math.random() * 10);
    xAttempts = 1;
}