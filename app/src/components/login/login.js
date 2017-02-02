import '../../../css/login.css';

module.exports = {
	templateUrl: require('./login.html'),
	controllerAs: 'vm',			
	controller: Ctrl
}

Ctrl.$inject = ['$http', '$state', '$rootScope'];
function Ctrl($http, $state, $rootScope) {
	let vm = this;

	angular.extend(vm, {
		init: init,
		onLogin: onLogin		
	});
				
	init();
	
	function init() {
		vm.title = 'Login';
		vm.name = '1';
		vm.pass = '1';
	}
	
	function onLogin() {
		$rootScope.loading = true;
		$rootScope.error = false;
		var url = 'http://jwt-base.herokuapp.com/';
		
		var item = {
			"name": vm.name,
			"pass": vm.pass,
			"description": navigator.userAgent
		};
		
		$http.post(url + 'api/login', item)
				.then(function (results) {
					$rootScope.loading = false;
					$rootScope.access_token = results.data.token;
					console.log(results);
					$rootScope.currentUser = vm.name;
					$state.go('audit');
				})
				.catch(function (error) {
					$rootScope.loading = false;
					$rootScope.error = true;
					console.log(error);
				});
	}
}