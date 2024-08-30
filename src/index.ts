import app from '@/lib/createServer';

app.listen(
  { host: '0.0.0.0', port: process.env.PORT ? Number(process.env.PORT) : 8000 },
  () => console.log(`Server ready at: http://localhost:8000`)
);
