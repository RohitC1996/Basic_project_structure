const { Staff } = require('../services/index')
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')


module.exports = {
    SignupStaff: async function (req, res, next) {
      
        try {
            var user = await Staff.find({ Email: req.body.Email })
            if(user.length>0){
                throw "Email Already Exit"

            }
        } catch (error) {
            return res.status(404).send(error)
        }

        bcrypt.hash(req.body.Password, 10).then(function (hash) {
            var user = {
                FirstName: req.body.FirstName,
                LastName: req.body.LastName,
                Email: req.body.Email,
                Password: hash,
                Phone: req.body.Phone,
                Gender: req.body.Gender,
                DOB :req.body.DOB
            }
            Staff.create(user, function (err, user) {
                if (err) {
                    res.status(404).json({
                        message: "User Can't Create",
                        error: err
                    })
                }
                console.log(user);
                res.status(200).json({
                    message: "User created successfully", user: user
                })
            })
        })
    },
    loginStaff: async (req, res, next) => {

        const User = await Staff.findOne({ Email: req.body.Email })
        if (!User) {
            res.status(404).json({
                message: "InValid Email"
            })
        }
        else {
            let validPass = await bcrypt.compare(req.body.Password, User.Password)
            if (validPass) {
                res.status(201).json({ message: "Login Succesfull", User: User })
            }
            if (!validPass) {
                res.status(404).json({
                    message: "incorrect Password"
                })
            }

        }
    },
    staffData: (req, res, next) => {
        if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
            // console.log('req.params.id', req.params.id)
            res.json({ message: "Invalid Staff ID" })
        }
        Staff.getById({ _id: req.params.id }, function (err, User) {

            if (err) {
                res.status(201).json({
                    error: err
                })
            }
            res.status(200).json({ message: " Staff data", User: User })
        })
    },

    getall: (req, res, next) => {
        
        Staff.getAll({}, function (err, User) {

            if (err) {
                res.status(404).json({
                    error: err
                })
            }
            res.status(200).json({ message: " Staff data", User: User })
        })
    },

    // <<<<<<<<<<<<<<--------Delete One User --------------->>>>>>>>>>>>>>>>>>>
    deletestaff: function (req, res, next) {
        if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
            res.json({ message: "Invalid Staff ID" })
        }
        Staff.deleteOne({ _id: req.params.id }, function (err, user) {
            // console.log(req.params.id);
            // console.log(user);  
            if (err) {
                res.status(404).json({
                    error: err
                })
            }
            res.status(201).json({
                message: "Staff deleted sucessfully", user: user
            })
        })
    }

}