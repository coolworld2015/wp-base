import '../../../css/users.css';

module.exports = {
	templateUrl: require('./users.html'),
	bindings: {users: '<'}, 
	controllerAs: 'vm', 
	controller: Ctrl
}

function Ctrl() {
	let vm = this;
	vm.name = 'Users';
	console.log(vm);
}