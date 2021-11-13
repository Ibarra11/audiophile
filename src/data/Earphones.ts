import uniqid from 'uniqid';

import YX1_Main from '../assets/product-yx1-earphones/mobile/image-product.jpg';

import YX1_Gallery_Mobile_1 from '../assets/product-yx1-earphones/mobile/image-gallery-1.jpg';
import YX1_Gallery_Mobile_2 from '../assets/product-yx1-earphones/mobile/image-gallery-2.jpg';
import YX1_Gallery_Mobile_3 from '../assets/product-yx1-earphones/mobile/image-gallery-3.jpg';

export const Earphones = [
  {
    id: uniqid(),
    mainImg: YX1_Main,
    title: 'YX1 Wireless',
    description:
      'Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.',
    price: 599,
    newProduct: true,
    features: [
      'Experience unrivalled stereo sound thanks to innovative acoustic technology. With improved ergonomics designed for full day wearing, these revolutionary earphones have been finely crafted to provide you with the perfect fit, delivering complete comfort all day long while enjoying exceptional noise isolation and truly immersive sound.',
      'The YX1 Wireless Earphones features customizable controls for volume, music, calls, and voice assistants built into both earbuds. The new 7-hour battery life can be extended up to 28 hours with the charging case, giving you uninterrupted play time. Exquisite craftsmanship with a splash resistant design now available in an all new white and grey color scheme as well as the popular classic black.',
    ],
    contents: [
      { content: 'Earphone Unit', amount: 2 },
      { content: 'Multi-size Earplugs', amount: 2 },
      { content: 'User Manual', amount: 1 },
      { content: 'USB-C Charging Cable', amount: 1 },
      { content: 'Travel Pouch', amount: 1 },
    ],
    gallery: {
      img_1_mb: YX1_Gallery_Mobile_1,
      img_2_mb: YX1_Gallery_Mobile_2,
      img_3_mb: YX1_Gallery_Mobile_3,
    },
  },
];
