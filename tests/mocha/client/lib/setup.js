Dashboard.AuthHelper = {

	email: 'testuser@test.com',
	password: 'testpassword',

	login: function (done, callback) {
		Meteor.loginWithPassword(
			this.email,
			this.password,
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

Dashboard.TestHelper = {

	waitThenCheck: function (checkFunction, done, waitTime) {
		if (checkFunction && done) {
			if (!waitTime) {
				waitTime = 100;
			}
			Meteor.setTimeout(function () {
				try {
					checkFunction();
					done();
				} catch (error) {
					done(error);
				}
			}, waitTime);
		}
	}

};

Meteor.subscribe('allCustomers');
