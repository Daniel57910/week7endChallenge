(function (exports) {

  function ScoreController() {

    frame = [];
    total = [0];
    bonusCount = 0;
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

    this.getTheScore = function (play = 4) {
      bowl = play;
    };

    if (bonusCount > 0) {
      addBonusScore(bowl, total);
      bonusCount -= 1;
    }

    checkForBonus(bowl, frame);
    addTheScore(bowl, total);
    frame.push(bowl);

  }

  /* helper methods not to be called */
  function addBonusScore(bowl, total) {
    total[total.length - 1] += bowl;
  }

  function addTheScore(bowl, total) {
    total.push(total[total.length - 1] + bowl);
  }

  function checkForBonus(bowl, frame) {
    if (bowl === 10) {
      bonusCount += 2;
    } else if (bowl + frame[frame.length - 1] === 10) {
      bonusCount += 1;
    }
  }

  exports.scoreController = ScoreController;
  //exports.scoreModel = new ScoreController();

})(this);
