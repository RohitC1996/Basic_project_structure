const joi = require('joi')
joi.objectId = require('joi-objectid')(joi)
const {staffController}  = require('../controllers/index')
const express = require('express')
const router = express.Router()

router.post('/signup' ,(req, res, next) =>{
    const staffRoute = joi.object().keys({
        FirstName : joi.string().alphanum().regex(/^[a-zA-Z. ]+$/).min(3).max(20).required(),
        LastName : joi.string().alphanum().regex(/^[a-zA-Z. ]+$/).min(3).max(20).required(),
        Email : joi.string().trim(true).email().required(),
        Password : joi.string().min(6).trim(true).required(),
        Phone : joi.string().max(10).min(10).required(),
        Gender : joi.string().valid("M","F","O"),
        DOB : joi.date().iso()        
    })
    const {error} = staffRoute.validate(req.body) 
    if(error){
        res.status(404).send(error.message)
        return
    }
    next();
}, staffController.SignupStaff)



///Login
router.post('/login',(req, res, next) =>{
    // if (!(req.body.Email && req.body.Password)) {
    //     return res.status(400).send({ error: "Data not formatted properly" });
    //   }
   const Emailvalid = joi.object().keys({
    Email : joi.string().required().trim(true).email(),
    Password : joi.string().trim(true).required(),
   })
   const {error} = Emailvalid.validate(req.body) 
    if(error){
        res.status(404).send(error.message)
        return
    }
    next();
}, staffController.loginStaff)



//<<<<<<<-------------Get One user------------->>>>>>>>>>>>>

router.get('/profile/:id',(req, res, next) =>{
    const Idvalidate = joi.object({
     id: joi.objectId(), 
    })
    const {error} = Idvalidate.validate(req.params)
     if(error){
         res.status(404).send(error.message)
         return
     }
     next();
 }, staffController.staffData)

 //<<<<<<<<<<<<----------Delete One User------------->>>>>>>>>>>>>>>>...

router.delete('/delete/:id',(req, res, next) =>{
    const Idvalidate = joi.object({
     id: joi.objectId(), 
    })
    const {error} = Idvalidate.validate(req.params)
     if(error){
         res.status(404).send(error.message)
         return
     }
     next();
 }, staffController.deletestaff)






module.exports = router    
