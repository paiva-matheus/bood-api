import { z } from 'zod';

export const CreateProposalSchema = z.object({
  body: z.object({
    name: z.string(),
    email: z.string().email(),
    observation: z.string().optional(),
    propertyId: z.string().uuid(),
  }),
});

export type CreateProposalSchema = z.infer<typeof CreateProposalSchema>['body'];
