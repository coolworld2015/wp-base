routesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function routesConfig($stateProvider, $urlRouterProvider) {
	
	resolveHerokuClients.$inject = ['$http', '$q'];
	function resolveHerokuClients($http, $q) {
		let url = 'http://ui-base.herokuapp.com/api/items/get';
		return $http.get(url)
			.then((result) => {
				return result.data;
			})
			.catch((reject) => {
				return $q.reject(reject);
			});
	}		
	
	resolveHerokuGoods.$inject = ['$http', '$q'];
	function resolveHerokuGoods($http, $q) {
		let url = 'http://ui-warehouse.herokuapp.com/api/goods/get';
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
		 
		.state('clients', {
			url: '/clients',
			template: '<header-component title="Items"></header-component>' + 
					  '<items-component items="$resolve.items"></items-component>',
			resolve: {
				items: resolveHerokuClients
			}
		 })		 	
		 
		.state('goods', {
			url: '/goods',
			template: '<header-component title="Goods"></header-component>' + 
					  '<goods-component goods="$resolve.goods"></goods-component>',
			resolve: {
				goods: resolveHerokuGoods
			}
		 })			 
}

export default routesConfig;
 