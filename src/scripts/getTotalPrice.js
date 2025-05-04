import readData from '../utils/readData.js';

export const getTotalPrice = async () => {
  const products = await readData();
  let totalPrice = 0;
  for (const product of products) {
    totalPrice += Number(product.price);
  }
  return totalPrice;
};

console.log(await getTotalPrice());
