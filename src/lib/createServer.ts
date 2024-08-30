import cors from 'cors';
import express from 'express';
import { errorHandler, validate } from '@/lib//middlewares';
import propertiesRouter from '@/properties/property.router';

const app = express();
app.use(cors());
app.use(express.json());
app.use('/properties', propertiesRouter);
app.use(errorHandler);

export default app;
