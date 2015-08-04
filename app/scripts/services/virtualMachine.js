(function () {
	var app = angular.module('app.virtualMachine', ['app.core']);
	app.service('virtualMachine', virtualMachine);
	virtualMachine.$inject = ['observer', '$http', '$q'];
	function virtualMachine(observer, $http, $q) {
		var virtualMachine = this;
		virtualMachine.launch = function (vm, token) {
			$http.post('/api/vm/launch', { vm: vm, token: token })
				.success(function (data, status, headers, config) {

				})
				.error(function (error) {

				});
		};
		virtualMachine.findAll = function () {
			var defer = $q.defer();
			$http.get('/VM/')
				.success(function (data, status, headers, config) {
					defer.resolve(data);
				})
				.error(function (error) {
					defer.reject([]);
				});
			return defer.promise;
		};
		return virtualMachine;
	};
})();