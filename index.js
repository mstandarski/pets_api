(function() {

//this brings in the express library for me to use
//just like bringing in jQuery when we are in a browser
  let express = require("express");

//creates a new express application, called 'app'
//reminder: the '()' runs or executes that thing
  let app = express();


//going to http://localhost:8000 returns 'hello world!'
//the '/' tells the browser the route, or what follows the localhost:8000.
//the info between the parenthesis in .send() will be spit out in the browser.
  app.get('/', function (req, res) {
    res.send('Hello World!')
  })


//here, we would go to http://localhost:8000/api/pets to return the api about pets
  app.get('/api/pets', function (req, res) {
    res.send({
  "data": {
    "pets": [
      {
        "id": 1,
        "name": "Fluffy",
        "age": 5,
        "uri": "/api/pets/1"
      }, {
        "id": 2,
        "name": "Bob",
        "age": 6,
        "uri": "/api/pets/1"
      }
    ]
  }
})
  })

  app.get('/api/pets/1', function (req, res) {
    res.send({
      "data": {
        "id": 1,
        "name": "Fluffy",
        "age": 5,
        "type": "dog"
      }

})
  })

  app.get('/api/pets/2', function (req, res) {
    res.send({
      "data": {
        "id": 2,
        "name": "Bob",
        "age": 6,
        "type": "cat"
      }

})
  })

//the number in the parenthesis in .listen() tells express which port your info should display on.
//you can change the number in .listen() without issue, just make sure you likewise change
//the number reflected in the localhost:####
  app.listen(8000, function () {
    console.log('Example app listening on port 8000!')
  })


})();
