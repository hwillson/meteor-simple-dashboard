Collections = {};
Collections.Customers = new Mongo.Collection('customers');

Collections.Customers.allow({
  update: function () {
  	return true;
	}
});

Collections.Customers.deny({
	insert: function () {
  	return true;
	},
  remove: function () {
  	return true;
	}
});

Schemas = {};
Schemas.Customer = new SimpleSchema({
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
		autoform: {
      type: 'select',
      options: function () {
        return [
          {label: 'AB', value: 'AB'},
					{label: 'BC', value: 'BC'},
					{label: 'MB', value: 'MB'},
					{label: 'NB', value: 'NB'},
					{label: 'NL', value: 'NL'},
					{label: 'NS', value: 'NS'},
					{label: 'NT', value: 'NT'},
					{label: 'NU', value: 'NU'},
					{label: 'ON', value: 'ON'},
					{label: 'PE', value: 'PE'},
					{label: 'QC', value: 'QC'},
					{label: 'SK', value: 'SK'},
					{label: 'YT', value: 'YT'}
        ];
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

Collections.Customers.attachSchema(Schemas.Customer);
