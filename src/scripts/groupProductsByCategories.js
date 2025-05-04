import readData from '../utils/readData.js';

export const groupProductsByCategories = async () => {
  try {
    const products = await readData();
    return products.reduce((acc, product) => {
      const { category, name } = product;
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(name);
      return acc;
    }, {});
  } catch (error) {
    console.error(error);
  }
};

console.log(await groupProductsByCategories());
