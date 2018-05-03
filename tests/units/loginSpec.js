const assert = require('assert');
const login = require('../../controllers/loginController');

describe('LoginInfo', function() {
  it("the user inserts a valid name", function() {
    assert.equal(login.name, "Rob");
  });
  it('the user inserts a valid email', function() {
    assert.equal(login.email, "test@gmail.com");
  });
  it('the user enters a valid password', function() {
    assert.equal(login.password, "123456");
  });
});