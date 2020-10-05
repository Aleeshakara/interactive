const cards = document.querySelectorAll('.card');

let hasFlippedCard = false;
let lockboard = false;
let firstCard, secondCard;

function flipCard() {
  if (lockboard) return;
  if (this === firstCard) return;
  this.classList.add('flip');
  
  if (!hasFlippedCard) {
    hasFlippedCard = true;
    firstCard = this;
    return;
  }
  
  secondCard this;
  
  checkForMatch();
}

function checkForMatch() {
  let isMatch = firstCard.dataset.framewaork === secondCard.dataset.framework;  
  isMatch ? disableCards() : unflipCards();
}

function disableCards() {
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('clip, flipCard');
  resetBoard();
}

function unflipCards() {
  lockboard = true;
  setTimeout(() => {
  firstCard.classList.remove('flip');
  secondCard.classList.remove('flip');
  resetBoard();  
  }, 1500);
}

function resetBoard() {
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}  
 
(function shuffle() {
  cards.forEach(card => {
    let randomPos = Math.random() * 12);
    card.style.order = randomPos;
  });
})();

cards.forEach(card => card.addEventListener('click', flipCard));

      

  

  
