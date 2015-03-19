if (!(typeof MochaWeb === 'undefined')) {
  MochaWeb.testOnly(function () {

    describe('views', function () {
  		describe('export', function () {

        describe('public', function () {

          before(function (done) {
            Dashboard.AuthHelper.logout(done);
  				});

          it(
            'should be redirected to the public welcome page if not logged in '
            + 'and try to access the export page',
            function () {
              Router.go('/export');
              Tracker.flush();
              chai.expect($('.welcome-public').length).to.equal(1);
            }
          );

        });

        describe('secure', function () {

          before(function (done) {
            Dashboard.AuthHelper.login(done);
          });

  				it(
  					'should show export page when export route is accessed',
  					function () {
							Router.go('/export');
							Tracker.flush();
              chai.expect($('.export').length).to.equal(1);
  					}
  				);

        });

			});
		});

  });
}
