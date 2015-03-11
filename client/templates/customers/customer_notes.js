Template.customerNotes.helpers({

	notes: function () {
  	return Collections.Notes.find({}, {
			sort: {
				createdOn: -1
			}
		}).fetch();
  },

	formattedCreatedOn: function () {
		return moment(this.createdOn).format('YYYY-MM-DD hh:mm:ss A');
	}

});
