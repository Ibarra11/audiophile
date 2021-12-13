import Mark_II_Main from '../assets/product-xx99-mark-two-headphones/mobile/image-product.jpg';
import Mark_I_Main from '../assets/product-xx99-mark-one-headphones/mobile/image-product.jpg';
import XX59_Main from '../assets/product-xx59-headphones/mobile/image-product.jpg';

import MarkII_Recommendation_Mobile from '../assets/shared/mobile/image-xx99-mark-two-headphones.jpg';
import MarkI_Recommendation_Mobile from '../assets/shared/mobile/image-xx99-mark-one-headphones.jpg';
import XX59_Recommendation_Mobile from '../assets/shared/mobile/image-xx59-headphones.jpg';

import MarkII_Gallery_Mobile_1 from '../assets/product-xx99-mark-two-headphones/mobile/image-gallery-1.jpg';
import MarkII_Gallery_Mobile_2 from '../assets/product-xx99-mark-two-headphones/mobile/image-gallery-2.jpg';
import MarkII_Gallery_Mobile_3 from '../assets/product-xx99-mark-two-headphones/mobile/image-gallery-3.jpg';

import MarkI_Gallery_Mobile_1 from '../assets/product-xx99-mark-one-headphones/mobile/image-gallery-1.jpg';
import MarkI_Gallery_Mobile_2 from '../assets/product-xx99-mark-one-headphones/mobile/image-gallery-2.jpg';
import MarkI_Gallery_Mobile_3 from '../assets/product-xx99-mark-one-headphones/mobile/image-gallery-3.jpg';

import XX59_Gallery_Mobile_1 from '../assets/product-xx59-headphones/mobile/image-gallery-1.jpg';
import XX59_Gallery_Mobile_2 from '../assets/product-xx59-headphones/mobile/image-gallery-2.jpg';
import XX59_Gallery_Mobile_3 from '../assets/product-xx59-headphones/mobile/image-gallery-3.jpg';

import ZX9_Recommendation_Mobile from '../assets/shared/mobile/image-zx9-speaker.jpg';

