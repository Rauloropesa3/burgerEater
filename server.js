const express = require("express");
const exphs = require("express-handlebars");

const app = express();

const PORT = process.env.PORT || 7000;

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main"}));

//Routes
const routes = require("./controllers/burgers_controllers.js");

app.listen(PORT, function(){
    console.log("Server listening on: http://localhost:" + PORT);
});




