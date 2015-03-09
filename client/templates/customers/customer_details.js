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

Template.customerDetails.rendered = function () {
	lockForm();
};

Template.customerDetails.helpers({

	formType: function () {
		var type = 'disabled';
		if (!Session.get('isCustomerFormLocked')) {
			type = 'update';
		}
		return type;
	}

})

Template.customerDetails.events({

  'click .btn-edit': function (event) {

		unlockForm();

		$('#customerForm').on('reset', function () {
	    setTimeout(function () {
				lockForm();
			});
		});

  }

});
