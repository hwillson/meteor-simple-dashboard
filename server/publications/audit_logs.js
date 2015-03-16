Meteor.publish('customerAuditLogs', function (customerId) {
  return Collections.AuditLogs.find({
    documentId: customerId
  });
});
