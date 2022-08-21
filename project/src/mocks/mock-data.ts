import {cityType, offerType, reviewType, Points, City} from '../types/types';

export function generateId():number {
  return Math.floor(Math.random() * 100);
}

export const reviews:reviewType[] = [
  {
    avatar: 'https://picsum.photos/id/31/54/54',
    name: 'Alesha',
    score: 5,
    date: 'August 2007',
    reviewText: 'An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.',
  },
  {
    avatar: 'https://picsum.photos/id/65/54/54',
    name: 'Diana',
    score: 2,
    date: 'March 2016',
    reviewText: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
  },
  {
    avatar: 'https://picsum.photos/id/89/54/54',
    name: 'Igor',
    score: 1,
    date: 'September 204',
    reviewText: 'Повседневная практика показывает, что начало повседневной работы по формированию позиции создаёт предпосылки качественно новых шагов для дальнейших направлений развитая системы массового участия. Дорогие друзья, постоянное информационно-техническое обеспечение нашей деятельности напрямую зависит от позиций, занимаемых участниками в отношении поставленных задач. ',
  },
  {
    avatar: 'https://picsum.photos/id/98/54/54',
    name: 'Vladislav',
    score: 4,
    date: 'December 2022',
    reviewText: 'Не следует, однако, забывать о том, что постоянное информационно-техническое обеспечение нашей деятельности представляет собой интересный эксперимент проверки дальнейших направлений развитая системы массового участия!',
  },
  {
    avatar: 'https://picsum.photos/id//54/54',
    name: 'Arsen',
    score: 5,
    date: 'May 2019',
    reviewText: 'С другой стороны консультация с профессионалами из IT обеспечивает широкому кругу специалистов участие в формировании ключевых компонентов планируемого обновления. ',
  },
  {
    avatar: 'https://picsum.photos/id/31/54/54',
    name: 'Max',
    score: 1,
    date: 'Januar 2017',
    reviewText: 'Соображения высшего порядка, а также начало повседневной работы по формированию позиции способствует подготовке и реализации системы масштабного изменения ряда параметров. Дорогие друзья, курс на социально-ориентированный национальный проект',
  },
  {
    avatar: 'https://picsum.photos/id/65/54/54',
    name: 'Fish',
    score: 5,
    date: 'Febraury 2022',
    reviewText: 'Дорогие друзья, новая модель организационной деятельности создаёт предпосылки качественно новых шагов для экономической целесообразности принимаемых решений? Задача организации, в особенности же курс на социально-ориентированный',
  },
];

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

