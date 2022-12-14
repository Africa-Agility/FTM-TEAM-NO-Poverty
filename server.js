// mongodb
require('./config/db');

const express = require('express');
const app = express();
const PORT = 7000;

const UserRouter = require('./api/User')

// for accepting post from data
const bodyParser = require('express').json;
app.use(bodyParser());

app.use('/user', UserRouter)

const ejs = require('ejs');
app.use(express.static('public'));

// passport -Google authentication
const passport = require('passport');
const cookieSession = require('cookie-session');
require('./passport');
  
app.use(cookieSession({
    name: 'google-auth-session',
    keys: ['key1', 'key2']
}));
app.use(passport.initialize());
app.use(passport.session());

app.get('/', (req, res) => {
    res.send("<button><a href='/auth'>Login With Google</a></button>")
});
  
// Auth 
app.get('/auth' , passport.authenticate('google', { scope:
    [ 'email', 'profile' ]
}));
  
// Auth Callback
app.get( '/auth/callback',
    passport.authenticate( 'google', {
        successRedirect: '/auth/callback/success',
        failureRedirect: '/auth/callback/failure'
}));
  
// Success 
app.get('/auth/callback/success' , (req , res) => {
    if(!req.user)
        res.redirect('/auth/callback/failure');
    res.send("Welcome " + req.user.email);
});
  
// failure
app.get('/auth/callback/failure' , (req , res) => {
    res.send("Error");
})

app.use('/css', express.static(__dirname +'public/css'))
app.use('/js', express.static(__dirname +'public/js'))
app.use('/img', express.static(__dirname +'public/img'))

//Set Views
app.set('views', './views')
app.set('view engine', 'ejs')

app.get('/signup', (req, res) => {
    res.render('signup.ejs')
})

app.get('/login', (req, res) => {
    res.render('login.ejs')
})

app.get('/password', (req, res) => {
    res.render('password.ejs')
})

app.get('/verification', (req, res) => {
    res.render('verification.ejs')
})


app.listen(PORT,() => {
    console.log('server is running on port ' + PORT);
})