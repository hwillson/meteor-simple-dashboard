Meteor.publish('customerNotes', function (customerId) {
  return Dashboard.Collections.Notes.find({ customerId: customerId });
});
