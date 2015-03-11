Meteor.startup(function () {

	var email = 'testuser@test.com';
	var password = 'testpassword';

	try {
		Accounts.createUser({
			email: email,
			password: password
		});
	} catch (error) {
		// Do nothing - user already exists
	}

});
