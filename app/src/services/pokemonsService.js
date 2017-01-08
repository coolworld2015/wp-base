class PokemonsService {
	constructor($http) {
		this.$http = $http
	}
	
	getPokemons() {
		let url = 'https://raw.githubusercontent.com/PokemonGOAPI/PokemonDataGraber/master/output.json';
		return this.$http.get(url)
	}
}
PokemonsService.$inject = ['$http'];

export default PokemonsService;
 