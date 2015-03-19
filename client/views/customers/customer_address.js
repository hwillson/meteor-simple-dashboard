var lockForm = function () {
	$('.btn-unlocked').hide();
	$('.btn-locked').show();
	Session.set('isCustomerFormLocked', true);
};

var unlockForm = function () {
	$('.btn-locked').hide();
	$('.btn-unlocked').show();
	Session.set('isCustomerFormLocked', false);
};

AutoForm.hooks({
	customerForm: {
		onSuccess: function (formType, result) {
			lockForm();
		}
	}
});

Template.customerAddress.rendered = function () {
	lockForm();
};

Template.customerAddress.helpers({

	formType: function () {
		var type = 'disabled';
		if (!Session.get('isCustomerFormLocked')) {
			type = 'update';
		}
		return type;
	}

})

Template.customerAddress.events({

  'click .btn-edit-address': function (event) {

		unlockForm();

		$('#customerForm').on('reset', function () {
	    setTimeout(function () {
				lockForm();
			});
		});

  }

});
