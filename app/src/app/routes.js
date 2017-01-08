routesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function routesConfig($stateProvider, $urlRouterProvider) {
	
	resolveHerokuItems.$inject = ['$http', '$q'];
	function resolveHerokuItems($http, $q) {
		let url = 'http://ui-base.herokuapp.com/api/items/get';
		return $http.get(url)
			.then((result) => {
				return result.data;
			})
			.catch((reject) => {
				return $q.reject(reject);
			});
	}		
	
	resolveHerokuUsers.$inject = ['$http', '$q'];
	function resolveHerokuUsers($http, $q) {
		let url = 'http://ui-base.herokuapp.com/api/users/get';
		return $http.get(url)
			.then((result) => {
				return result.data;
			})
			.catch((reject) => {
				return $q.reject(reject);
			});
	}

	$urlRouterProvider.otherwise('/home');	
	
	$stateProvider
		.state('home', {
			url: '/home',
			template: '<header-component title="Home"></header-component>'
		 })	
		 
		.state('items', {
			url: '/items',
			template: '<header-component title="Items"></header-component>' + 
					  '<items-component items="$resolve.items"></items-component>',
			resolve: {
				items: resolveHerokuItems
			}
		 })		 	
		 
		.state('users', {
			url: '/users',
			template: '<header-component title="Users"></header-component>' + 
					  '<users-component users="$resolve.users"></users-component>',
			resolve: {
				users: resolveHerokuUsers
			}
		 })			 
}

export default routesConfig;
 