import * as PropertyService from '@/properties/property.service';
import { describe, expect, test, vi } from 'vitest';
import prisma from '@/lib/__mocks__/prisma';
import { Property } from '@prisma/client';
import { randomUUID } from 'crypto';

vi.mock('@/lib/prisma');

describe('getProperties', () => {
  test('returns a list of properties', async () => {
    const mockProperty: Property = {
      id: randomUUID(),
      title: 'Casa na praia',
      description: 'Casa de veraneio no litoral de São Paulo',
      imageUrl: 'image',
      price: 2000000,
      features: ['3 quartos'],
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    prisma.property.findMany.mockResolvedValue([mockProperty]);

    const sortBy = 'title';
    const sortOrder = 'asc';
    const page = 1;
    const pageSize = 1;

    const response = await PropertyService.getProperties(
      sortBy,
      sortOrder,
      page,
      pageSize
    );

    expect(response.properties).toStrictEqual([mockProperty]);
  });
});

describe('getProperty', () => {
  test('returns a property', async () => {
    const mockProperty: Property = {
      id: randomUUID(),
      title: 'Casa na praia',
      description: 'Casa de veraneio no litoral de São Paulo',
      imageUrl: 'image',
      price: 2000000,
      features: ['3 quartos'],
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    prisma.property.findUnique.mockResolvedValue(mockProperty);

    const property = await PropertyService.getPropertyById(mockProperty.id);

    expect(property).toStrictEqual(mockProperty);
  });
});
