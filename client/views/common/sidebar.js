Template.sidebar.helpers({

  isRootPage: function () {
	  return Router.current().route.path() === '/';
  },

  isCurrentPage: function (pageName) {
    var routeName = Router.current().route.getName();
    var re = new RegExp('^' + pageName + '.*');
    return (routeName && routeName.match(re));
  }

});
