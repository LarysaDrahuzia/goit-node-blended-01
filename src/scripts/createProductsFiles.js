import readData from '../utils/readData.js';
import { PATH_FILES_DIR } from '../constants/products.js';
import path from 'node:path';
import fs from 'node:fs/promises';

export const createProductsFiles = async () => {
  try {
    const products = await readData();
    for (const product of products) {
      const fileName = `${product.name
        .toLowerCase()
        .split(' ')
        .join('-')}.json`;
      const filePath = path.join(PATH_FILES_DIR, fileName);
      const content = JSON.stringify(product, undefined, 2);
      await fs.writeFile(filePath, content);
    }
  } catch (error) {
    console.error(error);
  }
};

createProductsFiles();
