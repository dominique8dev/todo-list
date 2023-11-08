const express = require('express');
const app = express();
const router = require('./routes/mainRoute');
const port = 3000;

app.listen(port, (err) => {
    err ? console.log(err.message) : console.log(`Todo App running on port ${port}`);
});

//* Serve static files (CSS, JS, etc.)
app.use(express.static('public'));

//* Set up a simple view engine (EJS in this case)
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

//* Parse JSON data from request bodies
app.use(express.urlencoded({ extended: true }));



app.use('/', router);