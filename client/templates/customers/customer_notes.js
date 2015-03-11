var userEmail = function () {
  var user, emails, userEmail;
	user = Meteor.user();
	if (user) {
		emails = user.emails;
		if (emails) {
			userEmail = emails[0].address;
		}
	}
	return userEmail;
};

Template.customerNotes.helpers({

	notes: function () {
  	return Collections.Notes.find({
			createdBy: userEmail
		}, {
			sort: {
				createdOn: -1
			}
		}).fetch();
  },

	userEmail: function () {
		return userEmail();
	},

	timestamp: function () {
		return moment();
	},

	formattedCreatedOn: function () {
		return moment(this.createdOn).format('YYYY-MM-DD hh:mm:ss A');
	}

});
