Router.configure({
  layoutTemplate: 'layout',
  notFoundTemplate: 'notFound'
});

Router.route('/', function () {
  this.render('welcome');
});
Router.route('/welcome');

Router.route('/customers', {
  name: 'customer_list',
  subscriptions: function () {
    this.subscribe('allCustomers');
  },
  action: function () {
    this.render();
  }
});

Router.route('/customers/:_id', {
  name: 'customer_details',
  data: function () {
    return Dashboard.Collections.Customers.findOne({_id: this.params._id});
  },
  action: function () {
    Session.set('currentCustomerId', this.params._id);
    Session.set('isCustomerFormLocked', true);
    this.render();
  },
  subscriptions: function () {
    this.subscribe('singleCustomer', this.params._id).wait();
    this.subscribe('customerNotes', this.params._id);
    this.subscribe('customerAuditLogs', this.params._id);
    this.subscribe('users');
  }
});

Router.route('/export');

Router.onBeforeAction(function () {
  if (!Meteor.userId()) {
    this.render('welcome');
  } else {
    this.next();
  }
});
