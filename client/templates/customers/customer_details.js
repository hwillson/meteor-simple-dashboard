var setFormReadOnly = function () {
	$('.btn-editable').hide();
	$('.btn-readonly').show();
	Session.set('isCustomerFormEditable', false);
};

var setFormEditable = function () {
	$('.btn-readonly').hide();
	$('.btn-editable').show();
	Session.set('isCustomerFormEditable', true);
};

AutoForm.hooks({
	customerForm: {
		onSuccess: function (formType, result) {
			setFormReadOnly();
		}
	}
});

Template.customerDetails.rendered = function () {
	setFormReadOnly();
};

Template.customerDetails.helpers({

	formType: function () {
		var type = 'readonly';
		if (Session.get('isCustomerFormEditable')) {
			type = 'update';
		}
		return type;
	}

})

Template.customerDetails.events({

  'click .btn-edit': function (event) {

		setFormEditable();

		$('#customerForm').on('reset', function () {
	    setTimeout(function () {
				setFormReadOnly();
			});
		});

  }

});
