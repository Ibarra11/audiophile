import productData from '../data';
import { ProductTitles, ProductTypes } from '../shared/types';
interface ProductDetails {
  title: ProductTitles;
  productType: ProductTypes;
}
export const getProductId = (
  title: ProductTitles,
  productType: ProductTypes,
) => {
  try {
    const product = productData[productType].find((product) => {
      return product.title === title;
    });
    if (!product) throw new Error('No id found for the product');
    else {
      return product.id;
    }
  } catch (e) {
    return -1;
  }
};

export const getProductLink = ({ title, productType }: ProductDetails) => {
  try {
    const id = getProductId(title, productType);

    console.log(title, id);
    if (!id) throw new Error('No link for the product found');
    const urlTitle = title.split(' ').join('_');
    return `/${productType}/${urlTitle}/${id}`;
  } catch (error) {
    if (error instanceof Error) {
      console.error(error);
    }
    return -1;
  }
};
