Meteor.publish('allCustomers', function () {
  return Collections.Customers.find({});
});

Meteor.publish('singleCustomer', function (customerId) {
  return Collections.Customers.find({ _id: customerId });
});
