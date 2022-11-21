import express from 'express';
import {z} from "zod"
import vildate from '../midelware/vildate'
import{parkSchama, parkSchamatype} from "../schama/park.schama"

  const router = express.Router();
let parkmang:parkSchamatype[]=[]

router.get("/",(req,res)=> {
return res.send(parkmang)
})

router.post('/', vildate(parkSchama), (req, res) => {
    const test = req.body as parkSchamatype;
   parkmang.push(test);
    return res.status(201).json({ message: 'new radis Added !' });
  });
  
  router.put("/:id", vildate(parkSchama), (req, res) => {
    const park_manag_updated = req.body as parkSchamatype;
    const { id } = req.params;
    const park_managupdated = parkmang.filter((park) => {
      return park.id !== id;
    });
    park_managupdated.push(park_manag_updated)
    return res.send({ message: "park ride  updated!" });
  })


  router.delete("/:id", vildate(parkSchama), (req, res) => {
    const { id } = req.params;
    const deletedride = parkmang.filter((park) => {
      return park.id !== id;
    });
    parkmang = deletedride;
    return res.send({ message: "park ride Deleted!" });
  });



export default router;
