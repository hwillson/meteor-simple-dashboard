Meteor.startup(function () {

  Factory.define('customer', Dashboard.Collections.Customers, {
		firstName: function () {
			return Fake.user().name;
		},
		lastName: function () {
			return Fake.user().name;
		},
		street1: function () {
			return _.random(1, 3) + Fake.word();
		},
		street2: function () {
			return 'Suite ' + _.random(1, 3);
		},
		city: function () {
			return Fake.word();
		},
		province: function () {
			return 'ON';
		},
		postalCode: function () {
			return 'A1A 1A1';
		},
		country: function () {
			return Fake.word();
		},
		homePhone: function () {
			return '111-111-1111';
		},
		workPhone: function () {
			return '222-222-2222';
		},
		cellPhone: function () {
			return '333-333-3333';
		}
  });

  if (Dashboard.Collections.Customers.find({}).count() === 0) {
    _(50).times(function (n) {
      Factory.create('customer');
    });
  }

});
