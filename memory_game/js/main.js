var cards = [
  {
  rank: 'queen',
  suit: 'hearts',
  cardImage: 'images/queen-of-hearts.png'
  },
  {
  rank: 'queen',
  suit: 'diamonds',
  cardImage: 'images/queen-of-diamonds.png'
  },
  {
  rank: 'king',
  suit: 'hearts',
  cardImage: 'images/king-of-hearts.png'
  },
  {
  rank: 'king',
  suit: 'diamonds',
  cardImage: 'images/king-of-diamonds.png'
  }
];
var cardsInPlay = [];
var gameBoardDiv = document.getElementById('game-board');

function checkForMatch() {
  if(cardsInPlay[0] === cardsInPlay[1]) {
  alert("Success, you found the match!");
  } else {
    alert("Sorry, try again.");
  }
}
  
function flipCard() {
  let cardId = this.getAttribute('data-id');
  console.log("User flipped " + cards[cardId].rank);
  console.log(cards[cardId].cardImage);
  console.log(cards[cardId].suit);
  this.setAttribute('src',cards[cardId].cardImage);
  cardsInPlay.push(cards[cardId].rank);
  if (cardsInPlay.length === 2) {
    checkForMatch();
  }
}

function createBoard() {
  for (let i = 0; i < cards.length; i++) {
    let cardElement =  document.createElement('img');
    cardElement.setAttribute('src','images/back.png');
    cardElement.setAttribute('data-id',i);
    cardElement.addEventListener('click',flipCard);
    gameBoardDiv.appendChild(cardElement);
  }
}
  
createBoard();
  
  