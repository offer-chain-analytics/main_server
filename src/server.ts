import express from 'express';

const app = express()

app.use(express.json());

export function run(port: string | undefined): void {
  const activePort = port ? +port : 3000;

  try {
    app.listen(activePort, () => {
      console.log('Server start in', activePort, 'port');
    });
  } catch (err) {
    console.error('Fail start server');
    process.exit(-1);
  }
}
