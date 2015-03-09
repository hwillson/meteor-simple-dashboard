Template.customerList.helpers({

	customers: function () {
  	return Collections.Customers.find().fetch();
  },

	fields: function () {
		return [
  		{ key: 'firstName', label: 'First Name' },
			{ key: 'lastName', label: 'Last Name' },
			{ key: 'street1', label: 'Street 1' },
			{ key: 'street2', label: 'Street 2' },
			{ key: 'city', label: 'City' },
			{ key: 'province', label: 'Province' },
			{ key: 'postalCode', label: 'Postal Code' },
			{ key: 'country', label: 'Country' },
			{ key: 'homePhone', label: 'Home Phone' },
			{ key: 'workPhone', label: 'Work Phone' },
			{ key: 'cellPhone', label: 'Cell Phone' }
		];
	}

});

Template.customerList.events({

  'click .reactive-table tr': function (event) {
    var customer = this;
    Router.go('/customers/' + customer._id);
  }

});
