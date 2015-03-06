if (!(typeof MochaWeb === 'undefined')) {
  MochaWeb.testOnly(function () {

    describe('client', function () {
  		describe('customers', function () {
  			describe('customers', function () {

  				afterEach(function (done) {
            AuthHelper.logout(done);
  				});

          it(
            'should be redirected to the public welcome page if not logged in and try to access the customer page',
            function () {
              Router.go('/customers');
              Tracker.flush();
              chai.expect($('.welcome-public').length).to.equal(1);
            }
          );

  				it(
  					'should show customers page when customers route is accessed',
  					function (done) {
  						AuthHelper.login(done, function () {
  							Router.go('/customers');
  							Tracker.flush();
                chai.expect($('.customers').length).to.equal(1);
              });
  					}
  				);

          it(
  					'should load and show 10 customer records by default',
            function (done) {
  						AuthHelper.login(done, function () {
  							Router.go('/customers');
  							Tracker.flush();
                chai.expect($('#customers-table').length).to.equal(1);
                chai.expect($('#customers-table tbody tr').length).to.equal(10);
              });
  					}
  				);

  			});
  		});
    });

  });
}
