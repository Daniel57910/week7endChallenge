let score = require('./scoreController');
let test = new score.scoreController();
test.playTheGame(10);
test.playTheGame(7, 1);