const express = require("express")
const Razorpay = require("razorpay")
const app = express();
const port = process.env.Port || 5000

app.get("/", async (req,res)=>{
    // var instance = new Razorpay({
    //     key_id: 'rzp_test_xMpBchciV4VQSE',
    //     key_secret: 'ecwPEz6hRmTTMapOx733NLEB',
    //   });

    // var orders = await instance.orders.all();

    res.send("hiiiiiiiiiiiiii");
})

app.listen(port,()=>{console.log("port listen")})