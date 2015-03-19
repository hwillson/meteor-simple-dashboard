if (!(typeof MochaWeb === 'undefined')) {
  MochaWeb.testOnly(function () {

    describe('views', function () {
  		describe('customers', function () {
  			describe('customer_list', function () {

          describe('public', function () {

            before(function (done) {
              Dashboard.AuthHelper.logout(done);
    				});

            it(
              'should be redirected to the public welcome page if not logged '
                + 'in and try to access the customer page',
              function () {
                Router.go('/customers');
                Tracker.flush();
                chai.expect($('.welcome-public').length).to.equal(1);
              }
            );

          });

          describe('secure', function () {

            before(function (done) {
              Dashboard.AuthHelper.login(done, function () {
                Router.go('/customers');
                Tracker.flush();
              });
            });

    				it(
    					'should show customers page when customers route is accessed',
    					function () {
                chai.expect($('.customers').length).to.equal(1);
    					}
    				);

            it(
    					'should load and show 10 customer records by default',
              function () {
                chai.expect($('#customers-table').length).to.equal(1);
                chai.expect($('#customers-table tbody tr').length).to.equal(10);
    					}
    				);

            it(
              'should load customer details page when a customer is clicked',
              function (done) {
                $('#customers-table tbody tr:first-child').click();
                Dashboard.TestHelper.waitThenCheck(function () {
                  chai.expect(
                    window.location.href.match('(.*)/customers/(.*)$')
                  ).to.not.equal(null);
                }, done);
              }
            );

          });

  			});
  		});
    });

  });
}
