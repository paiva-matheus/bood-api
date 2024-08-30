import { describe, expect, test } from 'vitest';
import request from 'supertest';
import app from '@/lib/createServer';
import prisma from '@/tests/helpers/prisma';
import { randomUUID } from 'crypto';

describe('[POST] /proposals', () => {
  test('returns 201', async () => {
    const { id: propertyId } = await prisma.property.create({
      data: {
        title: 'Casa na lagoa',
        description: 'Casa de veraneio no litoral de São Paulo',
        imageUrl: 'image',
        price: 2000000,
      },
    });

    const { status, body } = await request(app).post('/proposals').send({
      name: 'Dwight',
      email: 'dwight@mail.com',
      observation: 'Vamos negociar?',
      propertyId: propertyId,
    });

    expect(status).toBe(201);
    expect(body).toStrictEqual({
      id: body.id,
      name: 'Dwight',
      email: 'dwight@mail.com',
      observation: 'Vamos negociar?',
      propertyId: propertyId,
    });
  });

  test('returns 400 when propertyId is invalid', async () => {
    const { status, body } = await request(app).post('/proposals').send({
      name: 'Dwight',
      email: 'dwight@mail.com',
      observation: 'Vamos negociar?',
      propertyId: 1,
    });

    expect(status).toBe(400);
    expect(body).toStrictEqual({
      message: 'Invalid or missing input provided for: propertyId',
    });
  });

  test('returns 400 when email is invalid', async () => {
    const { status, body } = await request(app).post('/proposals').send({
      name: 'Dwight',
      email: 'dwight@com',
      observation: 'Vamos negociar?',
      propertyId: randomUUID(),
    });

    expect(status).toBe(400);
    expect(body).toStrictEqual({
      message: 'Invalid or missing input provided for: email',
    });
  });

  test('returns 400 when propertyId does not exist', async () => {
    const { status, body } = await request(app).post('/proposals').send({
      name: 'Dwight',
      email: 'dwight@mail.com',
      observation: 'Vamos negociar?',
      propertyId: randomUUID(),
    });

    expect(status).toBe(400);
    expect(body).toStrictEqual({
      message:
        "Proposal No 'Property' record(s) (needed to inline the relation on 'Proposal' record(s)) was found for a nested connect on one-to-many relation 'PropertyToProposal'.",
    });
  });
});
