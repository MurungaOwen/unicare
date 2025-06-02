import app from '../src/app';
import { createServer } from 'http';

export default async function handler(req: any, res: any) {
  const server = createServer((req_, res_) => {
    app(req_, res_);
  });
  server.listen();
  server.emit('request', req, res);
}
