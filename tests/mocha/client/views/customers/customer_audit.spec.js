if (!(typeof MochaWeb === 'undefined')) {
  MochaWeb.testOnly(function () {

    describe('views', function () {
  		describe('customers', function () {
  			describe('customer_audit', function () {

          before(function (done) {
            Dashboard.AuthHelper.login(done, _.bind(function () {
              this.customer = Dashboard.Collections.Customers.findOne();
              Router.go('/customers/' + this.customer._id);
              Tracker.flush();
            }, this));
          });

          beforeEach(function () {
						Meteor.call('clearAuditLogs');
          });

					it(
						'should load the audit page when the audit tab is clicked',
						function (done) {
							chai.expect($('.customer-audit-tab-pane').is(':hidden'))
								.to.equal(true);
							$('.customer-audit-tab').click();
							Dashboard.TestHelper.waitThenCheck(function () {
                chai.expect($('.customer-audit-tab-pane').is(':hidden'))
                  .to.equal(false);
              }, done);
						}
					);

					it(
						'should show a "no audit history" message if the audit log is empty',
						function (done) {
							$('.customer-audit-tab').click();
							Dashboard.TestHelper.waitThenCheck(function () {
                chai.expect($('.customer-audit-empty').length).to.equal(1);
              }, done);
						}
					);

					it(
						'should show an audit log entry in the audit table',
						function (done) {
							var lastName = Fake.word();
							chai.expect(Dashboard.Collections.AuditLogs.find().count())
                .to.equal(0);
              Dashboard.Collections.Customers.update(this.customer._id, {
                $set: {
                  lastName: lastName
                }
              });
              $('.customer-audit-tab').click();
              Dashboard.TestHelper.waitThenCheck(function () {
                Tracker.flush();
                chai.expect(Dashboard.Collections.AuditLogs.find().count())
                  .to.equal(1);
                chai.expect($('.customer-audit-table tbody tr').length)
                  .to.not.equal(0);
              }, done);
						}
					);

  			});
  		});
    });

  });
}
