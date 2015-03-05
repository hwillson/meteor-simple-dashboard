if (!(typeof MochaWeb === 'undefined')) {
  MochaWeb.testOnly(function () {

		describe('common', function () {
			describe('sidebar', function () {

				afterEach(function (done) {
					Meteor.logout(function () {
						done();
					});
				});

				it('should show welcome link if not logged in', function () {
					chai.expect($('.sb-welcome').length).to.equal(1);
				});

				it('should only show welcome link if not logged in', function () {
					chai.expect($('.sidebar li').length).to.equal(1);
				});

				it('should show admin links if logged in', function (done) {
					Meteor.loginWithPassword(
						AuthHelper.username,
						AuthHelper.password,
						function () {
							try {
								Tracker.flush();
								chai.expect($('.sidebar li').length).to.equal(4);
								done();
							} catch (err) {
								done(err);
							}
						}
					);
				});

			});
		});

  });
}
