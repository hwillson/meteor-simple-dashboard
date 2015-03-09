if (!(typeof MochaWeb === 'undefined')) {
  MochaWeb.testOnly(function () {

    describe('client', function () {
  		describe('customers', function () {
  			describe('customer_details', function () {

          describe('public', function () {

            before(function (done) {
              AuthHelper.logout(done);
    				});

            it(
              'should be redirected to the public welcome page if not logged in and try to access customer details',
              function () {
                Router.go('/customers/abc123');
                Tracker.flush();
                chai.expect($('.welcome-public').length).to.equal(1);
              }
            );

          });

  			});
  		});
    });

  });
}
