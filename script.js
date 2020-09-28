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
  victory() {
    clearInterval(this.countdown);
    document.getElementById('vi).classList.add('visible');
  }                          
    
