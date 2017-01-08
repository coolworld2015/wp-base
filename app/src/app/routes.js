routesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function routesConfig($stateProvider, $urlRouterProvider) {
	
	resolveHerokuItems.$inject = ['$rootScope', '$http', '$q'];
	function resolveHerokuItems($rootScope, $http, $q) {
		var url = $rootScope.myConfig.webUrl + 'api/items/get';
		return $http.get(url,
			{
				headers: {'Authorization': $rootScope.access_token}
			})
			.then((result) => {
				return result.data.sort(sort);
			})
			.catch((reject) => {
				return $q.reject(reject);
			});
	}		
	
	resolveHerokuUsers.$inject = ['$rootScope', '$http', '$q'];
	function resolveHerokuUsers($rootScope, $http, $q) {
		var url = $rootScope.myConfig.webUrl + 'api/users/get';
		return $http.get(url,
			{
				headers: {'Authorization': $rootScope.access_token}
			})
			.then((result) => {
				return result.data.sort(sort);
			})
			.catch((reject) => {
				return $q.reject(reject);
			});
	}
	
	function sort(a, b) {
		var nameA = a.name, nameB = b.name;
		if (nameA < nameB) {
			return -1
		}
		if (nameA > nameB) {
			return 1
		}
		return 0;
	}
	
	$urlRouterProvider.otherwise('/login');	
	
	$stateProvider 
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
		 
		 .state('login', {
			url: '/login',
			template: '<header-component title="Login"></header-component>' + 
					  '<login-component></login-component>'
		 })			 
}

export default routesConfig;
 