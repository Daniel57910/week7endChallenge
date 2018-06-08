const assert = require('assert');
let score = require('../../controllers/scoreController');
tst = new score.scoreController();
console.log(tst.total());
 //console.log(score.scoreController.frame());

describe ("ScoreController", function() {
  it("begins with a score and frame representing an empty array", function () {
    let testScore = new score.scoreController();
    assert.equal(testScore.total().length, 1);
    assert.equal(testScore.frame().length, 0);
  });

  describe("Bonus Checker", function() {
    it("makes the bonus count 0 by default", function () {
      let testScore = new score.scoreController();
      assert.equal(testScore.bonusCount(), 0);
    });

    it("increments the bonus count by 1 if the user scores a spare", function(){
       let testScore = new score.scoreController();
       testScore.playTheGame(7, 3);
       assert.equal(testScore.bonusCount(), 1);
    });

    it("increments the strike count by 1 if the user scores a strike", function() {
      let testScore = new score.scoreController();
      testScore.playTheGame(10);
      assert.equal(testScore.strikeCount(), 1);
    });
  });

  describe("Adding The Score", function() {
    it("adds the score + score[length - 1] to the next score", function() {
      let testScore = new score.scoreController();
      testScore.playTheGame(6, 3);
      testScore.playTheGame(8, 1);
      assert.equal(testScore.total()[testScore.total().length - 1], 18);
    });

    describe("The user scores a spare", function() {
      it("takes the first bowl of the next frame as a bonus if the user scores a spare", function() {
        let testScore = new score.scoreController();
        testScore.playTheGame(6, 4);
        testScore.playTheGame(8, 1);
        assert.equal(testScore.total()[testScore.total().length - 1], 27); 
      });

      it("correctly calculates two spares in a row", function() {
        let testScore = new score.scoreController();
        testScore.playTheGame(6, 4);
        testScore.playTheGame(8, 2);
        testScore.playTheGame(5, 1);
        assert.equal(testScore.total()[testScore.total().length - 1], 39); 
      });
    });

    describe("The user scores a strike", function () {
      it("adds the next frame to the previous score if a user scores a strike", function () {
        let testScore = new score.scoreController();
        testScore.playTheGame(10);
        testScore.playTheGame(7, 2);
        assert.equal(testScore.total()[testScore.total().length - 1], 28);
       });

       it("adds 2 consecutive strikes + a regular score to the total", function() {
        let testScore = new score.scoreController();
        testScore.playTheGame(10);
        testScore.playTheGame(10);
        testScore.playTheGame(5, 3);
        assert.equal(testScore.total()[testScore.total().length - 1], 28);
       });
    });
   



  });
});