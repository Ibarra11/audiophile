import { WidthTypes, OpacityTypes } from './types';
export function calculateWidth(size: WidthTypes) {
  if (size == null) {
    return;
  } else if (typeof size === 'number') {
    return `${size}px`;
  } else {
    switch (size) {
      case '1/4': {
        return '25%';
      }
      case '1/2': {
        return '50%';
      }
      case '3/4': {
        return '75%';
      }
      case 'full': {
        return '100%';
      }
    }
  }
}

export function calculateOpacity(opacity: OpacityTypes) {
  switch (opacity) {
    case '1/4': {
      return '.25';
    }
    case '1/3': {
      return '.33';
    }
    case '1/2': {
      return '.5';
    }
    case '2/3': {
      return '.66';
    }
    case '3/4': {
      return '.75';
    }
    default: {
      return opacity;
    }
  }
}
