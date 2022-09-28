var express = require('express')
const Razorpay = require("razorpay")
var app = express()

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

app.get('/', async function(request, response) {
    var instance = new Razorpay({
     key_id: 'rzp_test_xMpBchciV4VQSE',
     key_secret: 'ecwPEz6hRmTTMapOx733NLEB',
    });

    var orders = await instance.orders.all();  
  response.send(orders);
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
