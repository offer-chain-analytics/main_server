import path from 'path';
import fs from 'fs';

import dotenv from 'dotenv';

import { run } from './server';

dotenv.config();

if (!fs.existsSync(path.resolve(__dirname, '..', '.env'))) {
  console.warn('Environment file not found! Using defould values');
}

run(process.env?.SERVER_PORT);
