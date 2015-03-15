Meteor.publish('customerNotes', function (customerId) {
  return Collections.Notes.find({ customerId: customerId });
});
