module.exports = function(app, path) {
	var publicPath = '../public/';

	app.get("/", function(req, res) {
	    res.sendFile(path.join(__dirname, publicPath + "home.html"));
	});

	app.get("/survey", function(req, res) {
	    res.sendFile(path.join(__dirname, publicPath + "survey.html"));
	});

	app.get("*", function(req, res) {
	    res.redirect('/');
	});

}
