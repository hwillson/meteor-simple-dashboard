Dashboard.Collections.AuditLogs = AuditLogs;

Meteor.methods({

	clearAuditLogs: function () {
		Dashboard.Collections.AuditLogs.remove({});
	}

});
