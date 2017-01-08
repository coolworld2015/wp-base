import '../../../css/items.css';

module.exports = {
	templateUrl: require('./items.html'),
	bindings: {items: '<'}, 
	controllerAs: 'vm', 
	controller: Ctrl
}

function Ctrl() {
	let vm = this;
	vm.name = 'Items';
	console.log(vm);
}