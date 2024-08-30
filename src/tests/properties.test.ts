import { describe, expect, test, beforeEach } from 'vitest';
import request from 'supertest';
import app from '@/lib/createServer';
import prisma from '@/tests/helpers/prisma';
import { randomUUID } from 'crypto';

describe('properties routes', () => {
  describe('[GET] /properties', () => {
    beforeEach(async () => {
      const propertiesData = [
        {
          title: 'Casa 1',
          imageUrl:
            'https://cdn.pixabay.com/photo/2014/11/21/17/17/house-540796_1280.jpg',
          price: 345453.45,
          description:
            'Aninhado no topo de uma colina enevoada, O Torreão Encantado é um castelo mágico com torres cobertas de hera e um jardim no telhado cheio de flores luminescentes. ',
          features: ['3 quartos'],
        },

        {
          title: 'Casa 2',
          imageUrl:
            'https://cdn.pixabay.com/photo/2022/01/26/04/47/house-6967908_1280.jpg',
          price: 345453.45,
          description:
            'Aninhado no topo de uma colina enevoada, O Torreão Encantado é um castelo mágico com torres cobertas de hera e um jardim no telhado cheio de flores luminescentes. ',
          features: ['3 quartos'],
        },
      ];

      for (const _property of propertiesData) {
        await prisma.property.create({
          data: _property,
        });
      }
    });

    test('returns 200', async () => {
      const { status, body } = await request(app).get('/properties').send();
      const properties = await prisma.property.findMany({
        select: {
          id: true,
          title: true,
          description: true,
          imageUrl: true,
          price: true,
          features: true,
        },
      });

      expect(status).toBe(200);
      expect(body.data).toStrictEqual(properties);
    });
  });

  describe('[GET] /properties/id', () => {
    beforeEach(async () => {
      await prisma.property.create({
        data: {
          title: 'Casa na praia Guaru',
          imageUrl:
            'https://cdn.pixabay.com/photo/2022/01/26/04/47/house-6967908_1280.jpg',
          price: 345453.45,
          description:
            'Aninhado no topo de uma colina enevoada, O Torreão Encantado é um castelo mágico com torres cobertas de hera e um jardim no telhado cheio de flores luminescentes. ',
          features: ['3 quartos'],
        },
      });
    });
    test('returns 200', async () => {
      const property = await prisma.property.findFirst({
        where: {
          title: 'Casa na praia Guaru',
        },
        select: {
          id: true,
          title: true,
          description: true,
          imageUrl: true,
          price: true,
          features: true,
        },
      });

      const { status, body } = await request(app)
        .get(`/properties/${property!.id}`)
        .send();

      expect(status).toBe(200);
      expect(body).toStrictEqual({
        data: {
          id: body.data.id,
          title: 'Casa na praia Guaru',
          imageUrl:
            'https://cdn.pixabay.com/photo/2022/01/26/04/47/house-6967908_1280.jpg',
          price: 345453.45,
          description:
            'Aninhado no topo de uma colina enevoada, O Torreão Encantado é um castelo mágico com torres cobertas de hera e um jardim no telhado cheio de flores luminescentes. ',
          features: ['3 quartos'],
        },
      });
    });

    test('returns 404', async () => {
      const id = randomUUID();
      const { status, body } = await request(app)
        .get(`/properties/${id}}`)
        .send();

      expect(status).toBe(404);
      expect(body).toStrictEqual({ message: 'Property Not Found' });
    });
  });
});
