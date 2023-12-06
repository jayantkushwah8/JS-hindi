
let cards = []
let sum = 0
let hasBlackjack = false;
let isAlive = true;
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardEl = document.getElementById("card-el")

let player = {
    name : "Jayant",
    chips : 145
}
let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + " : $" + player.chips 

function getRandomCard(){

    if( (Math.floor(Math.random()*13) + 1) == 1 ){
        return 11;
    }else if((Math.floor(Math.random()*13) + 1) >= 11){
        return 10;
    }else {
        return (Math.floor(Math.random()*13) + 1) ;
    }
}

function startGame(){
    isAlive = true ; 
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard;
    renderGame();
}

function renderGame() {
    
    cardEl.textContent = "Cards: " 
    for(let i=0 ; i  < cards.length ; i++){
        cardEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "Sum: " + sum;
    if (sum < 21) {
        message = ("Do you want to draw new card?")

    } else if (sum === 21) {
        message = ("Whoo! You've got the blackjack.")
        hasBlackjack = true;
    } else {
        message = "Oh!! You are out of the game."
        isAlive = false;
    }
    messageEl.textContent = message;
}
    function newCard(){
        if(isAlive === true && hasBlackjack === false){
        let card = getRandomCard();
        sum += card;
        cards.push(card )
        renderGame();
        } 
    }

    
   

