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


});
