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

      if (strikeCount >= 3) {
        console.log("MAX BONUS");
      }

      else if (strikeCount < 3 && play1 != 10) {
        calculateStrike(total, frame, strikeCount);
        strikeCount--;
      }

      if (checkBonuses(current) === 1) {
        strikeCount++;
        console.log(strikeCount + "strike count");
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

  function calculateStrike(total, frame, strikeCount) {
    j = frame.length - 1;
    for (i = 0; i < strikeCount; i++, j--) {
      add = frame[j];
      console.log("add = " + add);
      total[total.length - 1] += add[0] + add[1];
      console.log(total);
    }   
  }

  function calculateScore(total, current) {
    total.push(total[total.length - 1] + current[0] + current[1]);
  }


  exports.scoreController = ScoreController;
  //exports.scoreModel = new ScoreController();

})(this);
