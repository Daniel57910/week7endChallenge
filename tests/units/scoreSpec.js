const assert = require('assert');
let score = require('../../controllers/scoreController');

describe ("ScoreController", function() {
  it("begins with a score representing an empty array", function() {
    assert.equal(score.total.length, 1);
    assert.equal(score.frame.length, 0);
  });

  describe("getTheScore", function() {
    it("increments both the frame and the score by 1", function () {
      score.getTheScore(4);
      score.getTheScore(5);
      assert.equal(score.total.length, 2);
      assert.equal(score.frame.length, 1);
    });

    it("adds the previous score + last score dynamically", function() {
      score.reset();
      score.getTheScore(3);
      score.getTheScore(3);
      score.getTheScore(2);
      score.getTheScore(1);
      assert.equal(score.total[score.total.length - 1], 9);
    });
  });

  describe("Strike", function() {
    it("automatically calls strike in console if user scores 10", function() {
      score.reset();
      score.getTheScore(10);

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





