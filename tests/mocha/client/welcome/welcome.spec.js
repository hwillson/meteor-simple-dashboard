if (!(typeof MochaWeb === 'undefined')) {
  MochaWeb.testOnly(function () {

    describe('client', function () {
  		describe('welcome', function () {
  			describe('welcome', function () {

  				afterEach(function (done) {
            AuthHelper.logout(done);
  				});

          it(
  					'should show welcome page when / or welcome route is accessed',
  					function (done) {
  						AuthHelper.login(done, function () {

  							Router.go('/');
  							Tracker.flush();
                chai.expect($('.welcome').length).to.equal(1);

                Router.go('/welcome');
  							Tracker.flush();
                chai.expect($('.welcome').length).to.equal(1);

              });
  					}
  				);

  				it(
  					'should show public welcome message if not logged in',
  					function (done) {
              AuthHelper.logout(done, function () {
                chai.expect($('.welcome-public').length).to.equal(1);
              });
  					}
  				);

  				it(
  					'should show admin welcome message if logged in',
  					function (done) {
              AuthHelper.login(done, function () {
                chai.expect($('.welcome-admin').length).to.equal(1);
              });
  					}
  				);

  			});
  		});
    });

  });
}
