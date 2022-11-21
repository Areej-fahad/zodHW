import express from 'express';
import { z } from 'zod';
import parkroute from "./route/park.route"
import movie from "./route/movie.route"
import student from "./route/student.route"
import bank  from './route/bank.route';
import { movieschama } from './schama/movie.schama';

const app = express();
app.use(express.json());
const port=5000;
app.use('/park',parkroute)
app.use("/movie",movie)
app.use("/student", student)
app.use("/bank",bank)
app.listen(port, () => {
  console.log(`Server is running in ${port}`);
});
