(function () {
	var app = angular.module('app');
	app.controller('MainController', mainCtrl);
	mainCtrl.$inject = ['authentication', 'datastore', 'layout', '$location', 'observer'];
	function mainCtrl(authentication, datastore, layout, $location, observer) {
		var mainCtrl = this;
		datastore.get('User', 1);
		observer.register('datastore', function () {
			mainCtrl.user = datastore.storageLoad('User', 1);
			console.log(mainCtrl.user);
		});
		observer.register('authentication', function () {
			mainCtrl._authenticated = authentication.isAuthenticated();
		});
		observer.register('layout', function () {
			mainCtrl.title = layout.page().capitalizeFirstLetter();
		});
		mainCtrl.layout = layout;
		mainCtrl.traverse = function (link) {
			$location.path(link);
			layout.toggleSidenav('left');
		};
		mainCtrl.mainMenu = [
			{
				link: '/',
				title: 'Dashboard',
				icon: 'dashboard'
			},
			{
				link: '/about',
				title: 'About',
				icon: 'info_outline'
			},
			{
				link: '/faq',
				title: 'F.A.Q',
				icon: 'question_answer'
			},
			{
				link: '/account',
				title: 'Account',
				icon: 'account_circle'
			}
		];
		mainCtrl.managementMenu = [
			{
				link: '/vm',
				title: 'Virtual Machines',
				icon: 'cloud'
			},
			{
				link: '/storage',
				title: 'Virtual Disks',
				icon: 'storage'
			},
			{
				link: '/network',
				title: 'Network Connection',
				icon: 'public'
			},
			{
				link: '/messages',
				title: 'Messages',
				icon: 'message'
			},
			{
				link: '/tasks',
				title: 'Tasks',
				icon: 'list'
			},
			{
				link: '/settings',
				title: 'Settings',
				icon: 'settings'
			},
			{
				link: '/logout',
				title: 'Logout',
				icon: 'logout',
			}
		];

		return mainCtrl;
	};
})();