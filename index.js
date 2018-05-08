const express = require('express')
const http = require('http')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const hostname = 'localhost'
const port = 3000
const app = express();
app.use(morgan('dev'))
app.use(bodyParser.json())
//general middleware
app.all('/dishes', (req, res, next) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/plain')
  next()
});
app.get('/dishes', (req, res, next) => {
  res.end('Hi there! will send all the dishes for your request')
});
app.post('/dishes', (req, res, next) => {
  res.end(`Thanks! for your valuable input will add the dish: ${req.body.name} with the details : ${req.body.description}`)
});
app.put('/dishes', (req, res, next) => {
  res.statusCode = 403; //operation not supported 
  res.end(`Thanks! PUT Operation is not supported on /dishes`)
});
//dangerous operationa and only authenticated users to be allowed this one
app.delete('/dishes', (req, res, next) => {
  res.end('Deleting all the dishes')
});

//on a particular id

app.get('/dishes/:dishID', (req, res, next) => {
  res.end(`Hi there! will send you details of dish :${req.params.dishID} for your request `)
});
app.post('/dishes/:dishID', (req, res, next) => {
  res.statusCode = 403; //operation not supported 
  res.end(`Thanks! POST Operation is not supported on /dishes/${req.params.dishID}`)
});
app.put('/dishes/:dishID', (req, res, next) => {
  console.log(req)
  res.end(`Thanks! will update the dish ${req.params.dishID} with Dish name:${req.body.name} and description ${req.body.description}`)
});
//dangerous operationa and only authenticated users to be allowed this one
app.delete('/dishes/:dishID', (req, res, next) => {
  res.end(`Deleting dish ${req.params.dishID}`)
});

app.use(express.static(__dirname + '/public'))
app.use((req, res, next) => {
  // console.log(req.headers)
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/html')
  res.end('<html><body><h1>This is an Express Server</h1></body></hmtl>')
})
const server = http.createServer(app)
server.listen(port, hostname, () => {
  console.log(`Server is listening on http://${hostname}:${port}`)
})