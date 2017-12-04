var pokemonResults = require("../data/pokemon.js")

function compareResults(userScores) {

	// Loop each pokemon
	
	var spiritPokemon;
	var lowestDiff = 999999999;
	for (var i = 0; i < pokemonResults.length; i++) {

		var totalDifference = 0;

		var thisPokemon = pokemonResults[i];
		// Loop each score of a single pokemon
		for (var j = 0; j < thisPokemon.scores.length; j++) {
			if (userScores[j] != thisPokemon.scores) {
				var diff = parseInt(userScores[j]) - thisPokemon.scores[j]; 
				totalDifference = totalDifference + Math.abs(diff);
			}

		} // End score loop


		if (totalDifference < lowestDiff) {
			lowestDiff = totalDifference;
			spiritPokemon = thisPokemon;
		}


	} // End pokemon loop
	return spiritPokemon;
}

module.exports = function(app, path) {
	// Server listens for 'mating call' and responds
	app.post("/api/pokemon/", function handlePostRequest(request, response) {
		var pokemon = compareResults(request.body.questions);

		return response.json(pokemon);
	});
}
