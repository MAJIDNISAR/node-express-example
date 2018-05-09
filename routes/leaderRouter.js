const express = require('express')
const bodyParser = require('body-parser')
const leaderRouter = express.Router()
leaderRouter.use(bodyParser.json())
leaderRouter.route('/')
  .all((req, res, next) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain')
    next()
  })
  .get((req, res, next) => {
    res.end('Hi there! will send all the leadership for your request')

  })
  .put((req, res, next) => {
    res.statusCode = 403; //operation not supported 
    res.end(`Thanks! PUT Operation is not supported on /leaders`)
  })
  .post((req, res, next) => {
    res.end(`Thanks! for your valuable input will add the leader: ${req.body.name} with the details : ${req.body.description}`)
  })
  .delete((req, res, next) => {
    res.end('Deleting all the leaders')
  });
leaderRouter.route('/:leaderID')
  .get((req, res, next) => {
    res.end(`Hi there! will send you details of leader :${req.params.leaderID} for your request `)
  })
  .put((req, res, next) => {
    res.end(`Thanks! will update the leader ${req.params.leaderID} with leader name:${req.body.name} and description ${req.body.description}`)

  })
  .post((req, res, next) => {
    res.statusCode = 403; //operation not supported 
    res.end(`Thanks! POST Operation is not supported on /leaders/${req.params.leaderID}`)
  })
  .delete((req, res, next) => {
    res.end(`Deleting dish ${req.params.leaderID}`)
  });
module.exports = leaderRouter