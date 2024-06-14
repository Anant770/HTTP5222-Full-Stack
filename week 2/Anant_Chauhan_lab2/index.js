const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || "8888";
//set up application template engine
app.set('views', path.join(__dirname, 'views'));
// Set view engine
app.set('view engine', 'pug');

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

// Route for home page
app.get('/', (request, response) => {
    response.render('index', { title: 'E-Commerce' });
});

//set up server listing
app.listen(port,()=> {
    console.log(`Listening on http://localhost:${port}`);
});
