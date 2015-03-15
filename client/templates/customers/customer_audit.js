Template.customerAudit.helpers({

	auditLogsExist: function () {
		return Collections.AuditLogs.find({
			documentId: Session.get('currentCustomerId')
		}).count() > 0;
	},

	auditLogs: function () {
		return Collections.AuditLogs.find({
			documentId: Session.get('currentCustomerId')
		});
	},

	userEmail: function (userId) {
		var email = '', user;
		if (userId) {
			user = Meteor.users.findOne({ _id: userId });
			if (user.emails) {
				email = user.emails[0].address;
			}
		}
		return email;
	}

});
