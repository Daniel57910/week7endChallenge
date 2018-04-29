const assert = require('assert');
const units = require('../../controllers/loginController');

describe('LoginInfo', function() {
  it("the user inserts a valid name", function() {
    assert.equal(units.name, "Rob");
  });
  it('the user inserts a valid email', function() {
    assert.equal(units.email, "test@gmail.com");
  });
  it('the user enters a valid password', function() {
    assert.equal(units.password, "123456");
  });
});