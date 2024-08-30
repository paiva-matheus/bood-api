import prisma from '@/lib/prisma';

export const createProposal = async (
  name: string,
  email: string,
  observation: string,
  propertyId: string
) => {
  const proposal = await prisma.proposal.create({
    data: {
      name,
      email,
      observation,
      property: {
        connect: {
          id: propertyId,
        },
      },
    },
  });
  return proposal;
};
