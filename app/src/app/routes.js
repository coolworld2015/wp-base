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
	
	resolveHerokuAudit.$inject = ['$rootScope', '$http', '$q'];
	function resolveHerokuAudit($rootScope, $http, $q) {
		var url = $rootScope.myConfig.webUrl + 'api/audit/get';
		return $http.get(url,
			{
				headers: {'Authorization': $rootScope.access_token}
			})
			.then((result) => {
				return result.data;
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
		.state('login', {
			url: '/login',
			data: {
				requireLogin: false
			},			
			template: '<header-component title="Login"></header-component>' + 
					  '<login-component></login-component>'
		})	
		 
		.state('items', {
			url: '/items',
			data: {
				requireLogin: true
			},
			template: '<header-component title="Items"></header-component>' + 
					  '<items-component items="$resolve.items"></items-component>',
			resolve: {
				items: resolveHerokuItems
			}
		})		 	
		 
		.state('users', {
			url: '/users',
			data: {
				requireLogin: true
			},			
			template: '<header-component title="Users"></header-component>' + 
					  '<users-component users="$resolve.users"></users-component>',
			resolve: {
				users: resolveHerokuUsers
			}
		})			
		 
		.state('audit', {
			url: '/audit',
			data: {
				requireLogin: true
			},			
			template: '<header-component title="Audit"></header-component>' + 
					  '<audit-component audits="$resolve.audits"></audit-component>',
			resolve: {
				audits: resolveHerokuAudit
			}
		})		
		
		.state('menu', {
			url: '/menu',
			data: {
				requireLogin: false
			},			
			template: '<h1> Menu </h1>'
		})			
}

export default routesConfig;
 