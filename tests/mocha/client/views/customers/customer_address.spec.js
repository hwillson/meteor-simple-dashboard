if (!(typeof MochaWeb === 'undefined')) {
  MochaWeb.testOnly(function () {

    describe('views', function () {
  		describe('customers', function () {
  			describe('customer_address', function () {

          before(function (done) {
            Dashboard.AuthHelper.login(done, _.bind(function () {
              this.customer = Dashboard.Collections.Customers.findOne();
              Router.go('/customers/' + this.customer._id);
              Tracker.flush();
            }, this));
          });

          beforeEach(function () {
            this.div = document.createElement('div');
          });

  				it(
  					'should show loaded customer address details',
  					function (done) {
              var data = {
                firstName: 'Test Name'
              };
              Blaze.renderWithData(Template.customerAddress, data, this.div);
              Dashboard.TestHelper.waitThenCheck(function () {
                chai.expect($('input[name="firstName"]').val())
                  .to.equal(data.firstName);
              }, done);
  					}
  				);

          it('should load province select list', function () {
            Blaze.render(Template.customerAddress, this.div);
            chai.expect($('select[name="province"] option').length > 1)
              .to.equal(true);
          });

          it(
  					'should initially set loaded customer details form to be locked',
            function (done) {
              var data = {
                firstName: 'Test Name'
              };
              Blaze.renderWithData(Template.customerAddress, data, this.div);
              Dashboard.TestHelper.waitThenCheck(function () {
                chai.expect($('input[name="firstName"]').attr('disabled'))
                  .to.equal('disabled');
              }, done);
  					}
  				);

          it(
            'should show edit button when in locked mode',
            function () {
              Blaze.render(Template.customerAddress, this.div);
              chai.expect($('.btn-edit-address').length).to.equal(1);
              chai.expect($('.btn-edit-address').is(':visible'))
                .to.equal(true);
            }
          );

          it(
            'should hide save and cancel buttons when in locked mode',
            function () {
              Blaze.render(Template.customerAddress, this.div);
              chai.expect($('.btn-cancel-address').is(':hidden'))
                .to.equal(true);
              chai.expect($('.btn-save-address').is(':hidden'))
                .to.equal(true);
            }
          );

					it(
						'should set details to editable if edit button is clicked',
						function (done) {
              Blaze.render(Template.customerAddress, this.div);
              Tracker.flush();
              $('.btn-edit-address').click();
              Dashboard.TestHelper.waitThenCheck(function () {
                chai.expect($('input[name="firstName"]')
                  .attr('disabled')).to.be.undefined;
              }, done);
						}
					);

					it('should hide edit button if in editable mode', function (done) {
            Blaze.render(Template.customerAddress, this.div);
            Tracker.flush();
            $('.btn-edit-address').click();
            Dashboard.TestHelper.waitThenCheck(function () {
              chai.expect($('.btn-edit-address').is(':hidden'))
                .to.equal(true);
            }, done);
  				});

          it(
            'should show save and cancel buttons if in editable mode',
            function (done) {
              var view = Blaze.render(Template.customerAddress, this.div);
              Tracker.flush();
              $('.btn-edit-address').click();
              Dashboard.TestHelper.waitThenCheck(function () {
                chai.expect($('.btn-cancel-address').is(':visible'))
                  .to.equal(true);
                chai.expect($('.btn-save-address').is(':visible'))
                  .to.equal(true);
              }, done);
            }
          );

					// it(
					// 	'should lock form and show edit button after save',
					// 	function (done) {
          //     var customer, $firstNameEl, firstName;
          //     firstName = Fake.word();
          //     customer = Collections.Customers.findOne();
          //     Blaze.renderWithData(
          //       Template.customerAddress,
          //       customer,
          //       this.div
          //     );
          //     Tracker.flush();
          //     $('.btn-edit-address').click();
          //     // Tracker.flush();
          //     $('.btn-save-address').click();
          //     Meteor.setTimeout(function () {
          //       try {
          //         chai.expect($('input[name="firstName"]').attr('disabled'))
          //           .to.equal('disabled');
          //         done();
          //       } catch (error) {
          //         done(error);
          //       }
          //     }, 100);
					// 	}
					// );

          // it(
          //   'should cancel save putting form back in locked mode when the '
          //     + 'cancel button is clicked',
          //   function () {
          //     var $firstNameEl = $('input[name="firstName"]');
          //     $('.btn-edit-address').click();
          //     // setTimeout(done, 100);
          //     chai.expect($firstNameEl.attr('disabled'))
          //       .to.not.equal('disabled');
          //     // $('.btn-cancel-address').click();
          //     // setTimeout(done, 100);
          //     // chai.expect($firstNameEl.attr('disabled'))
          //     //   .to.equal('disabled');
          //   }
          // );

          // it('should show appropriate validation errors', function () {
          //   var $firstNameEl = $('input[name="firstName"]');
          //   $('.btn-edit-address').click();
          //   Tracker.flush();
          //   $firstNameEl.val('');
          //   $('.btn-save-address').click();
          //   Tracker.flush();
          //   chai.expect($('.help-block').html())
          //     .to.equal('First Name is required');
          // });

  			});
  		});
    });

  });
}
