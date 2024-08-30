# Bood API

## Getting started

- Run: `npm install`

- Create a .env file with the DATABASE_URL variable you want to use
  or
- Convert .env.example file to .env
- And with Docker installed on your machine run: `docker-compose up db -d`
- Run `npx prisma generate`
- Run `npx prisma migrate dev`

Now server is running in [`localhost:8000`](http://localhost:8000).

## DB Seed

- To populate the database with some properties, you can run: `npx prisma db seed`

**To test application:**

- Unit tests run: `npm run test:unit`
- Unit tests with UI run: `npm run test:unit:ui`
- Int tests run: `npm run test:int`
- Int tests with UI run: `npm run test:int:ui`
