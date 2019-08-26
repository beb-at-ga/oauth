require('dotenv').config();

const express = require('express');
const layouts = require('express-ejs-layouts');
const session = require('express-session');
const passport = require('./config/passportConfig');

const app = express();

app.use(express.static('static'));
app.use(express.urlencoded({
  extended: false
}))
app.use(express.json());

app.set('view engine', 'ejs');
app.use(layouts);


app.use(session({ 
  secret: process.env.SESSION_SECRET,
  resave: true,
  saveUninitialized: true
}))

app.use(passport.initialize());
app.use(passport.session());

app.get('/', (req, res) => {
  res.render('index');
})

app.use('/auth', require('./controllers/auth'));
app.use('/api', require('./controllers/api'));

app.listen(process.env.PORT || 3004, () => {
  console.log(`Express listening on port ${process.env.PORT}.`)
})

