const readlineSync = require('readline-sync');

function ScoreController() {
  this.frame = [];
  this.total = [0];
}

ScoreController.prototype.reset = function () {
  this.frame = [];
  this.total = [0];
  this.bonusCount = -1;
};

ScoreController.prototype.getTheScore = function (firstBowl, secondBowl = 0) {
  if (firstBowl === 10) {
    console.log("STRIKE!");
  }

  this.frame.push([firstBowl, secondBowl]);
  this.total.push((this.total[this.total.length - 1]) + Number(firstBowl) + Number(secondBowl));
  return this;

};
