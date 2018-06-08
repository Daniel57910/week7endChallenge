
function LoginInfo () {
  this.name = "Rob";
  this.email = "test@gmail.com";
  this.password = "123456";
}

module.exports = (loginInfo = new LoginInfo());