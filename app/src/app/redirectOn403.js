redirectOn403.$inject = ['$httpProvider'];

function redirectOn403($httpProvider) {
	$httpProvider.interceptors.push(['$q', '$injector', '$log', '$rootScope', function ($q, $injector, $log, $rootScope) {
		return {
			'responseError': function (rejection) {
				if (rejection.status === -1 || rejection.status === 403) {
					$log.debug(rejection);
					$rootScope.message = true;
					$injector.get('$state').go('menu');
				}
				return $q.reject(rejection);
			}
		};
	}]);
}	

export default redirectOn403;
 