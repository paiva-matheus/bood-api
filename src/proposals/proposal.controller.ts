import { RequestHandler } from 'express';
import * as ProposalService from '@/proposals/proposal.service';
import { AppError } from '@/lib/utilityClasses';

export const createProposal: RequestHandler = async (req, res, next) => {
  const { name, email, observation, propertyId } = req.body;
  try {
    const proposal = await ProposalService.createProposal(
      name,
      email,
      observation,
      propertyId
    );
    res.status(201).json(proposal);
  } catch (error: any) {
    next(
      new AppError('validation', `${error.meta.modelName} ${error.meta.cause}`)
    );
  }
};
