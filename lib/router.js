Router.configure({
  layoutTemplate: 'layout',
  notFoundTemplate: 'notFound'
});

Router.route('/', function () {
  this.render('welcome');
});
Router.route('/welcome');
Router.route('/customers');
Router.route('/export');
