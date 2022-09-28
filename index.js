const express = require("express")
const Razorpay = require("razorpay")
const app = express();

app.get("/test", async (req,res)=>{
    var instance = new Razorpay({
        key_id: 'rzp_test_xMpBchciV4VQSE',
        key_secret: 'ecwPEz6hRmTTMapOx733NLEB',
      });

    var orders = await instance.orders.all();

    res.send(JSON.stringify(orders));
})

app.listen(5000,()=>{console.log("port listen")})