import readData from '../utils/readData.js';
import writeData from '../utils/writeData.js';

export const modifyProducts = async () => {
  try {
    const products = await readData();
    const newModifiProducts = products.map(
      ({ description, ...products }) => products,
    );
    return await writeData(newModifiProducts);
  } catch (error) {
    console.error(error);
  }
};

modifyProducts();
