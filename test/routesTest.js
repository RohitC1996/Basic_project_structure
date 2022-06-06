var chai = require('chai')
var expect = chai.expect
const express = require('express')
 chai.should()
var server = require('../server')

let chaiHttp = require('chai-http');
const { response } = require('../server');

chai.use(chaiHttp)

describe( " api/staff/profile/:id", function(){
    it("It should get single staff data", function(done){
       // const id = "1"
        chai.request(server)
        .get(`/api/staff/profile/:id`)
        .end((err, response)=>{
            response.should.have.status(200);
            response.body.should.be.a('object')
            done();
        })
    })
})

describe( " api/staff/delete/:id", function(){
    it("it should delete single staff data", function(done){
      chai.request(server)
        .delete(`/api/staff/delete/:id`)
        .end((err, response)=>{
            response.should.have.status(200);
            response.body.should.be.a('object');
            done();
        })
    })
})

describe( "/api/staff/signup ", function(){
    it("It should signup staff", function(done){
        chai.request(server)
        .post(`/api/staff/signup`)
        .end((err, response)=>{
            response.should.have.status(200);       
            response.body.should.be.a('object')
            done();
        })
    })
})

describe( "/api/staff/login ", function(){
    it("It should login staff", function(done){
        chai.request(server)
        .post(`/api/staff/login`)
        .end((err, response)=>{
            response.should.have.status(200);       
            response.body.should.be.a('object')
            done();
        })
    })
})
