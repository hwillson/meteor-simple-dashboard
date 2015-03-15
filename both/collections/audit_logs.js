Collections = {};
Collections.AuditLogs = AuditLogs;

Meteor.methods({

	clearAuditLogs: function () {
		Collections.AuditLogs.remove({});
	}

});
