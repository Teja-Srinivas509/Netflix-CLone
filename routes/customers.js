const express = require('express')
const  Customer = require("../authorised/customer.js");


const router = express.Router();

// router.post('/',async (req,res)=>{
//    try{
//    const newCustomer = new Customer(req.body)
//    const savedCustomer = await newCustomer.save()
//     res.status(200).send("Customer added successfully")
//     res.status(200).json(savedCustomer)
//  }catch(err){
//     res.status(400).json({message: err.message})
//    }
// })

router.post('/login', async (req, res) => {
         const { email, password } = req.body;
         console.log('Email:', email);
         console.log('Password:', password);
       
         try {
           const customer = await Customer.findOne({ email, password });
           if (!customer) {
             return res.status(401).json({ message: 'Invalid credentials' });
           }
         console.log(customer)
          // return res.json(customer)
          return res.status(200).json(customer)
          //  res.redirect("http://localhost:3000/")
         } catch (err) {
           res.status(500).json({ message: err.message });
         }
       });

router.get('/all',async (req,res)=>{
  try{
    const items = await Customer.find()
     return res.status(200).json(items)
  }catch(err){
    res.status(400).json({message: err.message})
  }
})
module.exports=router;
