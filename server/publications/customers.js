Meteor.publish('allCustomers', function () {
  return Dashboard.Collections.Customers.find({}, {
    fields: {
      dateCreated: 0,
      dateModified: 0
    }
  });
});

Meteor.publish('singleCustomer', function (customerId) {
  return Dashboard.Collections.Customers.find({ _id: customerId }, {
    fields: {
      dateCreated: 0,
      dateModified: 0
    }
  });
});
