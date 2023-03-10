import express, { Request, Response } from 'express';
import cors from 'cors';
import next from 'next';

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.use(
    cors({
      origin: ['http://localhost:5173', process.env.FRONT_APP_URL as string],
    })
  );

  server.get('*', (req: Request, res: Response) => {
    return handle(req, res);
  });

  server.listen(3000, (err?: Error) => {
    if (err) throw err;
    console.log(`> Ready on ${window.location.href}`);
  });
});
