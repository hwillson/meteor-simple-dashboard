Dashboard.Collections.Customers = new AuditedCollection('customers');

Dashboard.Collections.Customers.allow({
  update: function () {
  	return true;
	}
});

Dashboard.Collections.Customers.deny({
	insert: function () {
  	return true;
	},
  remove: function () {
  	return true;
	}
});

Dashboard.Schemas = {};
Dashboard.Schemas.Customer = new SimpleSchema({
	firstName: {
		type: String,
		label: 'First Name',
		max: 100
	},
	lastName: {
		type: String,
		label: 'Last Name',
		max: 100
	},
	street1: {
		type: String,
		label: 'Street 1',
		max: 100
	},
	street2: {
		type: String,
		label: 'Street 2',
		max: 100,
		optional: true
	},
	city: {
		type: String,
		label: 'City',
		max: 50
	},
	province: {
		type: String,
		label: 'Province',
    allowedValues: [
      'AB', 'BC', 'MB', 'NB', 'NL', 'NS', 'NT', 'NU', 'ON', 'PE', 'QC',
      'SK', 'YT'
    ],
    autoform: {
      afFieldInput: {
        type: 'select',
        firstOption: '(Select a province)',
        options: 'allowed'
      }
    }
	},
	postalCode: {
		type: String,
		label: 'Postal Code',
		regEx: /^[ABCEGHJKLMNPRSTVXY]{1}\d{1}[A-Z]{1} *\d{1}[A-Z]{1}\d{1}$/
	},
	// country: {
	// 	type: String,
	// 	label: 'Country',
	// 	max: 50
	// },
	homePhone: {
		type: String,
		label: 'Home Phone',
		regEx: /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/,
		optional: true
	},
	workPhone: {
		type: String,
		label: 'Work Phone',
		regEx: /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/,
		optional: true
	},
	cellPhone: {
		type: String,
		label: 'Cell Phone',
		regEx: /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/,
		optional: true
	}
});

Dashboard.Collections.Customers.attachSchema(Dashboard.Schemas.Customer);
