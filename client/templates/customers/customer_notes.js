Template.customerNotes.helpers({

	notes: function () {
  	return Collections.Notes.find({
      customerId: Session.get('currentCustomerId')
    }, {
			sort: {
				createdOn: -1
			}
		}).fetch();
  },

  currentCustomerId: function () {
    return Session.get('currentCustomerId');
  },

	formattedCreatedOn: function () {
		return moment(this.createdOn).format('YYYY-MM-DD hh:mm:ss A');
	}

});
