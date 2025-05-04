import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/products.js';

const writeData = async (data) => {
  // console.log('Writing to:', PATH_DB);
  try {
    await fs.writeFile(PATH_DB, JSON.stringify(data, undefined, 2), 'utf-8');
    return true;
  } catch (error) {
    console.error('File writing error: ', error);
  }
};

export default writeData;
