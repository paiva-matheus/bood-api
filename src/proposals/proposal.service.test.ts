import { describe, expect, test, vi } from 'vitest';
import prisma from '@/lib/__mocks__/prisma';
import { randomUUID } from 'crypto';
import * as ProposalService from '@/proposals/proposal.service';

vi.mock('@/lib/prisma');

describe('createProposal', () => {
  test('create a proposal', async () => {
    const newProposal = {
      id: randomUUID(),
      name: 'Dwight',
      email: 'dwight@mail.com',
      observation: 'Gostei da casa, vamos conversar!',
      propertyId: randomUUID(),
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    prisma.proposal.create.mockResolvedValue(newProposal);

    const proposal = await ProposalService.createProposal(
      newProposal.name,
      newProposal.email,
      newProposal.observation,
      newProposal.propertyId
    );

    expect(proposal).toStrictEqual(newProposal);
  });
});
