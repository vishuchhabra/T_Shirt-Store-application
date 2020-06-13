const { Order, ProductCart } = require("../models/order");
const { populate } = require("../models/user");
const { readSync } = require("fs");


exports.getOrderById = (req, res,next,id)=>{
    Order.findById(id)
    .populate("products.product","name price") //information about the product by using filed products.product
    .exec((err, order)=>{
        if(err){
        return res.status(400).json({
            error:"No order found in DB"
        })
        }
        req.order = order
        next()
    })
}


exports.createOrder =(req, res)=>
{
    req.body.order.user =req.profile//by param
    const order = new Order(req.body.order)
    order.save((err, order)=>
    {
        if(err){
        return res.status(400).json({
            error:"Failed to  save your order in DB"
        })
        }
        res.json(order)
    })
}


//get all the order
exports.getAllOrders = (req, res)=>
{
    Order.find().populate("user" ,"_id name")
    .exec((err, order)=>
    {
        if(err){
            return res.status(400).json({
                error:"No orders found in DB"
            })
        }
        res.json(order)
    })
}


//for getting the status
exports.getOrderStatus =(req, res)=>
{
    res.json(Order.schema.path("status").enumvalues)//for getting the Schema 
}

//for updating the status
exports.updateStatus = (req, res)=>
{
    Order.update(
      {_id:req.body.orderId},
      {$set:{ status: req.body.status}},
      (err, order)=>
      {
         if(err)
         {
            return res.status(400).json({
                error:"Cannot update order status"
            })
         }
        res.json(order)
    })
}