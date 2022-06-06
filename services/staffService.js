const mongoose = require('mongoose')
const {staffSchema}  = require('../models/index')

staffSchema.statics = {
    create : function(data,cb){
        console.log('data: ', data);
        var user = new this(data)
        console.log('cb: ', cb);
        // console.log('data', data)
        user.save(cb)
    },
    getById: function(query,cb){
        this.findOne(query,cb)
    }, 
    getAll: function(query,cb){
        this.find(query,cb)
    }, 
    deleteOne: function(query, cb) { 
        this.findOneAndDelete(query,cb);  
    } 
}

const StaffModel  = mongoose.model('Staff', staffSchema)

module.exports = StaffModel
