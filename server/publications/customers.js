Meteor.publish('customers', function () {
  return Collections.Customers.find({});
});
