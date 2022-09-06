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
    NextColorButton.classList.remove('active');
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
    NextColorButton.classList.remove('active');
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
    NextColorButton.classList.remove('active');
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
    NextColorButton.classList.remove('active');
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
    NextColorButton.classList.remove('active');
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
    NextColorButton.classList.remove('active');
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
    NextColorButton.classList.remove('active');
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
    NextColorButton.classList.remove('active');
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
    NextColorButton.classList.remove('active');
});

function GetRandomCards(myArray, number){
    let allCard = [];
    let rCard = [];
    for (let i = 0; i < number; i++) {
        let randCard = Math.floor(Math.random()*myArray.length);
        rCard = myArray[randCard];
        if (allCard.indexOf(rCard) === -1 ){allCard.push(rCard)}
        //allCard.splice(randCard,1);
        else{i--};
    }
    
    return allCard;
    }

function GetRandomVeryEasyCards(myArray, number, difficult){
    let difficultyArray = myArray.filter(card => card.difficulty == difficult);
    let difficultyNormalArray = myArray.filter(card => card.difficulty == 'normal');
    let newArrayFirst = [];
    let newArraySecond = [];
    let newColorArray = [];
    if(difficultyArray.length<=number){
        let number2 = number - difficultyArray.length;
        newArrayFirst = difficultyArray;
        newArraySecond = GetRandomCards(difficultyNormalArray, number2);
    }
    else if(difficultyArray.length>number){
        newArrayFirst = GetRandomCards(difficultyArray, number);
    }
    newColorArray = newArrayFirst.concat(newArraySecond);
    return newColorArray;
        
}

function GetNewCardsList(gr1, br1, bl1, gr2, br2, bl2, gr3, br3, bl3){
    let greenCards;
    let brownCards;
    let blueCards;
    let greenCardsDataWithoutHard = greenCardsData.filter(card => card.difficulty !== 'hard');
    let brownCardsDataWithoutHard = brownCardsData.filter(card => card.difficulty !== 'hard');
    let blueCardsDataWithoutHard = blueCardsData.filter(card => card.difficulty !== 'hard');
    let greenCardsDataWithoutEasy = greenCardsData.filter(card => card.difficulty !== 'easy');
    let brownCardsDataWithoutEasy = brownCardsData.filter(card => card.difficulty !== 'easy');
    let blueCardsDataWithoutEasy = blueCardsData.filter(card => card.difficulty !== 'easy');   

    if(Button2B.classList.contains('active')){
        greenCards = GetRandomVeryEasyCards(greenCardsData,gr1+gr2+gr3,'easy');
        brownCards = GetRandomVeryEasyCards(brownCardsData,br1+br2+br3,'easy');
        blueCards = GetRandomVeryEasyCards(blueCardsData,bl1+bl2+bl3,'easy');
    }
    if(ButtonB.classList.contains('active')){
        greenCards = GetRandomCards(greenCardsDataWithoutHard,gr1+gr2+gr3);
        brownCards = GetRandomCards(brownCardsDataWithoutHard,br1+br2+br3);
        blueCards = GetRandomCards(blueCardsDataWithoutHard,bl1+bl2+bl3);
    }
    else if(ButtonHB.classList.contains('active')){
        greenCards = GetRandomCards(greenCardsData,gr1+gr2+gr3);
        brownCards = GetRandomCards(brownCardsData,br1+br2+br3);
        blueCards = GetRandomCards(blueCardsData,bl1+bl2+bl3);
    }
    else if(ButtonH.classList.contains('active')){
        greenCards = GetRandomCards(greenCardsDataWithoutEasy,gr1+gr2+gr3);
        brownCards = GetRandomCards(brownCardsDataWithoutEasy,br1+br2+br3);
        blueCards = GetRandomCards(blueCardsDataWithoutEasy,bl1+bl2+bl3);
    }
    else if(Button2H.classList.contains('active')){
        greenCards = GetRandomVeryEasyCards(greenCardsData,gr1+gr2+gr3,'hard');
        brownCards = GetRandomVeryEasyCards(brownCardsData,br1+br2+br3,'hard');
        blueCards = GetRandomVeryEasyCards(blueCardsData,bl1+bl2+bl3,'hard');
    }

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
    return [listStage1, listStage2, listStage3];
    
}
    let stages = [[],[],[]];


DeskButton.addEventListener('click', () =>{
    BlockColorButton.classList.add('active');
    ManyColorCards.classList.add('active');
    DeskButton.classList.remove('active');
    stages = [[],[],[]];
    StageTextFirst.style.color='purple';
    StageTextSecond.style.color='purple';
    StageTextThird.style.color='purple';
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
        UpdateDots(stages);
});
const DotGreenFirst = document.querySelector('.dot.green.first');
const DotBrownFirst = document.querySelector('.dot.brown.first');
const DotBlueFirst = document.querySelector('.dot.blue.first');
const DotGreenSecond = document.querySelector('.dot.green.second');
const DotBrownSecond = document.querySelector('.dot.brown.second');
const DotBlueSecond = document.querySelector('.dot.blue.second');
const DotGreenThird = document.querySelector('.dot.green.third');
const DotBrownThird = document.querySelector('.dot.brown.third');
const DotBlueThird = document.querySelector('.dot.blue.third');
const StageTextFirst = document.querySelector('.stage_text.first');
const StageTextSecond = document.querySelector('.stage_text.second');
const StageTextThird = document.querySelector('.stage_text.third');


function UpdateDots(stages){
    for(let i=0; i<=2; i++){
        let DotGreen = 0;
        let DotBrown = 0;
        let DotBlue = 0;
        for (let obj of stages[i]){
            if(obj['color']==='green'){
                DotGreen +=1;
            }
            else if(obj['color']==='brown'){
                DotBrown +=1;
            }
            else if(obj['color']==='blue'){
                DotBlue +=1;
            }
        }
        if(i===0){
            DotGreenFirst.textContent=DotGreen;
            DotBrownFirst.textContent=DotBrown;
            DotBlueFirst.textContent=DotBlue;
            if((DotGreen===0)&&(DotBrown===0)&&(DotBlue===0)){
                StageTextFirst.style.color='red';
            }
        }
        else if(i===1){
            DotGreenSecond.textContent=DotGreen;
            DotBrownSecond.textContent=DotBrown;
            DotBlueSecond.textContent=DotBlue;
            if((DotGreen===0)&&(DotBrown===0)&&(DotBlue===0)){
                StageTextSecond.style.color='red';
            }
        }
        else if(i===2){
            DotGreenThird.textContent=DotGreen;
            DotBrownThird.textContent=DotBrown;
            DotBlueThird.textContent=DotBlue;
            if((DotGreen===0)&&(DotBrown===0)&&(DotBlue===0)){
                StageTextThird.style.color='red';
            }       
        }
    }
}

ManyColorCards.addEventListener('click', () =>{
    NextColorButton.classList.add('active');
    
    let stage = [];
    if (stages[0].length>0) {stage = stages[0]}
    else if (stages[1].length>0) {stage = stages[1]}
    else if (stages[2].length>0) {stage = stages[2]}
    
    let tempCard = Math.floor(Math.random()*stage.length);
    let nextCard = stage[tempCard];
    stage.splice(tempCard, 1);
    console.log(nextCard);
    NextColorButton.style.backgroundImage = `url(${nextCard['cardFace']})`;
    if ((stages[0].length===0)&&(stages[1].length===0)&&(stages[2].length===0)){
        ManyColorCards.classList.add('end');
        ManyColorCards.classList.remove('active');
    }
    
    UpdateDots(stages);
    }
    
    
);

    
