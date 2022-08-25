const OlderA = document.querySelector('.old_A');
const OlderC = document.querySelector('.old_C');
const OlderI = document.querySelector('.old_I');
const OlderS = document.querySelector('.old_S');
const ButtonsHard = document.querySelector('.buttons_container');
const Button2B = document.querySelector('.button_2B');
const ButtonB = document.querySelector('.button_B');
const ButtonHB = document.querySelector('.button_HB');
const ButtonH = document.querySelector('.button_H');
const Button2H = document.querySelector('.button_2H');


OlderA.addEventListener('click', () =>{
    OlderA.classList.add('active');
    ButtonsHard.classList.add('active');
    OlderC.classList.remove('active');
    OlderI.classList.remove('active');
    OlderS.classList.remove('active');
});
OlderC.addEventListener('click', () =>{
    OlderC.classList.add('active');
    ButtonsHard.classList.add('active');
    OlderA.classList.remove('active');
    OlderI.classList.remove('active');
    OlderS.classList.remove('active');
});
OlderI.addEventListener('click', () =>{
    OlderI.classList.add('active');
    ButtonsHard.classList.add('active');
    OlderA.classList.remove('active');
    OlderC.classList.remove('active');
    OlderS.classList.remove('active');
});
OlderS.addEventListener('click', () =>{
    OlderS.classList.add('active');
    ButtonsHard.classList.add('active');
    OlderA.classList.remove('active');
    OlderC.classList.remove('active');
    OlderI.classList.remove('active');
});

Button2B.addEventListener('click', () =>{
    Button2B.classList.add('active');
    ButtonB.classList.remove('active');
    ButtonHB.classList.remove('active');
    ButtonH.classList.remove('active');
    Button2H.classList.remove('active');
});
ButtonB.addEventListener('click', () =>{
    ButtonB.classList.add('active');
    Button2B.classList.remove('active');
    ButtonHB.classList.remove('active');
    ButtonH.classList.remove('active');
    Button2H.classList.remove('active');
});
ButtonHB.addEventListener('click', () =>{
    ButtonHB.classList.add('active');
    Button2B.classList.remove('active');
    ButtonB.classList.remove('active');
    ButtonH.classList.remove('active');
    Button2H.classList.remove('active');
});
ButtonH.addEventListener('click', () =>{
    ButtonH.classList.add('active');
    Button2B.classList.remove('active');
    ButtonB.classList.remove('active');
    ButtonHB.classList.remove('active');
    Button2H.classList.remove('active');
});
Button2H.addEventListener('click', () =>{
    Button2H.classList.add('active');
    Button2B.classList.remove('active');
    ButtonB.classList.remove('active');
    ButtonHB.classList.remove('active');
    ButtonH.classList.remove('active');
});