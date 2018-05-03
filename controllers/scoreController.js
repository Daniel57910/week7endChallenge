const readlineSync = require('readline-sync');

function ScoreController() {

  frame = [];
  total = [0];

  getTheScore = function(bowl = 4){
    frame.push(bowl);
    
    if (bowl === 10) {
      calculateBonus(2);
    }
    else if (total[total.length -1] == 10) {
      calculateBonus(1);
    }
    total.push(total[total.length - 1] + bowl);

    function calculateBonus(bonus) {
      for (i = 0; i < bonus; i++) {
        total[total.length - 1] += bowl;
      }
    }
  };
  
}

test = new ScoreController();
getTheScore(3);
getTheScore(7);
getTheScore(1);
console.log(total);
console.log(frame);


module.exports = scoreController = new ScoreController();

