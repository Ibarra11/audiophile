type EarphoneTitles = 'YX1 WIRELESS';

// eslint-disable-next-line prettier/prettier
type HeadphoneTitles = 'XX99 MARK II' | 'XX99 MARK I' | 'XX59';

type SpeakerTitles = 'ZX9' | 'ZX7';

export type ProductTitles =
  | EarphoneTitles
  | HeadphoneTitles
  | SpeakerTitles;

export type ProductTypes = 'headphones' | 'speakers' | 'earphones';

export type Product = {
  id: string;
  title: string;
  mainImg: { mobile: string; tablet: string; desktop: string };
  price: number;
  amount: number;
};

export enum ActionTypes {
  ADD_PRODUCT = 'ADD_PRODUCT',
  REMOVE_PRODUCT = 'REMOVE_PRODUCT',
  REMOVE_ALL_PRODUCTS = 'REMOVE_ALL_PRODUCTS',
}

export type Actions =
  | {
      type: ActionTypes.ADD_PRODUCT;
      payload: {
        product: Product;
      };
    }
  | {
      type: ActionTypes.REMOVE_PRODUCT;
      payload: {
        id: string;
      };
    }
  | { type: ActionTypes.REMOVE_ALL_PRODUCTS };
// type CartItem = {
//   [productId: string]: Product;
// };

export type Cart = {
  products: Product[];
  size: number;
  total: number;
};

export type Dispatch = (action: Actions) => void;
