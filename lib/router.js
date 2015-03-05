Router.configure({
  layoutTemplate: 'layout',
  notFoundTemplate: 'notFound'
});

// Router.route('/', function () {
//   this.render('overview');
// });

Router.map(function () {

	this.route('welcome', {
  	path: '/'
  });

  this.route('customers', {
  	path: '/customers'
  });

  this.route('reports', {
  	path: '/reports'
  });

  this.route('export', {
  	path: '/export'
  });

});
