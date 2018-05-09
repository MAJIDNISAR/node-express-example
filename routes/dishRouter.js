const express = require('express')
const bodyParser = require('body-parser')
const dishRouter = express.Router()
dishRouter.use(bodyParser.json())
//on /dishes as it is mounted on /dishes in index.js
dishRouter.route('/') //actually mounted on /dishes route in index route we are declaring the endpoint in one single location to avoid mistakes
  .all((req, res, next) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain')
    next()
  })
  .get((req, res, next) => {
    res.end('Hi there! will send all the dishes for your request')
  })
  .post((req, res, next) => {
    res.end(`Thanks! for your valuable input will add the dish: ${req.body.name} with the details : ${req.body.description}`)
  })
  .put((req, res, next) => {
    res.statusCode = 403; //operation not supported 
    res.end(`Thanks! PUT Operation is not supported on /dishes`)
  })
  //dangerous operationa and only authenticated users to be allowed this one
  .delete((req, res, next) => {
    res.end('Deleting all the dishes')
  });
//on a particular id
dishRouter.route('/:dishID')
  .get((req, res, next) => {
    res.end(`Hi there! will send you details of dish :${req.params.dishID} for your request `)
  })
  .post((req, res, next) => {
    res.statusCode = 403; //operation not supported 
    res.end(`Thanks! POST Operation is not supported on /dishes/${req.params.dishID}`)
  })
  .put((req, res, next) => {
    res.end(`Thanks! will update the dish ${req.params.dishID} with Dish name:${req.body.name} and description ${req.body.description}`)
  })
  //dangerous operationa and only authenticated users to be allowed this one
  .delete((req, res, next) => {
    res.end(`Deleting dish ${req.params.dishID}`)
  })

module.exports = dishRouter