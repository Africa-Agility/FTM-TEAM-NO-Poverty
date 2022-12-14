//mongodb
require('dotenv').config();


const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 8080;
const product = require('./api/product');
var bodyParser = require("body-parser");
// const mongoose = require('mongoose');
const ejs = require('ejs');
const authRoutes =  require('./routes/authRoutes');
// app.use("/api/product", product);
app.use(express.json());
// const uri = "mongodb+srv://SGD1:Nopoverty2022@no-poverty.qqcm2tl.mongodb.net/?retryWrites=true&w=majority"

// mongoose.set('strictQuery', true);
// mongoose.connect(uri);
// var db=mongoose.connection;
// db.on('error', console.log.bind(console, "connection error"));
// db.once('open', function(callback){
//     console.log("connection succeeded");
// })
  
  
// app.use(bodyParser.json());
// app.use(express.static('public'));
// app.use(bodyParser.urlencoded({
//     extended: true
// }));
  
app.use(authRoutes);
app.use(express.static('public'));



// signup Form
// app.post('/form_data', function(req, res){
//     var name = req.body.name;
//     var email = req.body.email;
//     var password = req.body.password;

//     var data ={
//         "name": name,
//         "email": email,
//         "password": password,
//     }

//     db.collection('details').insertOne(data,function(err, collection){
//         if (err) throw err;
//         console.log("Record inserted Successfully");
              
//     });
// })


// const UserRouter = require('./api/User')

// // for accepting post from data
// const bodyParser = require('express').json;
// app.use(bodyParser());

// app.use('/user', UserRouter)

// // passport -Google authentication
// const passport = require('passport');
// const cookieSession = require('cookie-session');
// require('./passport');
  
// app.use(cookieSession({
//     name: 'google-auth-session',
//     keys: ['key1', 'key2']
// }));
// app.use(passport.initialize());
// app.use(passport.session());

// app.get('/', (req, res) => {
//     res.render("home.ejs")
// });
  
// // Auth 
// app.get('/auth' , passport.authenticate('google', { scope:
//     [ 'email', 'profile' ]
// }));
  
// // Auth Callback
// app.get( '/auth/callback',
//     passport.authenticate( 'google', {
//         successRedirect: '/auth/callback/success',
//         failureRedirect: '/auth/callback/failure'
// }));
  
// // Success 
// app.get('/auth/callback/success' , (req , res) => {
//     if(!req.user)
//         res.redirect('/auth/callback/failure');
//     res.send("Welcome " + req.user.email);
// });
  
// // failure
// app.get('/auth/callback/failure' , (req , res) => {
//     res.send("Error");
// })



mongoose.set('strictQuery', true);
mongoose
.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log("DB Connected");
}) 
.catch((err) => console.log(err));

app.use('/css', express.static(__dirname +'public/css'))
app.use('/js', express.static(__dirname +'public/js'))
app.use('/img', express.static(__dirname +'public/img'))

// routes
app.get('/', (req, res) => res.render('home'))

//Set Views
app.set('views', './views')
app.set('view engine', 'ejs')

app.get('/', (req, res) =>{
    res.render('home.ejs')

})

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

app.get('/donation', (req, res) => {
    res.render('donation.ejs')
})

app.get('/about', (req, res) => {
    res.render('about.ejs')
})

app.get('/contact', (req, res) => {
    res.render('contact.ejs')
})

app.get('/privacy', (req, res) => {
    res.render('privacy.ejs')
})

app.get('/skill', (req, res) => {
    res.render('skill acqusition.ejs')
})

app.get('/sponsorchild', (req, res) => {
    res.render('sponsor child.ejs')
})

app.get('/sponsorfam', (req, res) => {
    res.render('sponsor fam.ejs')
})

app.get('/blog', (req, res) => {
    res.render('blog.ejs')
})

app.get('/percause', (req, res) => {
    res.render('pers cause.ejs')
})

app.get('/personal', (req, res) => {
    res.render('personal.ejs')
})






app.listen(PORT,() => {
    console.log('server is running on port ' + PORT);
})