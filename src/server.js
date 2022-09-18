require('dotenv').config();
const path = require('path');
const express = require('express');
const { engine } = require('express-handlebars');
const cors = require('cors');
const methodOverride = require('method-override');
const Controllers = require('./Controllers');

const app = express();
const port = process.env.port || 8000;

app.use(cors());
app.use(express.json());
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, 'public')));

// View Engine
app.engine('.hbs', engine({ extname: '.hbs', defaultLayout: 'main' }));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'views/'));

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/search', Controllers.searchResults);

app.listen(port, () => {
    console.log('App is listening on port: ', port);
});
