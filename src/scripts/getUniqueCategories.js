import readData from '../utils/readData.js';

export const getUniqueCategories = async () => {
  try {
    const products = await readData();
    let categoriesProducts = [];
    for (const product of products) {
      if (!categoriesProducts.includes(product.category)) {
        categoriesProducts.push(product.category);
      }
    }
    return categoriesProducts;
  } catch (error) {
    console.error(error);
  }
};

console.log(await getUniqueCategories());
