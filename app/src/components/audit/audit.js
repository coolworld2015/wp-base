import '../../../css/users.css';

module.exports = {
	templateUrl: require('./audit.html'),
	bindings: {audits: '<'}, 
	controllerAs: 'vm', 
	controller: Ctrl
}

function Ctrl() {
	let vm = this;
	vm.name = 'Audit';
	console.log(vm);
}