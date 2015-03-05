Template.customers.helpers({
	customers: function () {
  	return Customers.find().fetch();
  }
});
