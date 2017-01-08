module.exports = {
	templateUrl: require('./header.html'),
	bindings: {title: '@'}, 
	controllerAs: 'vm',			
	controller: Ctrl
}

function Ctrl() {
	let vm = this;
}