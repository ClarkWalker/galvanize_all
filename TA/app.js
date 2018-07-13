const express = require("express")
const app = express()
const port = process.env.PORT || 3000
const path = require('path');
const bodyParser = require('body-parser');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.get("/", (req, res, next) => {
	res.render("index")
})

app.listen(port, () => {
	console.log("listening on 3000");
})
