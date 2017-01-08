runHandler.$inject = ['$rootScope', '$state'];

function runHandler($rootScope, $state) {
	$rootScope.$on('$stateChangeStart', function (event, toState) { //TODO Change $stateChangeStart
	//console.log(toState)
		var requireLogin = toState.data.requireLogin;
		if (requireLogin && typeof $rootScope.currentUser === 'undefined') {
			event.preventDefault();
			$state.go('login');
		}
	});
}

export default runHandler;
 