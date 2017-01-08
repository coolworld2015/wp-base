init.$inject = ['$rootScope'];

function init($rootScope) {
	$rootScope.numPerPageItems = 10;

	$rootScope.myConfig = {
		webUrl: 'http://jwt-base.herokuapp.com/' //TODO Heroku MongoDB
	};
}

export default init;
 