const path = require('path');
const express = require('express');
const hbs = require('express-handlebars');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.set('views', path.join(__dirname, 'views'));
app.engine('hbs', hbs.engine({ extname: '.hbs' }));
app.set('view engine', 'hbs');

app.use(express.static('public'));

app.use(require('./routes'));
app.use((req, res, next) => { res.status(404).render('./pages/404'); });

app.listen( 3000, () => {
  console.log(`Example app listening on port ${3000}`)
})
