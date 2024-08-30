import { Router } from 'express';
import * as ProposalsController from '@/proposals/proposal.controller';
import { validate } from '@/lib/middlewares';
import { CreateProposalSchema } from '@/proposals/proposal.schemas';

const router = Router();

router.post(
  '/',
  validate(CreateProposalSchema),
  ProposalsController.createProposal
);

export default router;
