import express from 'express';
import { z } from 'zod';
import parkroute from "../src/route/parkroute"

const app = express();
app.use(express.json());
const port=5000;
app.use('/park',parkroute);


app.listen( () => {
  console.log(`Server is running in ${port}`);
});
