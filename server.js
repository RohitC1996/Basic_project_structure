const express = require('express')
const dotenv = require('dotenv').config()
const swaggerUi = require("swagger-ui-express")
const swaggerDocument = require('./swagger.json')
const app = express()
const port = process.env.PORT
const {staffRoutes} = require('./routes/index')

// dbconfig 
const {dbconfig} =require('./config/index') 
 


app.get('/', (req , res )=>{
    res.send('Hello from home  page')
})

// middleware 
app.use(express.json());

app.use('/api', staffRoutes)

app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(port , ()=>{
    console.log(`listoning the port ${port}`);
})