export const Headphones = [
  {
    id: '8bfb1928-5b98-11ec-bf63-0242ac130002',
    mainImg: Mark_II_Main,
    title: 'XX99 MARK II',
    description:
      'The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.',
    price: 2999,
    newProduct: true,
    features: [
      'Featuring a genuine leather head strap and premium earcups, these headphones deliver superior comfort for those who like to enjoy endless listening. It includes intuitive controls designed for any situation. Whether you’re taking a business call or just in your own personal space, the auto on/off and pause features ensure that you’ll never miss a beat.',
      'The advanced Active Noise Cancellation with built-in equalizer allow you to experience your audio world on your terms. It lets you enjoy your audio in peace, but quickly interact with your surroundings when you need to. Combined with Bluetooth 5. 0 compliant connectivity and 17 hour battery life, the XX99 Mark II headphones gives you superior sound, cutting-edge technology, and a modern design aesthetic.',
    ],
    contents: [
      { content: 'Headphone Unit', amount: 1 },
      { content: 'Replacement Earcups', amount: 2 },
      { content: 'User Manual', amount: 1 },
      { content: '3.5mm 5m Audio Cable', amount: 1 },
      { content: 'Travel Bag', amount: 1 },
    ],
    gallery: {
      img_1_mb: MarkII_Gallery_Mobile_1,
      img_2_mb: MarkII_Gallery_Mobile_2,
      img_3_mb: MarkII_Gallery_Mobile_3,
    },
    recommendationImages: {
      mobile: MarkII_Recommendation_Mobile,
    },
    recommendedProducts: [
      {
        id: '8bfb222e-5b98-11ec-bf63-0242ac130002',
        title: 'XX99 MARK I',
        img: MarkI_Recommendation_Mobile,
        productType: 'headphones',
      },
      {
        id: '8bfb23be-5b98-11ec-bf63-0242ac130002',
        title: 'XX59',
        img: XX59_Recommendation_Mobile,
        productType: 'headphones',
      },
      {
        id: '8bfb25bc-5b98-11ec-bf63-0242ac130002',
        title: 'ZX9 Speaker',
        img: ZX9_Recommendation_Mobile,
        productType: 'speakers',
      },
    ],
  },
  {
    id: '8bfb222e-5b98-11ec-bf63-0242ac130002',
    mainImg: Mark_I_Main,
    title: 'XX99 MARK I',
    description:
      'As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.',
    price: 1750,
    newProduct: false,
    features: [
      'As the headphones all others are measured against, the XX99 Mark I demonstrates over five decades of audio expertise, redefining the critical listening experience. This pair of closed-back headphones are made of industrial, aerospace-grade materials to emphasize durability at a relatively light weight of 11 oz. ',
      'From the handcrafted microfiber ear cushions to the robust metal headband with inner damping element, the components work together to deliver comfort and uncompromising sound. Its closed-back design delivers up to 27 dB of passive noise cancellation, reducing resonance by reflecting sound to a dedicated absorber. For connectivity, a specially tuned cable is included with a balanced gold connector.',
    ],
    contents: [
      { content: 'Headphone Unit', amount: 1 },
      { content: 'Replacement Earcups', amount: 2 },
      { content: 'User Manual', amount: 1 },
      { content: '3.5mm 5m Audio Cable', amount: 1 },
    ],
    gallery: {
      img_1_mb: MarkI_Gallery_Mobile_1,
      img_2_mb: MarkI_Gallery_Mobile_2,
      img_3_mb: MarkI_Gallery_Mobile_3,
    },
    recommendationImages: {
      mobile: MarkI_Recommendation_Mobile,
    },
    recommendedProducts: [
      {
        id: '8bfb1928-5b98-11ec-bf63-0242ac130002',
        title: 'XX99 MARK II',
        img: MarkII_Recommendation_Mobile,
        productType: 'headphones',
      },
      {
        id: '8bfb23be-5b98-11ec-bf63-0242ac130002',
        title: 'XX59',
        img: XX59_Recommendation_Mobile,
        productType: 'headphones',
      },
      {
        id: '8bfb25bc-5b98-11ec-bf63-0242ac130002',
        title: 'ZX9 Speaker',
        img: ZX9_Recommendation_Mobile,
        productType: 'speakers',
      },
    ],
  },
  {
    id: '8bfb23be-5b98-11ec-bf63-0242ac130002',
    mainImg: XX59_Main,
    title: 'XX59',
    description:
      'Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.',
    price: 899,
    newProduct: false,
    features: [
      'These headphones have been created from durable, high-quality materials tough enough to take anywhere. Its compact folding design fuses comfort and minimalist style making it perfect for travel. Flawless transmission is assured by the latest wireless technology engineered for audio synchronization with videos.',
      'More than a simple pair of headphones, this headset features a pair of built-in microphones for clear, hands-free calling when paired with a compatible smartphone. Controlling music and calls is also intuitive thanks to easy-access touch buttons on the earcups. Regardless of how you use the  XX59 headphones, you can do so all day thanks to an impressive 30-hour battery life that can be rapidly recharged via USB-C.',
    ],
    contents: [
      { content: 'Headphone Unit', amount: 1 },
      { content: 'Replacement Earcups', amount: 2 },
      { content: 'User Manual', amount: 1 },
      { content: '3.5mm 5m Audio Cable', amount: 1 },
    ],
    gallery: {
      img_1_mb: XX59_Gallery_Mobile_1,
      img_2_mb: XX59_Gallery_Mobile_2,
      img_3_mb: XX59_Gallery_Mobile_3,
    },
    recommendationImages: {
      mobile: XX59_Recommendation_Mobile,
    },
    recommendedProducts: [
      {
        id: '8bfb1928-5b98-11ec-bf63-0242ac130002',
        title: 'XX99 MARK II',
        img: MarkII_Recommendation_Mobile,
        productType: 'headphones',
      },
      {
        id: '8bfb222e-5b98-11ec-bf63-0242ac130002',
        title: 'XX99 MARK I',
        img: MarkI_Recommendation_Mobile,
        productType: 'headphones',
      },
      {
        id: '8bfb25bc-5b98-11ec-bf63-0242ac130002',
        title: 'ZX9 Speaker',
        img: ZX9_Recommendation_Mobile,
        productType: 'speakers',
      },
    ],
  },
];
