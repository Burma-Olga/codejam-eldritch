import ancientsData from "./data/ancients.js";
import blueCardsData from './data/mythicCards/blue/index.js';
import brownCardsData from './data/mythicCards/brown/index.js';
import greenCardsData from './data/mythicCards/green/index.js';


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
const DeskButton = document.querySelector('.desk_button');
const BlockColorButton = document.querySelector('.current_state');
const ManyColorCards = document.querySelector('.many_card');
const NextColorButton = document.querySelector('.next_card');


OlderA.addEventListener('click', () =>{
    OlderA.classList.add('active');
    ButtonsHard.classList.add('active');
    OlderC.classList.remove('active');
    OlderI.classList.remove('active');
    OlderS.classList.remove('active');
    BlockColorButton.classList.remove('active');
    ManyColorCards.classList.remove('active');
});
OlderC.addEventListener('click', () =>{
    OlderC.classList.add('active');
    ButtonsHard.classList.add('active');
    OlderA.classList.remove('active');
    OlderI.classList.remove('active');
    OlderS.classList.remove('active');
    BlockColorButton.classList.remove('active');
    ManyColorCards.classList.remove('active');
});
OlderI.addEventListener('click', () =>{
    OlderI.classList.add('active');
    ButtonsHard.classList.add('active');
    OlderA.classList.remove('active');
    OlderC.classList.remove('active');
    OlderS.classList.remove('active');
    BlockColorButton.classList.remove('active');
    ManyColorCards.classList.remove('active');
});
OlderS.addEventListener('click', () =>{
    OlderS.classList.add('active');
    ButtonsHard.classList.add('active');
    OlderA.classList.remove('active');
    OlderC.classList.remove('active');
    OlderI.classList.remove('active');
    BlockColorButton.classList.remove('active');
    ManyColorCards.classList.remove('active');
});
Button2B.addEventListener('click', () =>{
    Button2B.classList.add('active');
    DeskButton.classList.add('active');
    ButtonB.classList.remove('active');
    ButtonHB.classList.remove('active');
    ButtonH.classList.remove('active');
    Button2H.classList.remove('active');
    BlockColorButton.classList.remove('active');
    ManyColorCards.classList.remove('active');
});
ButtonB.addEventListener('click', () =>{
    ButtonB.classList.add('active');
    DeskButton.classList.add('active');
    Button2B.classList.remove('active');
    ButtonHB.classList.remove('active');
    ButtonH.classList.remove('active');
    Button2H.classList.remove('active');
    BlockColorButton.classList.remove('active');
    ManyColorCards.classList.remove('active');
});
ButtonHB.addEventListener('click', () =>{
    ButtonHB.classList.add('active');
    DeskButton.classList.add('active');
    Button2B.classList.remove('active');
    ButtonB.classList.remove('active');
    ButtonH.classList.remove('active');
    Button2H.classList.remove('active');
    BlockColorButton.classList.remove('active');
    ManyColorCards.classList.remove('active');
});
ButtonH.addEventListener('click', () =>{
    ButtonH.classList.add('active');
    DeskButton.classList.add('active');
    Button2B.classList.remove('active');
    ButtonB.classList.remove('active');
    ButtonHB.classList.remove('active');
    Button2H.classList.remove('active');
    BlockColorButton.classList.remove('active');
    ManyColorCards.classList.remove('active');
});
Button2H.addEventListener('click', () =>{
    Button2H.classList.add('active');
    DeskButton.classList.add('active');
    Button2B.classList.remove('active');
    ButtonB.classList.remove('active');
    ButtonHB.classList.remove('active');
    ButtonH.classList.remove('active');
    BlockColorButton.classList.remove('active');
    ManyColorCards.classList.remove('active');
});
DeskButton.addEventListener('click', () =>{
    BlockColorButton.classList.add('active');
    ManyColorCards.classList.add('active');
    DeskButton.classList.remove('active');
});
function GetRandomCards(myArray, number){
    let allCard = [];
    let rCard = [];
    for (let i = 0; i < number; i++) {
        let randCard = Math.floor(Math.random()*myArray.length);
        rCard = myArray[randCard];
        myArray.splice(randCard,1);
        //console.log(rCard);  
        allCard.push(rCard);
    }
    
    return allCard;
    }
    
let greenCards = GetRandomCards(greenCardsData,5);
console.log(greenCards);
let brownCards = GetRandomCards(brownCardsData,9);
console.log(brownCards);
let blueCards = GetRandomCards(blueCardsData,2);
console.log(blueCards);

function GetNewCardsList(){
    let listStage1 = [];
    let listStage1green = [];
    let listStage1brown = [];
    let listStage1blue = [];
    let listStage2 = [];
    let listStage2green = [];
    let listStage2brown = [];
    let listStage2blue = [];
    let listStage3 = [];
    let listStage3green = [];
    let listStage3brown = [];
    let listStage3blue = [];
    for(let i = 0; i < greenCards.length; i++) {
        if(i<1){
            listStage1green.push(greenCards[i]);
        }
        else if((i>=1)&&(i<3)){
            listStage2green.push(greenCards[i]);
        }
        else if(i>=3){
            listStage3green.push(greenCards[i]);
        }
    }
    for(let i = 0; i < brownCards.length; i++) {
        if(i<2){
            listStage1brown.push(brownCards[i]);
        }
        else if((i>=2)&&(i<5)){
            listStage2brown.push(brownCards[i]);
        }
        else if(i>=5){
            listStage3brown.push(brownCards[i]);
        }
    }
    for(let i = 0; i < blueCards.length; i++) {
        if(i<1){
            listStage1blue.push(blueCards[i]);
        }
        else if((i>=1)&&(i<2)){
            listStage2blue.push(blueCards[i]);
        }
        else if(i>=2){
            listStage3blue.push(blueCards[i]);
        }
    }
    
    listStage1 = listStage1green.concat(listStage1brown, listStage1blue);
    listStage2 = listStage2green.concat(listStage2brown, listStage2blue);
    listStage3 = listStage3green.concat(listStage3brown, listStage3blue);
    console.log(listStage1);
    console.log(listStage2);
    console.log(listStage3);
    let tempCard = Math.floor(Math.random()*listStage1.length);
    let nextCard = listStage1[tempCard];
    console.log(nextCard);
}
GetNewCardsList();

