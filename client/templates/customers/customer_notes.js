Template.customerNotes.helpers({

	notes: function () {
  	return Collections.Notes.find({}, {
			sort: {
				createdOn: -1
			}
		}).fetch();
  },

	userEmail: function () {
		var user, emails, userEmail;
		user = Meteor.user();
		if (user) {
			emails = user.emails;
			if (emails) {
				userEmail = emails[0].address;
			}
		}
		return userEmail;
	},

	timestamp: function () {
		return moment();
	},

	formattedCreatedOn: function () {
		return moment(this.createdOn).format('YYYY-MM-DD hh:mm:ss A');
	}

});
