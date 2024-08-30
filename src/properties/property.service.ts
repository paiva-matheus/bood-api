import prisma from '@/lib/prisma';

export type Order = 'asc' | 'desc';

export const getProperties = async (
  sortBy: string,
  sortOrder: 'asc' | 'desc',
  page: number,
  pageSize: number
) => {
  const validSortBy = ['price', 'title'];
  const sortField = validSortBy.includes(sortBy) ? sortBy : 'title';

  const properties = await prisma.property.findMany({
    select: {
      id: true,
      title: true,
      description: true,
      imageUrl: true,
      price: true,
      features: true,
    },
    orderBy: {
      [sortField]: sortOrder,
    },
    skip: (page - 1) * pageSize,
    take: pageSize,
  });

  const totalRecords = await prisma.property.count();

  return {
    properties,
    totalRecords,
  };
};

export const getPropertyById = async (id: string) => {
  return await prisma.property.findUnique({
    where: { id },
    select: {
      id: true,
      title: true,
      description: true,
      imageUrl: true,
      price: true,
      features: true,
    },
  });
};
