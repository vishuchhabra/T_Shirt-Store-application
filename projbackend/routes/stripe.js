const router = require('express').Router()
const stripe = require("stripe")("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")
const uuid = require("uuid/v4")
//router for stripe payment
router.post('/stripepayment',(req, res)=>{
  const {products,token} = req.body

  console.log("Products",products)

  let amount =0 ;
    products.map ( p =>{
            amount = amount + p.price
    })
  const idempotencyKey = uuid()

  return stripe.customers.create({
      email:token.email,
      source : token.id
  })
  .then(customer =>{
      stripe.charges.create({
          amount: amount *100,
          currency:'usd',
          customer:customer.id,
          receipt_email : token.email,
          description :"A Test Accont",
          shipping:{
              name:token.card.name ,
              address :{
                  line1 : token.card.address_line1,
                  line2 : token.card.address_line2,
                  city : token.card.address_city,
                  country : token.card.address_country,
                  postal_code : token.card.address_zip 
                
              } 
          }
      },{idempotencyKey})
      .then(result =>{  
          res.status(200).json(result)
      })
      .catch(err=> console.log(err))
  })
    

})

module.exports = router 