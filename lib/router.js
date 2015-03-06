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
  action: function () {
    this.render();
  }
});

Router.route('/customers/:_id', {
  name: 'customer_details',
  data: function () {
    return Customers.findOne({_id: this.params._id});
  },
  action: function () {
    this.render();
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
