Template.sidebar.helpers({

  isRootPage: function () {
	  return Router.current().route.path() === '/';
  },

  isCurrentPage: function (pageName) {
	  return Router.current().route.getName() === pageName;
  }

});
