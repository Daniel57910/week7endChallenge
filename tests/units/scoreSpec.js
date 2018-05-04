const assert = require('assert');
let score = require('../../controllers/scoreController');
tst = new score.scoreController();
console.log(tst.total());
 //console.log(score.scoreController.frame());

describe ("ScoreController", function() {

  it("begins with a score representing an empty array", function() {
    console.log(score.scoreController);
    let testScore = new score.scoreController(); 
    assert.equal(testScore.total().length, 1);
    assert.equal(testScore.frame().length, 0);
  });


  describe("BonusCount", function() {
    it("makes the bonus count 0 by default", function() {
      let testScore = new score.scoreController();
      assert.equal(testScore.bonusCount(), 0);
    });
     it("makes the bonus count 1 if the previous + bowl == 10", function () {
       let testScore = new score.scoreController();
       testScore.getTheScore(6);
       testScore.getTheScore(4);
       assert.equal(testScore.bonusCount(), 1);
     });
     it("makes the bonus count 2 if the user scores a strike", function() {
       let testScore = new score.scoreController();
       testScore.getTheScore(10);
       assert.equal(testScore.bonusCount(), 2);
     });
  });

  describe("Adding Score", function() {
    it("adds the bowl to the most recent iteration of the score", function() {
      let testScore = new score.scoreController();
      testScore.getTheScore(4);
      testScore.getTheScore(4);
      assert.equal(testScore.total()[testScore.total().length - 1], 8);
    });

    it("doubles the next two inputs if the user scores a strike", function() {
      let testScore = new score.scoreController();
      testScore.getTheScore(10);
      testScore.getTheScore(4);
      testScore.getTheScore(4);
      assert.equal(testScore.total()[testScore.total().length - 1], 26);
    });

    it("doubles the next input if the user scores a spare", function() {
      let testScore = new score.scoreController();
      testScore.getTheScore(6);
      testScore.getTheScore(4);
      testScore.getTheScore(4);
      assert.equal(testScore.total()[testScore.total().length - 1], 18);
    });
  });

  describe("Unique Cases", function() {
    it("returns 30 if the user scores three strikes in a row", function() {
      let testScore = new score.scoreController();
      for (i = 0; i < 3; i++) {
        testScore.getTheScore(10);
      }
      testScore.getTheScore(4);
      testScore.getTheScore(5);
      assert.equal(testScore.total()[testScore.total().length - 1], 68);
    });
  });
 
});


 /*

  describe("addBowl", function() {
    it("takes in an integer as an argument and shovels it into the frame array", function () {
      score.addBowl(6);
      assert.equal(score.frame.length, 2);
    });
  });

  describe("countScore", function () {
    it("adds to the score array score[last] + recent", function() {
      let test = score;
      test.countScore(6);
      test.countScore(3);
      test.countScore(5);
      test.countScore(1);
      assert.equal( test.total.length, 5);
      assert.equal(test.total[test.total.length - 1], 15);
    });
 
    it("gives the bonus of 10 + the next role if the user scores a spare", function() {
      let test = score;
      test.total = [0];
      test.countScore(5);
      test.countScore(4);
      test.countScore(6);
      test.countScore(4);
      test.countScore(3);
      assert.equal(test.total[test.total.length - 1], 22);
    });

    describe("STRIKE", function () {
      it("adds 10 + the next frame to the score", function() {
        let test = score;
        test.total = [0];
        test.countScore(10);
        assert.equal(test.total[1], 16);
      });
    });

  });
  
});
*/