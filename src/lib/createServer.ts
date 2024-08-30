import cors from 'cors';
import express from 'express';
import { errorHandler, validate } from '@/lib//middlewares';

const app = express();
app.use(cors());
app.use(express.json());
app.use(errorHandler);

export default app;
