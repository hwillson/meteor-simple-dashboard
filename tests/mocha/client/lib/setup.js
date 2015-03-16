AuthHelper = {

	email: 'testuser@test.com',
	password: 'testpassword',

	login: function (done, callback) {
		Meteor.loginWithPassword(
			AuthHelper.email,
			AuthHelper.password,
			function () {
				try {
					Tracker.flush();
					if (callback) {
						callback();
					}
					done();
				} catch (err) {
					done(err);
				}
			}
		);
	},

	logout: function (done, callback) {
		Meteor.logout(function () {
			try {
				Router.go('/');
				Tracker.flush();
				if (callback) {
					callback();
				}
				done();
			} catch (err) {
				done(err);
			}
		});
	}

};

Meteor.subscribe('allCustomers');
