import readData from '../utils/readData.js';

export const getProductsByMinPrice = async (price) => {
  try {
    const products = await readData();

    const productsPrice = products.filter((product) => product.price >= price);
    return productsPrice;
  } catch (error) {
    console.error(error);
  }
};

console.log(await getProductsByMinPrice(300));
