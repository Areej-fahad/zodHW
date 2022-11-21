import express from 'express';
import {z} from "zod"
import vildate from '../midelware/vildate'
import{movieschama, movieschamatype} from "../schama/movie.schama"

  const router = express.Router();
let movie:movieschamatype[]=[]

router.get("/",(req,res)=> {
return res.json(movie)
})
router.get("/search/:id",(req,res)=> {
  const {id}=req.params
  const search=movie.filter((search_arr)=>{
if (search_arr.name===id ||search_arr.genre===id)
return search_arr


  })
  return res.json(search)
  })


router.post('/', vildate(movieschama), (req, res) => {
    const test = req.body as movieschamatype;
   movie.push(test);
    return res.status(201).json({ message: 'new movie Added !' });
  });
  
  router.put("/:id", vildate(movieschama), (req, res) => {
    const movie_update = req.body as movieschamatype;
    const { id } = req.params;
    const movieupdat = movie.filter((movie_sys) => {
      return movie_sys.id !== id;
    });
    movieupdat.push(movie_update)
    movie=movieupdat // عند التغيير لازم اغير الاساس 
    return res.send({ message: "movie  updated!" });
  })


  router.delete("/:id", vildate(movieschama), (req, res) => {
    const { id } = req.params;
    const deletedride = movie.filter((movie_sys) => {
      return movie_sys.id !== id;
    });
    movie = deletedride;
    return res.send({ message: "movie  Deleted!" });
  });



export default router;
