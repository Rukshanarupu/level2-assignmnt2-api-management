import express, { NextFunction, Request, Response } from "express"
import bodyParser from 'body-parser';
import { ProductsRoutes } from "./modules/student/ECommerce.route";

const app = express()

app.use(bodyParser.json());
app.use(express.json());
app.use('/api/products', ProductsRoutes)

// app.use((err: any, req: Request, res: Response, next: NextFunction) => {
//   console.error(err);
//   res.status(400).send('Bad Request');
// });

app.get("/", (req: Request, res: Response) => {
  res.send("Hello Next!");
})

export default app
