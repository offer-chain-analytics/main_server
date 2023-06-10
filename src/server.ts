import express from 'express';

import { servicesRoutes } from './services';

const app = express();

app.use(express.json());

function applyRoutes(): void {
  servicesRoutes(app);
}

export function run(port: string | undefined): void {
  const activePort = port ? +port : 3000;

  applyRoutes();

  try {
    app.listen(activePort, () => {
      console.log('Server start in', activePort, 'port');
    });
  } catch (err) {
    console.error('Fail start server');
    process.exit(-1);
  }
}
