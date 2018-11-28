const express = require("express"); 
const routes = require('./routes');
const path = require('path');
const app = express();

app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

//routes
app.get('/', routes.home);

app.get('/test', routes.test);


app.listen(3000, ()=> {console.log("App listening on port 3000")});