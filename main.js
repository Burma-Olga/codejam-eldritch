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
    Button2B.classList.remove('active');
    ButtonB.classList.remove('active');
    ButtonHB.classList.remove('active');
    ButtonH.classList.remove('active');
    Button2H.classList.remove('active');
    DeskButton.classList.remove('active');
});
OlderC.addEventListener('click', () =>{
    OlderC.classList.add('active');
    ButtonsHard.classList.add('active');
    OlderA.classList.remove('active');
    OlderI.classList.remove('active');
    OlderS.classList.remove('active');
    BlockColorButton.classList.remove('active');
    ManyColorCards.classList.remove('active');
    Button2B.classList.remove('active');
    ButtonB.classList.remove('active');
    ButtonHB.classList.remove('active');
    ButtonH.classList.remove('active');
    Button2H.classList.remove('active');
    DeskButton.classList.remove('active');
});
OlderI.addEventListener('click', () =>{
    OlderI.classList.add('active');
    ButtonsHard.classList.add('active');
    OlderA.classList.remove('active');
    OlderC.classList.remove('active');
    OlderS.classList.remove('active');
    BlockColorButton.classList.remove('active');
    ManyColorCards.classList.remove('active');
    Button2B.classList.remove('active');
    ButtonB.classList.remove('active');
    ButtonHB.classList.remove('active');
    ButtonH.classList.remove('active');
    Button2H.classList.remove('active');
    DeskButton.classList.remove('active');
});
OlderS.addEventListener('click', () =>{
    OlderS.classList.add('active');
    ButtonsHard.classList.add('active');
    OlderA.classList.remove('active');
    OlderC.classList.remove('active');
    OlderI.classList.remove('active');
    BlockColorButton.classList.remove('active');
    ManyColorCards.classList.remove('active');
    Button2B.classList.remove('active');
    ButtonB.classList.remove('active');
    ButtonHB.classList.remove('active');
    ButtonH.classList.remove('active');
    Button2H.classList.remove('active');
    DeskButton.classList.remove('active');
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

function GetRandomCards(myArray, number){
    let allCard = [];
    let rCard = [];
    for (let i = 0; i < number; i++) {
        let randCard = Math.floor(Math.random()*myArray.length);
        rCard = myArray[randCard];
        myArray.splice(randCard,1);
        allCard.push(rCard);
    }
    
    return allCard;
    }
    
let greenCards = GetRandomCards(greenCardsData,5);
//console.log(greenCards);
let brownCards = GetRandomCards(brownCardsData,9);
//console.log(brownCards);
let blueCards = GetRandomCards(blueCardsData,2);
//console.log(blueCards);

function GetNewCardsList(gr1, br1, bl1, gr2, br2, bl2, gr3, br3, bl3){
    let greenCards = GetRandomCards(greenCardsData,gr1+gr2+gr3);
    let brownCards = GetRandomCards(brownCardsData,br1+br2+br3);
    let blueCards = GetRandomCards(blueCardsData,bl1+bl2+bl3);
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
        if(i<gr1){
            listStage1green.push(greenCards[i]);
        }
        else if((i>=gr1)&&(i<gr1+gr2)){
            listStage2green.push(greenCards[i]);
        }
        else if(i>=gr1+gr2){
            listStage3green.push(greenCards[i]);
        }
    }
    for(let i = 0; i < brownCards.length; i++) {
        if(i<br1){
            listStage1brown.push(brownCards[i]);
        }
        else if((i>=br1)&&(i<br1+br2)){
            listStage2brown.push(brownCards[i]);
        }
        else if(i>=br1+br2){
            listStage3brown.push(brownCards[i]);
        }
    }
    for(let i = 0; i < blueCards.length; i++) {
        if(i<bl1){
            listStage1blue.push(blueCards[i]);
        }
        else if((i>=bl1)&&(i<bl1+bl2)){
            listStage2blue.push(blueCards[i]);
        }
        else if(i>=bl1+bl2){
            listStage3blue.push(blueCards[i]);
        }
    }
    
    listStage1 = listStage1green.concat(listStage1brown, listStage1blue);
    listStage2 = listStage2green.concat(listStage2brown, listStage2blue);
    listStage3 = listStage3green.concat(listStage3brown, listStage3blue);
    //console.log(listStage1);
    //console.log(listStage2);
    //console.log(listStage3);
    return [listStage1, listStage2, listStage3];
    
}
    let stages = [[],[],[]];


DeskButton.addEventListener('click', () =>{
    BlockColorButton.classList.add('active');
    ManyColorCards.classList.add('active');
    DeskButton.classList.remove('active');
    stages = [[],[],[]];
    if(OlderA.classList.contains('active')){
        stages = GetNewCardsList(1,2,1,2,3,1,2,4,0);
    }
   if(OlderC.classList.contains('active')){
        stages = GetNewCardsList(0,2,2,1,3,0,3,4,0);
    }
    if(OlderI.classList.contains('active')){
        stages = GetNewCardsList(0,2,1,2,3,1,3,4,0);
        }
    if(OlderS.classList.contains('active')){
        stages = GetNewCardsList(1,2,1,3,2,1,2,4,0);
        }
    console.log(stages);
    //console.log(OlderA.classList.contains('active'));
});
ManyColorCards.addEventListener('click', () =>{
    NextColorButton.classList.add('active');
    
    let stage = [];
    if (stages[0].length>0) {stage = stages[0]
    //console.log(0)
    }
    else if (stages[1].length>0) {stage = stages[1]}
    else if (stages[2].length>0) {stage = stages[2]}
    let tempCard = Math.floor(Math.random()*stage.length);
    let nextCard = stage[tempCard];
    stage.splice(tempCard, 1);
    console.log(nextCard);
            //console.log(stages);

    NextColorButton.style.backgroundImage = `url(${nextCard['cardFace']})`;
    }
        
    
);
    
    
