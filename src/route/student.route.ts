import express from 'express';
import {z} from "zod"
import vildate from '../midelware/vildate'
import { stdentscama,stdentscamatype } from '../schama/student.schama';
  const router = express.Router();
let stdent:stdentscamatype[]=[]

router.get("/",(req,res)=> {
return res.json(stdent)
}) 
router.get("/search/:id",(req,res)=> {
  const {id}= req.params 
const searcharr= stdent.filter((search)=>{ 
if ( search.name===id || search.major===id)
return  search
})
return res.json(stdent)


  })


router.post('/', vildate(stdentscama), (req, res) => {
    const test = req.body as stdentscamatype;
   stdent.push(test);
    return res.status(201).json({ message: 'student  Added !' });
  });
  
  router.put("/:id", vildate(stdentscama), (req, res) => {
    const student_update = req.body as stdentscamatype;
    const { id } = req.params;
    const studentupdate = stdent.filter((students) => {
      return students.id !== id;
    });
    studentupdate.push(student_update)
    stdent=studentupdate  
    return res.send({ message: "student  updated!" });
  })


  router.delete("/:id", vildate(stdentscama), (req, res) => {
    const { id } = req.params;
    const studentdelete = stdent.filter((student) => {
      return student.id !== id;
    });
    stdent = studentdelete;
    return res.send({ message: "student  Deleted!" });
  });



export default router;
