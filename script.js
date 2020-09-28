class MissOrMatch {
  constructor (totalTime, cards) {
    this.cardsArray=cards;
    this.totalTime=totalTime;
    this.timeRemaining=totalTime;
    this.timer=document.getElementById('time-remaining')
    this.ticker=document.getElemementById('flips');
  }
  
  startGame() {
    this.totalClicks=0;
    this.timeRemaining=this.totalTime;
    this.cardToCheck=null;
    this.matchedCrads
    
