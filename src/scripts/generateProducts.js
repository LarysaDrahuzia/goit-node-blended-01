import { createFakeProduct } from '../utils/createFakeProduct.js';
import readData from '../utils/readData.js';
import writeData from '../utils/writeData.js';

export async function generateProducts(count) {
  if (!Number.isInteger(count) || count < 1) {
    console.error('Please provide the correct quantity of products.');
    return;
  }

  const dbData = await readData();
  dbData.products = dbData.products || [];

  for (let i = 0; i < count; i++) {
    dbData.products.push(createFakeProduct());
  }

  await writeData(dbData);

  console.log(`Successfully added ${count} new products.`);
}

generateProducts(4);
