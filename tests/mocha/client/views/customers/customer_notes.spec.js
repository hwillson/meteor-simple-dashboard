if (!(typeof MochaWeb === 'undefined')) {
  MochaWeb.testOnly(function () {

    describe('views', function () {
  		describe('customers', function () {
  			describe('customer_notes', function () {

          before(function (done) {
            Dashboard.AuthHelper.login(done, _.bind(function () {
              this.customer = Dashboard.Collections.Customers.findOne();
              Router.go('/customers/' + this.customer._id);
              Tracker.flush();
            }, this));
          });

					it(
						'should load the notes page when the notes tab is clicked',
						function (done) {
							chai.expect($('.customer-notes-tab-pane').is(':hidden'))
								.to.equal(true);
							$('.customer-notes-tab').click();
              Dashboard.TestHelper.waitThenCheck(function () {
                chai.expect($('.customer-notes-tab-pane').is(':hidden'))
                  .to.equal(false);
              }, done);
						}
					);

					it(
						'should show a newly saved note in the first row of the notes table',
						function (done) {
							var content = Fake.sentence();
							$('textarea[name="content"]').html(content);
							$('.btn-save').click();
              Dashboard.TestHelper.waitThenCheck(function () {
                chai.expect($('.notes-table tbody tr:first')
  								.find('.note-content').html()).to.equal(content);
              }, done);
						}
					);

					it(
						'should show created date and user email for new note',
						function (done) {
              var content = Fake.sentence();
							$('textarea[name="content"]').html(content);
							$('.btn-save').click();
              Dashboard.TestHelper.waitThenCheck(function () {
                chai.expect($('.notes-table tbody tr:first')
  								.find('.note-date').html().length).to.not.equal(0);
  							chai.expect($('.notes-table tbody tr:first')
  								.find('.note-creator').html().length).to.not.equal(0);
              }, done);
						}
					);

					it(
						'should only show notes for the current customer',
						function () {

							var content = Fake.sentence(), matchCount = 0;

							Meteor.call('noteInsert', {
								content: content,
								customerId: '123'
							});

							Meteor.call('noteInsert', {
								content: content,
								customerId: this.customer._id
							});

							Tracker.flush();
							$('.note-content').each(function () {
								if ($(this).html() === content) {
									matchCount += 1;
								}
							});

							chai.expect(matchCount).to.equal(1);

						}
					);

  			});
  		});
    });

  });
}
