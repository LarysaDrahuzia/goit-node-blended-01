import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/products.js';

const readData = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error('Reading file error: ', error);
  }
};

export default readData;
