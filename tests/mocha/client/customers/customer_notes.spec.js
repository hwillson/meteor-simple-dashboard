if (!(typeof MochaWeb === 'undefined')) {
  MochaWeb.testOnly(function () {

    describe('client', function () {
  		describe('customers', function () {
  			describe('customer_notes', function () {

          describe('secure', function () {

            before(function (done) {
              AuthHelper.login(done);
            });

            beforeEach(function () {
              this.customer = Collections.Customers.findOne();
              this.reload = _.bind(function () {
                Router.go('/customers/' + this.customer._id);
                Tracker.flush();
              }, this);
              this.reload();
            });

						it(
							'should load the notes page when the notes tab is clicked',
							function () {
								chai.expect($('.customer-notes-tab-pane').is(':hidden'))
									.to.equal(true);
								$('.customer-notes-tab').click();
								Tracker.flush();
								chai.expect($('.customer-notes-tab-pane').is(':hidden'))
									.to.equal(false);
							}
						);

						it(
							'should show a newly saved note in the first row of the notes table',
							function () {
								var content = Fake.sentence();
								$('textarea[name="content"]').html(content);
								$('.btn-save').click();
								Tracker.flush();
								chai.expect($('.notes-table tbody tr:first')
									.find('.note-content').html()).to.equal(content);
							}
						);

						it(
							'should show created date and user email for new note',
							function () {
								chai.expect($('.notes-table tbody tr:first')
									.find('.note-date').html().length).to.not.equal(0);
								chai.expect($('.notes-table tbody tr:first')
									.find('.note-creator').html().length).to.not.equal(0);
							}
						);

						it(
							'should only show notes for the current customer',
							function () {


								throw new Error('TODO');

								// var testUserNoteCount =
								// 	Collections.Notes.find({
								// 		createdBy: AuthHelper.email
								// 	}).count();
								//
								// Collections.Notes.insert({
								// 	content: 'A new test note',
								// 	createdBy: 'abc@123.com',
								// 	createdOn: new Date()
								// }, function (error) {
								// 	if (error) {
								// 		console.log(error);
								// 	}
								// });
								//
								// Tracker.flush();
								// chai.expect($('.notes-table tbody tr').length)
								// 	.to.equal(testUserNoteCount)

							}
						);

					});

  			});
  		});
    });

  });
}
