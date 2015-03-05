Customers = new Mongo.Collection('customers');

var customerSchema = new SimpleSchema({
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
		max: 50
	},
	postalCode: {
		type: String,
		label: 'Postal Code',
		regEx: /^[ABCEGHJKLMNPRSTVXY]{1}\d{1}[A-Z]{1} *\d{1}[A-Z]{1}\d{1}$/
	},
	province: {
		type: String,
		label: 'Country',
		max: 50
	},
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

Customers.attachSchema(customerSchema);
