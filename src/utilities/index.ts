import productData from '../data';
import { ProductTitles, ProductTypes } from '../shared/types';
export const getProductId = (
  title: ProductTitles,
  productType: ProductTypes,
) => {
  try {
    const product = productData[productType].find(
      (product) => product.title === title,
    );
    if (!product) throw new Error('No id found for the product');
    else {
      return product.id;
    }
  } catch (e) {
    console.error(e);
    return -1;
  }
};
