AuthHelper = {

	username: 'testuser',
	password: 'testpassword',
	email: 'testuser@test.com',

	createUser: function () {
		Accounts.createUser({
			username: this.username,
			email: this.email,
			password: this.password
		});
	},

	login: function (done, callback) {
		Meteor.loginWithPassword(
			AuthHelper.username,
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

AuthHelper.createUser();
