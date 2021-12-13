import ZX9_Main from '../assets/product-zx9-speaker/mobile/image-product.jpg';
import ZX7_Main from '../assets/product-zx7-speaker/mobile/image-product.jpg';

import ZX9_Gallery_Mobile_1 from '../assets/product-zx9-speaker/mobile/image-gallery-1.jpg';
import ZX9_Gallery_Mobile_2 from '../assets/product-zx9-speaker/mobile/image-gallery-2.jpg';
import ZX9_Gallery_Mobile_3 from '../assets/product-zx9-speaker/mobile/image-gallery-3.jpg';

import ZX7_Gallery_Mobile_1 from '../assets/product-zx7-speaker/mobile/image-gallery-1.jpg';
import ZX7_Gallery_Mobile_2 from '../assets/product-zx7-speaker/mobile/image-gallery-2.jpg';
import ZX7_Gallery_Mobile_3 from '../assets/product-zx7-speaker/mobile/image-gallery-3.jpg';

import ZX7_Recommendation_Mobile from '../assets/shared/mobile/image-zx7-speaker.jpg';
import ZX9_Recommendation_Mobile from '../assets/shared/mobile/image-zx9-speaker.jpg';

import MarkI_Recommendation_Mobile from '../assets/shared/mobile/image-xx99-mark-one-headphones.jpg';
import XX59_Recommendation_Mobile from '../assets/shared/mobile/image-xx59-headphones.jpg';

export const Speakers = [
  {
    id: '8bfb25bc-5b98-11ec-bf63-0242ac130002',
    mainImg: ZX9_Main,
    title: 'ZX9',
    description:
      'Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.',
    price: 4500,
    newProduct: true,
    features: [
      'Connect via Bluetooth or nearly any wired source. This speaker features optical, digital coaxial, USB Type-B, stereo RCA, and stereo XLR inputs, allowing you to have up to five wired source devices connected for easy switching. Improved bluetooth technology offers near lossless audio quality at up to 328ft (100m).',
      'Discover clear, more natural sounding highs than the competition with ZX9’s signature planar diaphragm tweeter. Equally important is its powerful room-shaking bass courtesy of a 6.5” aluminum alloy bass unit. You’ll be able to enjoy equal sound quality whether in a large room or small den. Furthermore, you will experience new sensations from old songs since it can respond to even the subtle waveforms.',
    ],
    contents: [
      { content: 'Speaker Unit', amount: 2 },
      { content: 'Speaker Cloth Panel', amount: 2 },
      { content: 'User Manual', amount: 1 },
      { content: '3.5mm 5m Audio Cable', amount: 1 },
      { content: '7.5m Optical Cable', amount: 1 },
    ],
    gallery: {
      img_1_mb: ZX9_Gallery_Mobile_1,
      img_2_mb: ZX9_Gallery_Mobile_2,
      img_3_mb: ZX9_Gallery_Mobile_3,
    },
    recommendationImages: {
      mobile: ZX9_Recommendation_Mobile,
    },
    recommendedProducts: [
      {
        id: '8bfb2698-5b98-11ec-bf63-0242ac130002',
        title: 'ZX7 Speaker',
        img: ZX7_Recommendation_Mobile,
        productType: 'speakers',
      },
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
    ],
  },
  {
    id: '8bfb2698-5b98-11ec-bf63-0242ac130002',
    mainImg: ZX7_Main,
    title: 'ZX7' as const,
    description:
      'Stream high quality sound wirelessly with minimal to no loss. The ZX7 speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.',
    price: 3500,
    newProduct: false,
    features: [
      'Reap the advantages of a flat diaphragm tweeter cone. This provides a fast response rate and excellent high frequencies that lower tiered bookshelf speakers cannot provide. The woofers are made from aluminum that produces a unique and clear sound. XLR inputs allow you to connect to a mixer for more advanced usage. ',
      'The ZX7 speaker is the perfect blend of stylish design and high performance. It houses an encased MDF wooden enclosure which minimises acoustic resonance. Dual connectivity allows pairing through bluetooth or traditional optical and RCA input. Switch input sources and control volume at your finger tips with the included wireless remote. This versatile speaker is equipped to deliver an authentic listening experience.',
    ],
    contents: [
      { content: 'Speaker Unit', amount: 2 },
      { content: 'Speaker Cloth Panel', amount: 2 },
      { content: 'User Manual', amount: 1 },
      { content: '3.5mm 5m Audio Cable', amount: 1 },
      { content: '7.5m Optical Cable', amount: 1 },
    ],
    gallery: {
      img_1_mb: ZX7_Gallery_Mobile_1,
      img_2_mb: ZX7_Gallery_Mobile_2,
      img_3_mb: ZX7_Gallery_Mobile_3,
    },
    recommendationImages: {
      mobile: ZX7_Recommendation_Mobile,
    },
    recommendedProducts: [
      {
        id: '8bfb25bc-5b98-11ec-bf63-0242ac130002',
        title: 'ZX9 Speaker',
        img: ZX9_Recommendation_Mobile,
        productType: 'speakers',
      },
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
    ],
  },
];
