var playField = document.getElementById("playField");
var cards = [];

function newGame() {
    cards = [];
    
    let amountOfCards = prompt("How many cards?");
    
    for (let i = 0; i < amountOfCards; i++) {
        let setIndex = Math.floor(i / 2);
        let card = new Card(i, setIndex);
        cards[i] = card;
    }

    let cardsHtml = "";
    let shuffledList = cards.sort((_, __) => 0.5 - Math.random());

    for (let i = 0; i < shuffledList.length; i++) {
        cardsHtml += "<div id='card-index-" + shuffledList[i].index + "' class='card card-set-index-" + shuffledList[i].setIndex + "'></div>";
    }

    playField.innerHTML = cardsHtml;
}

function Card(index, setIndex) {
    this.index = index;
    this.setIndex = setIndex;
}