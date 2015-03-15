if (!(typeof MochaWeb === 'undefined')) {
  MochaWeb.testOnly(function () {

    describe('client', function () {
  		describe('customers', function () {
  			describe('customer_audit', function () {

          describe('secure', function () {

            before(function (done) {
              AuthHelper.login(done);
            });

            beforeEach(function () {

              this.customer = Collections.Customers.findOne();
              this.reload = _.bind(function () {
                Router.go('/customers/' + this.customer._id);
                Tracker.flush();
              }, this);
              this.reload();

							Meteor.call('clearAuditLogs');

            });

						it(
							'should load the audit page when the audit tab is clicked',
							function () {
								chai.expect($('.customer-audit-tab-pane').is(':hidden'))
									.to.equal(true);
								$('.customer-audit-tab').click();
								Tracker.flush();
								chai.expect($('.customer-audit-tab-pane').is(':hidden'))
									.to.equal(false);
							}
						);

						it(
							'should show a "no audit history" message if the audit log is empty',
							function () {
								$('.customer-audit-tab').click();
								Tracker.flush();
								chai.expect($('.customer-audit-empty').length).to.equal(1);
							}
						);

						it(
							'should show an audit log entry in the audit table',
							function (done) {
								var lastName = Fake.word();
								chai.expect(Collections.AuditLogs.find().count()).to.equal(0);
                Collections.Customers.update(this.customer._id, {
                  $set: {
                    lastName: lastName
                  }
                });
                Meteor.setTimeout(function () {
                  try {
                    chai.expect(Collections.AuditLogs.find().count())
                      .to.equal(1);
                    chai.expect($('.customer-audit-table tbody tr').length)
                      .to.not.equal(0);
          					done();
          				} catch (error) {
          					done(error);
          				}
                }, 100);
							}
						);

					});

  			});
  		});
    });

  });
}
