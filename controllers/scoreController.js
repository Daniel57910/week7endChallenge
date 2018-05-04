(function (exports) {

  ScoreController = function () {

    frame = [];
    total = [0];
    bonusCount = 0;
    strikeCount = 0;
    bowl = 0;

    this.frame = function () {
      return frame;
    };
    this.total = function () {
      return total;
    };
    this.bonusCount = function () {
      return bonusCount;
    };
    this.strikeCount = function() {
      return strikeCount;
    };

    this.playTheGame = function(play1, play2 = 0) {

      current = [play1, play2];
      frame.push(current);

      if (bonusCount === 1) {
        calculateSpare(total, current);
        bonusCount -= 1;
      }

      if (strikeCount === 1 && play1 != 10) {
        calculateStrike(total, current);
      }

      if (checkBonuses(current) === 1) {
        strikeCount++;
      }

      else if (checkBonuses(current) === 2) {
        bonusCount++;
      }

      calculateScore(total, current);

      

      console.log(frame);
      console.log(total);

    };


  };


  function checkBonuses(current) {
    if (current[0] === 10) {
      return 1;
    }
    else if (current[0] + current[1] === 10) {
     return 2;
    }
  }

  function calculateSpare(total, current) {
    total[total.length - 1] += current[0];
  }

  function calculateStrike(total, current) {
    total[total.length - 1] += current[0] + current[1];
  }

  function calculateScore(total, current) {
    total.push(total[total.length - 1] + current[0] + current[1]);
  }



  exports.scoreController = ScoreController;
  //exports.scoreModel = new ScoreController();

})(this);
