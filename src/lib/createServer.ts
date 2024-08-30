import cors from 'cors';
import express from 'express';
import { errorHandler, validate } from '@/lib//middlewares';
import propertiesRouter from '@/properties/property.router';
import proposalsRouter from '@/proposals/proposal.router';
import { CreateProposalSchema } from '@/proposals/proposal.schemas';

const app = express();
app.use(cors());
app.use(express.json());
app.use('/properties', propertiesRouter);
app.use('/proposals', validate(CreateProposalSchema), proposalsRouter);
app.use(errorHandler);

export default app;
