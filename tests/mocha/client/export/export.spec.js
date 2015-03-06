if (!(typeof MochaWeb === 'undefined')) {
  MochaWeb.testOnly(function () {

    describe('client', function () {
  		describe('export', function () {
  			describe('export', function () {

  				afterEach(function (done) {
            AuthHelper.logout(done);
  				});

          it(
            'should be redirected to the public welcome page if not logged in and try to access the export page',
            function () {
              Router.go('/export');
              Tracker.flush();
              chai.expect($('.welcome-public').length).to.equal(1);
            }
          );

  				it(
  					'should show export page when export route is accessed',
  					function (done) {
  						AuthHelper.login(done, function () {
  							Router.go('/export');
  							Tracker.flush();
                chai.expect($('.export').length).to.equal(1);
              });
  					}
  				);

  			});
  		});
    });

  });
}
