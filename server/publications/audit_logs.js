Meteor.publish('customerAuditLogs', function (customerId) {
  return Dashboard.Collections.AuditLogs.find({
    documentId: customerId
  });
});
