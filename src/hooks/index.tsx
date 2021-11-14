import * as React from 'react';
import { ProductTitles, ProductTypes } from '../shared/types';
import { getProductId } from '../utilities';
type Path = {
  [productName: string]: string;
};
export const usePath = (
  productName: ProductTitles,
  productType: ProductTypes,
) => {
  const [path, setPath] = React.useState<Path>({});
  if (path[productName]) {
    return path[productName];
  } else {
    const id = getProductId(productName, productType);
    if (id === -1) {
      throw new Error('No path found for the product');
    } else {
      setPath({
        ...path,
        [productName]: `${productType}/${productName
          .toLowerCase()
          .split(' ')
          .join('_')}/${id}}`,
      });
    }
  }
};
