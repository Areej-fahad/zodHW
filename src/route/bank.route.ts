import express from 'express';
import {z} from "zod"
import vildate from '../midelware/vildate'
import { bankschamatype,bankschama } from '../schama/bank.schama';

  const router = express.Router();
let bank: bankschamatype[]=[]

router.get("/",(req,res)=> {
return res.json(bank)
})

router.post('/', vildate(bankschama), (req, res) => {
    const test = req.body as bankschamatype;
   bank.push(test);
    return res.status(201).json({ message: ' new customer Added !' });
  });
  
  router.put("/:id", vildate(bankschama), (req, res) => {
    const customer_update = req.body as bankschamatype;
    const { id } = req.params;
    const customerupdat = bank.filter((bank_sys) => {
      return bank_sys.id !== id;
    });
    customerupdat.push(customer_update)
    bank=customerupdat // عند التغيير لازم اغير الاساس 
    return res.send({ message: " customer updated!" });
  })


  router.delete("/:id", vildate(bankschama), (req, res) => {
    const { id } = req.params;
    const deletedaccount = bank.filter((bank_sys) => {
      return bank_sys.id !== id;
    });
    bank = deletedaccount;
    return res.send({ message: "account  Deleted!" });
  });



export default router;
