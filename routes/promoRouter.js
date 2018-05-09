const express = require('express')
const bodyParser = require('body-parser')
const promoRouter = express.Router()
promoRouter.use(bodyParser.json())
promoRouter.route('/')
  .all((req, res, next) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain')
    next()
  })
  .get((req, res, next) => {
    res.end('Hi there! will send all the Promotions for your request')
  })
  .put((req, res, next) => {
    res.statusCode = 403; //operation not supported 
    res.end(`Thanks! PUT Operation is not supported on /promotions`)
  })
  .post((req, res, next) => {
    res.end(`Thanks! for your valuable input will add the dish: ${req.body.name} with the details : ${req.body.description}`)
  })
  .delete((req, res, next) => {
    res.end('Deleting all the promotions')
  });
//for specific promoID
promoRouter.route('/:promoID')

  .get((req, res, next) => {
    res.end(`Hi there! will send you details of promotion :${req.params.promoID} for your request `)
  })
  .put((req, res, next) => {
    res.end(`Thanks! will update the dish ${req.params.promoID} with promotion name:${req.body.name} and description ${req.body.description}`)
  })
  .post((req, res, next) => {
    res.statusCode = 403; //operation not supported 
    res.end(`Thanks! POST Operation is not supported on /promotions/${req.params.promoID}`)
  })
  .delete((req, res, next) => {
    res.end(`Deleting dish ${req.params.promoID}`)
  });

module.exports = promoRouter