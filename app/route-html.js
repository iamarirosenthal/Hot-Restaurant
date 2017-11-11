var path = require("path");

module.exports = function(app) {

	app.get("/", function(req, res) {
		res.sendFile(path.join(__dirname, "home.html"));
	});

	app.get("/table", function(req, res) {
		res.sendFile(path.join(__dirname, "table.html"));
	});

	app.get("/reserve", function(req, res) {
		res.sendFile(path.join(__dirname, "reserve.html"));
	});

	app.use(function (req, res){
		res.sendFile(path.join(__dirname + "home.html"))
	});
};
