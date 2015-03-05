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
	}

};

AuthHelper.createUser();
