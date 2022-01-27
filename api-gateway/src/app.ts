import express, { Request, Response } from 'express';
import cors from 'cors';
import { router as tripService } from './services/trips';
export const app = express();


app.use(cors());

app.use((req: Request, res: Response, next: () => any) => {
  console.log(`${req.method} ${req.url}`)
  next()
})

app.use('/api', tripService);

