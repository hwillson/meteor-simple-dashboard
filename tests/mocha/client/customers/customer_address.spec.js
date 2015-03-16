if (!(typeof MochaWeb === 'undefined')) {
  MochaWeb.testOnly(function () {

    describe('client', function () {
  		describe('customers', function () {
  			describe('customer_address', function () {

          describe.only('secure', function () {

            before(function (done) {
              AuthHelper.login(done);
            });

            beforeEach(function () {
              this.customer = Collections.Customers.findOne();
              this.reload = _.bind(function () {
                Router.go('/customers/' + this.customer._id);
                Tracker.flush();
                $('.customer-address-tab').click();
                if ($('.btn-cancel-address').is(':visible')) {
                  $('.btn-cancel-address').click();
                }
              }, this);
              this.reload();
            });

    				it(
    					'should show loaded customer address details',
    					function () {
                chai.expect($('input[name="firstName"]').val())
                  .to.equal(this.customer.firstName);
    					}
    				);

            it('should load province select list', function () {
              chai.expect($('select[name="province"] option').length > 1)
                .to.equal(true);
            });

            it(
    					'should initially set loaded customer details form to be locked',
              function () {
                chai.expect($('input[name="firstName"]').attr('disabled'))
                  .to.equal('disabled');
    					}
    				);

            it(
              'should show edit button when in locked mode',
              function () {
                chai.expect($('.btn-edit-address').length).to.equal(1);
                chai.expect($('.btn-edit-address').is(':visible'))
                  .to.equal(true);
              }
            );

            it(
              'should hide save and cancel buttons when in locked mode',
              function () {
                chai.expect($('.btn-cancel-address').is(':hidden'))
                  .to.equal(true);
                chai.expect($('.btn-save-address').is(':hidden'))
                  .to.equal(true);
              }
            );

  					it(
  						'should set details to editable if edit button is clicked',
  						function () {
                $('.btn-edit-address').click();
                Tracker.flush();
                chai.expect($('input[name="firstName"]').attr('disabled'))
                  .to.be.undefined;
  						}
  					);

  					it('should hide edit button if in editable mode', function () {
              $('.btn-edit-address').click();
              Tracker.flush(); chai.expect($('.btn-edit-address').is(':hidden')).to.equal(true);
    				});

            // it(
            //   'should show save and cancel buttons if in editable mode',
            //   function () {
            //     $('.btn-edit-address').click();
            //     Tracker.flush();
            //     chai.expect($('.btn-cancel-address').is(':visible'))
            //       .to.equal(true);
            //     chai.expect($('.btn-save-address').is(':visible'))
            //       .to.equal(true);
            //   }
            // );
            //
  					// it(
  					// 	'should save customer details when save button is clicked, showing new customer details in locked form',
  					// 	function () {
            //     var $firstNameEl, name;
            //     $firstNameEl = $('input[name="firstName"]');
            //     name = Fake.word();
            //     $firstNameEl.val(name);
            //     $('.btn-save-address').click();
            //     this.reload();
            //     chai.expect($firstNameEl.val()).to.equal(name);
  					// 	}
  					// );
            //
            // it(
            //   'should cancel save putting form back in locked mode when the cancel button is clicked',
            //   function (done) {
            //     var $firstNameEl = $('input[name="firstName"]');
            //     $('.btn-edit-address').click();
            //     Tracker.flush();
            //     chai.expect($firstNameEl.attr('disabled'))
            //       .to.not.equal('disabled');
            //     $('.btn-cancel-address').click();
            //     Meteor.setTimeout(function () {
            //       try {
            //         chai.expect($firstNameEl.attr('disabled'))
            //           .to.not.equal('disabled');
            //         done();
            //       } catch (error) {
            //         done(error);
            //       }
            //     }, 100);
            //   }
            // );
            //
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

  });
}
