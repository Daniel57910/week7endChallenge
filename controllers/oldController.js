(function (exports) {

  ScoreController = function () {

    frame = [];
    total = [0];
    bonusCount = 0;
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

      frame.push(current);

      if (play1 === 10 && play2 === 0) {
        scores.push(play1);
      } else {
        scores.push(play1);
        scores.push(play2);
      }

      /*re-write tomorrow morning */
      if (bonusCount === 1) {
        calculateSpare(total, scores);
        calculateScore(total, scores);
        bonusCount -= 1;
      } else if (strikeCount === 1 && play1 != 10) {
        calculateSingleStrike(total, scores);
        strikeCount--;
      } else {
        calculateScore(total, current);
      }

      if (checkBonuses(current) === 1) {
        strikeCount++;
        console.log(strikeCount + "strike count");
      } else if (checkBonuses(current) === 2) {
        bonusCount++;
      }

      console.log("frame = " + frame);
      console.log("total = " + total);
      console.log(scores);
    };


  };

  function checkBonuses(current) {
    if (current[0] === 10) {
      return 1;
    } else if (current[0] + current[1] === 10) {
      return 2;
    }
  }

  function calculateSpare(total, current) {
    total[total.length - 1] += current[0];
  }

  function calculateSingleStrike(total, scores) {
    console.log("scores for single strike = " + scores);
    console.log(" sliced scores =  " + scores.slice(0, 3).reduce((a, b) => a + b, 0));
    total[total.length - 1] += scores.slice(0, 3).reduce((a, b) => a + b, 0);
    scores.shift(0);
    console.log("after bonus = " + total[total.length - 1]);
    console.log("scores after are " + scores);
  }

  function calculateScore(total, current) {
    total.push(total[total.length - 1] + current[0] + current[1]);
  }


  exports.scoreController = ScoreController;
  //exports.scoreModel = new ScoreController();

})(this);