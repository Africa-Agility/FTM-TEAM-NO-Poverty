// const express= require('express')
// const router = express.Router()

// //mongodb user model
// const User= require('./../models/User');
// //password handler
// const bcrypt =require('bcrypt')

// //signup
// router.post('/signup', (req, res) => {
//     let {name,email,password,dateOfBirth} = req.body
//     name= name.trim()
//     email=email.trim()
//     password= password.trim()
//     dateOfBirth= dateOfBirth.trim()

//     if (name == "" || email == "" || password == "" || dateOfBirth == "" ){
//         res.json({
//             status:"FAILED",
//             message: "empty input field"
//         });
//     } else if (!/^[a-zA-Z]*$/.test(name)) {
//         res.json({
//             status: "FAILED",
//             message: "Invalid name entered"
//         })
//     } else if ( /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
//         res.json({
//             status: "FAILED",
//             message: "Invalid input entered"
//         })
//     } else if (newDate(dateOfBirth).getTime()){
//         res.json({
//             status: "FAILED",
//             message: "Invalid date of birth entered"
//         })
//     } else if (password.length < 8){
//         res.json({
//             status: "FAILED",
//             message: "Password is too short"
//         })
//     } else {
//         //checking if user already exists
//     User.find({email}).then(result => {
//         if(result.length){
//             res.json({
//                 status: "FAILED",
//                 message: "User already exists"
//             })
//         } else {

//             //try to create new user

//             //password handling
//             const saltRounds = 10;
//             bcrypt.hash(password,saltRounds).then(hashedPassword => {
//                 const newUser = new User({
//                     name,
//                     email,
//                     password: hashedPassword,

//                 });

//                 newUser.save().then(result =>{
//                     res.json({
//                         status: "success",
//                         message: "Signup sucessful",
//                         data: result,
//                     })
//                 })
//                 .catch(err => {
//                     res.json({
//                         status: "FAILED",       
//                         message: "An error occurred while saving user account"
//                     })
//                 })

//             })
//             .catch(err=>{
//                 res.json({
//                     status:"FAILED",
//                     message:"An error occured while hashing password"
//                 }) 
//             })
//         }

//         }).catch(err => {
//             console.log(err)
//             res.json({
//                 status:"FAILED",
//                 message:"An error occured while checking for existing user"
//             })
//         })
//     }


// })

// //signin
// router.post('/signin', (req,res)=> {

// })
// module.exports = router;