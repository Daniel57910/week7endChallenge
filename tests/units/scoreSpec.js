const assert = require('assert');
let score = require('../../controllers/scoreController');

describe ("ScoreController", function() {
  it("begins with a score representing an empty array", function() {
    assert.equal(score.total().length, 1);
    assert.equal(score.frame().length, 0);
  });

  describe("BonusCount", function() {
    it("makes the bonus count 2 if the bowl = 10 (strike", function() {
      score.getTheScore(10);
      assert.equal(score.bonusCount(), 2);
    });

    it("makes the bonus count 1 if the previous + bowl == 10", function() {
      score.getTheScore(6);
      score.getTheScore(4);
      assert.equal(score.bonusCount(), 1);
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





