if (!(typeof MochaWeb === 'undefined')) {
  MochaWeb.testOnly(function () {

		describe('welcome', function () {
			describe('welcome', function () {

				afterEach(function (done) {
					Meteor.logout(function () {
						done();
					});
				});

				it(
					'should show public welcome message if not logged in',
					function (done) {
						Meteor.logout(function () {
							try {
								Router.go('/');
								Tracker.flush();
								chai.expect($('.we-public').length).to.equal(1);
								done();
							} catch (err) {
								done(err);
							}
						});
					}
				);

				it(
					'should show admin welcome message if logged in',
					function (done) {
						Meteor.loginWithPassword(
							AuthHelper.username,
							AuthHelper.password,
							function () {
								try {
									Router.go('/');
									Tracker.flush();
									chai.expect($('.we-admin').length).to.equal(1);
									done();
								} catch (err) {
									done(err);
								}
							}
						);
					}
				);

			});
		});

  });
}
