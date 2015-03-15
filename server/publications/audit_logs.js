Meteor.publish('auditlogs', function () {
  return Collections.AuditLogs.find({});
});
