(function (exports) {

  ScoreController = function () {

    frame = [];
    total = [0];
    spareCount = 0;
    strikeCount = 0;
    bowl = 0;
    scores = [];

    this.frame = function () {
      return frame;
    };
    this.total = function () {
      return total;
    };
    this.bonusCount = function () {
      return bonusCount;
    };
    this.strikeCount = function () {
      return strikeCount;
    };

    this.playTheGame = function (play1, play2 = 0) {
      
      checkTheScores(play1, play2, scores, frame);

      if (spareCount === 1) {
        calculateSpare(total, scores);
        spareCount--;
      }

      else if (strikeCount === 1 && play1 != 10) {
        calculateSingleStrike(total, scores);
        strikeCount--;
      }

      else if (strikeCount === 2 && play1 != 10) {
        calculateMultipleStrikes(total, scores);
        strikeCount--;
      }
      
      if (checkBonuses(play1, play2) === 1) {
        strikeCount++;
      }
      else if (checkBonuses(play1, play2) === 2) {
        spareCount++;
      }

      console.log("scores = " + scores);
      console.log("frames = " + frame);
      console.log("total = " + total );
      console.log("str c = " + strikeCount);
      console.log("spr c = " + spareCount);
      
    };
  };

  function calculateSingleStrike(total, scores) {
    total[total.length - 1] += scores.slice(0, 3).reduce((a, b) => a + b, 0);
    total.push(total[total.length - 1] + scores.slice(1, 3).reduce((a, b) => a + b, 0));
    scores.length = 0;
  }

  function calculateMultipleStrikes(total, scores) {

    for (i = 0; i < 2; i++) {
      console.log("mult strike bonus = " + scores);
      total.push(total[total.length - 1] + scores.slice(0, 3).reduce((a, b) => a + b, 0));
      scores.shift();
      console.log("total after shift = " + scores);
      console.log("scores after multi bonus are " + total);
    }
    total.push(total[total.length - 1] + scores.slice(0, 2).reduce((a, b) => a + b, 0));
  }
  

  function calculateSpare(total, scores) {
    total[total.length - 1] += scores.slice(0, 3).reduce((a, b) => a + b, 0);
    total.push( total[total.length - 1] + scores.slice(3, 4).reduce((a, b) => a + b, 0));
    scores.length = 0;
  }

  function checkTheScores(play1, play2, scores, frame) {
    if (play1 === 10) {
      scores.push(play1);
      frame.push(play1);
    } 
    else {
      scores.push(play1);
      scores.push(play2);
      frame.push(play1);
      frame.push(play2);
    }
  }

  function checkBonuses(play1, play2) {
     if (play1 === 10) {
       return 1;
     }
     if (play1 + play2 === 10) {
       return 2;
     }
  }

  exports.scoreController = ScoreController;
  //exports.scoreModel = new ScoreController();

})(this);