var express = require("express");
var methodOverride = require("method-override");
var bodyParser = require("body-parser");

var app = express();

var PORT = process.env.PORT || 3000;

app.use(express.static("public"));

app.use(bodyParser.urlencoded({extended: false}));

app.use(bodyParser.json());

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ 
    defaultLayout: "main",
    layoutsDir: __dirname + '/views/layouts',
    partialsDir: __dirname + '/views/partials'})
);

app.set("view engine", "handlebars");

var routes = require("./controllers/artistController.js");

app.use(routes);

app.listen(PORT,function(){
    console.log("App now listening at port#: " + PORT);
});