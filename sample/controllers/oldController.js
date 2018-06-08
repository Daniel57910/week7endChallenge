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

      bonusFlag = 0;
      console.log("bonus flag = " + bonusFlag);
      checkTheScores(play1, play2, scores, frame);

      if (strikeCount === 1 && play1 != 10) {
        console.log("SINGLE BONUS");
        calculateSingleStrike(total, scores);
        strikeCount--;
        scores = [];
        bonusFlag = 1;
      } else if (strikeCount === 2 & play1 != 10) {
        console.log("MULTI BONUS");
        calculateMultipleStrikes(total, scores);
        strikeCount = 0;
        scores = [];
        bonusFlag = 1;
      }

      if (spareCount === 1) {
        calculateSpare(total, scores);
        spareCount--;
        bonusFlag = 1;
        scores = [];
      }

      if (checkBonuses(play1, play2) === 1) {
        strikeCount++;
        bonusFlag = 1;
      } else if (checkBonuses(play1, play2) === 2) {
        spareCount++;
        bonusFlag = 1;
      }



      if (bonusFlag === 0) {
        console.log("regular score calculated");
        calculateRegularScore(play1, play2, total);
        scores = [];
      }


      console.log("scores = " + scores);
      console.log("frames = " + frame);
      console.log("total = " + total);
      console.log("str c = " + strikeCount);
      console.log("spr c = " + spareCount);
      console.log("bonusFlag = " + bonusFlag);
      console.log("\n");

    };
  };

  function calculateRegularScore(play1, play2, total) {
    total.push(total[total.length - 1] + play1 + play2);
  }

  function calculateSingleStrike(total, scores) {
    total.push(total[total.length - 1] + 10 + scores[0]);
    secondPush = scores[0] + scores[1];
    total.push(total[total.lenght - 1] + secondPush);
  }

  function calculateMultipleStrikes(total, scores) {
    for (i = 0; i < 2; i++) {
      shift = scores.slice(0, 3).reduce((a, b) => a + b, 0);
      total.push(total[total.length - 1] + shift);
      scores.shift();
    }
    total.push(total[total.length - 1] + scores[0] + scores[1]);
  }

  function calculateSpare(total, scores) {
    total.push(total[total.length - 1] + scores.slice(0, 3).reduce((a, b) => a + b, 0));
    total.push(total[total.length - 1] + scores[scores.length - 1]);
  }

  function checkTheScores(play1, play2, scores, frame) {
    if (play1 === 10) {
      scores.push(play1);
      frame.push(play1);
    } else {
      scores.push(play1);
      scores.push(play2);
      frame.push(play1);
      frame.push(play2);
    }
  }

  function checkBonuses(play1, play2) {
    if (play1 === 10) {
      console.log("STRIKE BONUS");
      return 1;
    }
    if (play1 + play2 === 10) {
      return 2;
      console.log("spare bonus");
    }
  }

  exports.scoreController = ScoreController;
  //exports.scoreModel = new ScoreController();

})(this);