import {cityType, offerType} from '../types/types';

export const cities:cityType[] = [
  {
    name: 'Paris',
    cityId: 0,
    location: {
      latitude: 48.8534,
      longitude: 2.3488,
      zoom: 10,
    }
  },
  {
    name: 'Cologne',
    cityId: 1,
    location: {
      latitude: 50.9333,
      longitude: 6.95,
      zoom: 10,
    }
  },
  {
    name: 'Brussels',
    cityId: 2,
    location: {
      latitude: 50.8504,
      longitude: 4.34878,
      zoom: 10
    }
  },
  {
    name: 'Amsterdam',
    cityId: 3,
    location: {
      latitude: 52.374,
      longitude: 4.88969,
      zoom: 10
    }
  },
  {
    name: 'Hamburg',
    cityId: 4,
    location: {
      latitude: 53.5753,
      longitude: 10.0153,
      zoom: 10
    }
  },
  {
    name: 'Dusseldorf',
    cityId: 0,
    location: {
      latitude: 51.2217,
      longitude: 6.77616,
      zoom: 10
    }
  },
];

export const sortPlacesToStay = (sortType:string, arrayForSort:offerType[]) => {
  switch (sortType) {
    case 'Price: low to high':
      return arrayForSort.sort(sortPricesLowToHigh);
      break;
    case 'Price: high to low':
      return arrayForSort.sort(sortPricesHighToLow);
      break;
    case 'Top rated first':
      return arrayForSort.sort(sortRate);
      break;
    case 'Popular':
      return arrayForSort;
      break;
    default:
  }
};

const sortPricesLowToHigh = (priceA:offerType, priceB:offerType) => {
  if (priceA.price > priceB.price) {
    return 1;
  }
  if (priceA.price < priceB.price) {
    return -1;
  }
  return 0;
};

const sortPricesHighToLow = (priceA:offerType, priceB:offerType) => {
  if (priceA.price < priceB.price) {
    return 1;
  }
  if (priceA.price > priceB.price) {
    return -1;
  }
  return 0;
};

const sortRate = (rateA:offerType, rateB:offerType) => {
  if (rateA.rating < rateB.rating) {
    return 1;
  }
  if (rateA.rating > rateB.rating) {
    return -1;
  }
  return 0;
};
