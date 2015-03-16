Template.customerAudit.helpers({

	auditLogsExist: function () {
		return Collections.AuditLogs.find({}).count() > 0;
	},

	auditLogs: function () {
		return Collections.AuditLogs.find({}, {
			sort: {
				dateLogged: -1
			}
		});
	},

	showChanges: function (snapshot) {
		var changes = '';
		if (snapshot) {
			changes = JSON.stringify(_.omit(snapshot, ['_id']));
		}
		return changes;
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
