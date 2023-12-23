const screenOne = document.querySelector(".screenOne");
const screenTwo = document.querySelector(".screenTwo");

const randomNumber = Math.round(Math.random() * 10);
let xAttempts = 1;

// Função Callback
function handleTryClick(event) {
    event.preventDefault();

    const inputNumber = document.querySelector("#inputNumber");
    

    if(Number(inputNumber.value) == randomNumber){
        screenOne.classList.add("hide");
        screenTwo.classList.remove("hide");

        screenTwo.querySelector("h2").innerText = `Você acertou em ${xAttempts} tentativa(s)!`;
    }
    
    inputNumber.value = ""
    xAttempts++;
};

// Eventos
const btnTry = document.querySelector("#btnTry");
const btnReset = document.querySelector("#btnReset");

btnTry.addEventListener('click',handleTryClick);
btnReset.addEventListener('click', function() {
    screenOne.classList.remove("hide");
    screenTwo.classList.add("hide");

    xAttempts = 1;
})
