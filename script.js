class MissOrMatch {
  constructor (totalTime, cards) {
    this.cardsArray = cards;
    this.totalTime = totalTime;
    this.timeRemaining = totalTime;
    this.timer=document.getElementById('time-remaining')
    this.ticker=document.getElemementById('flips');
  }
  
  startGame() {
    this.totalClicks = 0;
    this.timeRemaining = this.totalTime;
    this.cardToCheck = null;
    this.matchedCards = [];
    this.busy = true;
    setTimeout(() => {
      this.shuffleCards(this.cardsArray);
      this.countdown=this.startCountdown();
      this.busy = false;
    }, 500)
    this.hideCards();
    this.timeRemaining;
    this.ticker.innerText = this.totalClicks;
  }
  startCountdown() {
    return setInterval(() => {
      this.timeRemaining--;
      this.timer.innerText=this.timeRemaining;
      if(this.timeRemaining === 0)
        this.gameOver();
    }, 1000);
  }
  gameOver() {
    clearInterval(this.countdown);
    document.getElementById('game-over-text').classList.add('visible');
  }
  youWin() {
    clearInterval(this.countdown);
    document.getElementById('you-win-text').classList.add('visible');
  }                          
  hideCards() {
    this.cardsArray.forEach(card => {
      card.classList.remove('visible');
      card.classList.remove('matched');
    });
  }
  flipCard(card) {
      if(this.canFlipCard(card)) {
        this.totalClicks++;
        this.ticker.innerText = this.totalClicks;
        card.classList.add('visible');
        
        if(this.cardToCheck) 
            this.checkForCardMatch(card);
      } else {
           this.cardToCheck = card;
      }
   }
}
checkForCardMatch(card) {
     if(this.getCardType(card) === this.getCardType(this.cardToCheck))
          this.cardMatch(card, this.cardToCheck);
      else
           this.cardMismatch(card, this.card.ToCheck);
  
      this.cardToCheck = null;
}
cardMatch(card1, card2) {
    this.matchedCards.push(card1);
    this.matchedCards.push(card2);
     card1.classList.add('matched');
     card2.classList.add('matched');
     if(this.matchedCards.length === this.cardsArray.length)
         this.youWin();
}

  