export const offers: offerType[] = [
  {
    id: generateId(),
    images: ['https://picsum.photos/id//1/260/200','https://picsum.photos/id//2/260/200','https://picsum.photos/id//3/260/200','https://picsum.photos/id//4/260/200'],
    title: 'Aliquam sed nisi volutpat, tempus lacus in, ultricies mi',
    description: 'Etiam semper eu dolor in bibendum. Aliquam non hendrerit nisl. Mauris tincidunt tellus non ante fermentum tempus. Sed ultrices lorem nisl, vel commodo ante volutpat nec. Ut mollis nisl eu arcu hendrerit pulvinar. Donec eget leo elementum nisl malesuada viverra. Mauris eu semper velit. Ut mattis nisl vel dui ultrices sagittis. Nam porttitor iaculis dui at ultrices. Mauris a laoreet dolor. Fusce turpis risus, sodales vulputate lorem at, vehicula placerat purus. Ut nec laoreet nisl.',
    type: 'apartment',
    isPremium: true,
    stars: 3,
    city: cities[0],
    bedrooms: 2,
    guestsMax: 7,
    price: 4534,
    goods: ['Wifi', 'Heating', 'Kitchen', 'Cable TV'],
    isFavorite: true,
    host: {
      avatarUrl: 'https://picsum.photos/id//1/74/74',
      name: 'Suzan',
      isPro: true,
    },
    reviews: [reviews[0], reviews[1]],
    location: {
      latitude: 48.85341,
      longitude: 2.34881,
      zoom: 10
    }
  },
  {
    id: generateId(),
    images: ['https://picsum.photos/id//5/260/200','https://picsum.photos/id//6/260/200','https://picsum.photos/id//7/260/200','https://picsum.photos/id//8/260/200'],
    title: 'Donec pulvinar felis sed ante maximus fringilla',
    description: 'Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque id finibus tellus',
    type: 'flat',
    isPremium: false,
    stars: 5,
    city: cities[1],
    bedrooms: 1,
    guestsMax: 4,
    price: 3576,
    goods: ['Wifi', 'Kitchen', 'Cable TV'],
    isFavorite: false,
    host: {
      avatarUrl: 'https://picsum.photos/id//2/74/74',
      name: 'Max',
      isPro: false,
    },
    reviews: [reviews[1], reviews[2]],
    location: {
      latitude: 50.93331,
      longitude: 6.951,
      zoom: 10,
    }
  },
  {
    id: generateId(),
    images: ['https://picsum.photos/id//9/260/200','https://picsum.photos/id//10/260/200','https://picsum.photos/id//11/260/200','https://picsum.photos/id//12/260/200'],
    title: 'Morbi congue porta ex, id convallis est mattis nec.',
    description: 'Sed vitae nunc vitae massa varius aliquam sit amet id ante. Maecenas at accumsan quam. Proin quis enim vulputate, suscipit dui non, luctus justo.',
    type: 'villa',
    isPremium: true,
    stars: 4,
    city: cities[1],
    bedrooms: 5,
    guestsMax: 14,
    price: 15757,
    goods: ['Wifi', 'Kitchen', 'Cable TV', 'Pool', 'Backyard'],
    isFavorite: true,
    host: {
      avatarUrl: 'https://picsum.photos/id//3/74/74',
      name: 'Sergei',
      isPro: true,
    },
    reviews: [reviews[2], reviews[3]],
    location: {
      latitude: 50.99,
      longitude: 6.952,
      zoom: 10,
    }
  },
  {
    id: generateId(),
    images: ['https://picsum.photos/id//13/260/200','https://picsum.photos/id//14/260/200','https://picsum.photos/id//15/260/200','https://picsum.photos/id//16/260/200'],
    title: 'Donec viverra orci dui, eu placerat arcu malesuada ac.',
    description: 'Ut mollis nisl eu arcu hendrerit pulvinar. Donec eget leo elementum nisl malesuada viverra. Mauris eu semper velit. Ut mattis nisl vel dui ultrices sagittis. ',
    type: 'atelier',
    isPremium: false,
    stars: 5,
    city: cities[3],
    bedrooms: 1,
    guestsMax: 2,
    price: 3435,
    goods: ['Wifi', 'Kitchen', 'Cable TV', 'Balcony'],
    isFavorite: true,
    host: {
      avatarUrl: 'https://picsum.photos/id//4/74/74',
      name: 'Nika',
      isPro: false,
    },
    reviews: [reviews[3], reviews[4]],
    location: {
      latitude: 52.3741,
      longitude: 4.889691,
      zoom: 10
    }
  },
];

export const POINTS: Points = [
  {
    title: 'Aliquam sed nisi volutpat, tempus lacus in, ultricies mi',
    lat: 40.816881,
    lng: -73.872768,
  },
  {
    title: 'Donec pulvinar felis sed ante maximus fringilla',
    lat: 40.814909,
    lng: -73.830682
  },
  {
    title: 'Morbi congue porta ex, id convallis est mattis nec.',
    lat: 40.862413,
    lng: -73.879357
  },
  {
    title: 'Donec viverra orci dui, eu placerat arcu malesuada ac.',
    lat: 40.870817,
    lng: -73.927112
  },
  {
    title: 'Пелхэм-Бей-Парк',
    lat: 40.877312,
    lng: -73.807182
  }
];

export const mainCity:City = {
  title: 'Нью-Йорк',
  lat: 40.835292,
  lng: -73.916236,
  zoom: 10
};

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
  if (rateA.stars < rateB.stars) {
    return 1;
  }
  if (rateA.stars > rateB.stars) {
    return -1;
  }
  return 0;
};
