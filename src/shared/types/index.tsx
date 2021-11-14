type EarphoneTitles = 'YX1 WIRELESS';

// eslint-disable-next-line prettier/prettier
type HeadphoneTitles = 'XX99 MARK II' | 'XX99 MARK I' | 'XX59';

type SpeakerTitles = 'ZX9' | 'ZX7';

export type ProductTitles =
  | EarphoneTitles
  | HeadphoneTitles
  | SpeakerTitles;

export type ProductTypes = 'headphones' | 'speakers' | 'earphones';
