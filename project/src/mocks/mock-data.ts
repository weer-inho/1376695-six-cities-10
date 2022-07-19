import {offerType, reviewType} from '../types/types';

function generateId():string {
  return `id${Math.random().toString(16).slice(2)}`;
}

export const reviews:reviewType[] = [
  {
    avatar: 'https://picsum.photos/54/54',
    name: 'Alesha',
    score: 5,
    date: 'August 2007',
    reviewText: 'An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.',
  },
  {
    avatar: 'https://picsum.photos/54/54',
    name: 'Diana',
    score: 2,
    date: 'March 2016',
    reviewText: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
  },
  {
    avatar: 'https://picsum.photos/54/54',
    name: 'Igor',
    score: 1,
    date: 'September 204',
    reviewText: 'Повседневная практика показывает, что начало повседневной работы по формированию позиции создаёт предпосылки качественно новых шагов для дальнейших направлений развитая системы массового участия. Дорогие друзья, постоянное информационно-техническое обеспечение нашей деятельности напрямую зависит от позиций, занимаемых участниками в отношении поставленных задач. ',
  },
  {
    avatar: 'https://picsum.photos/54/54',
    name: 'Vladislav',
    score: 4,
    date: 'December 2022',
    reviewText: 'Не следует, однако, забывать о том, что постоянное информационно-техническое обеспечение нашей деятельности представляет собой интересный эксперимент проверки дальнейших направлений развитая системы массового участия!',
  },
  {
    avatar: 'https://picsum.photos/54/54',
    name: 'Arsen',
    score: 5,
    date: 'May 2019',
    reviewText: 'С другой стороны консультация с профессионалами из IT обеспечивает широкому кругу специалистов участие в формировании ключевых компонентов планируемого обновления. ',
  },
];


export const offers: offerType[] = [
  {
    id: generateId(),
    photos: ['https://picsum.photos/260/200','https://picsum.photos/260/200','https://picsum.photos/260/200','https://picsum.photos/260/200'],
    title: 'Aliquam sed nisi volutpat, tempus lacus in, ultricies mi',
    description: 'Etiam semper eu dolor in bibendum. Aliquam non hendrerit nisl. Mauris tincidunt tellus non ante fermentum tempus. Sed ultrices lorem nisl, vel commodo ante volutpat nec. Ut mollis nisl eu arcu hendrerit pulvinar. Donec eget leo elementum nisl malesuada viverra. Mauris eu semper velit. Ut mattis nisl vel dui ultrices sagittis. Nam porttitor iaculis dui at ultrices. Mauris a laoreet dolor. Fusce turpis risus, sodales vulputate lorem at, vehicula placerat purus. Ut nec laoreet nisl.',
    type: 'apartment',
    isPremium: true,
    stars: 3,
    bedrooms: 2,
    guestsMax: 7,
    price: 4534,
    householdItems: ['Wifi', 'Heating', 'Kitchen', 'Cable TV'],
    isFavorite: true,
    ownerInfo: {
      avatar: 'https://picsum.photos/74/74',
      name: 'Suzan',
      isPro: true,
    },
    reviews: reviews[0],
  },
  {
    id: generateId(),
    photos: ['https://picsum.photos/260/200','https://picsum.photos/260/200','https://picsum.photos/260/200','https://picsum.photos/260/200'],
    title: 'Donec pulvinar felis sed ante maximus fringilla',
    description: 'Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque id finibus tellus',
    type: 'flat',
    isPremium: false,
    stars: 5,
    bedrooms: 1,
    guestsMax: 4,
    price: 3576,
    householdItems: ['Wifi', 'Kitchen', 'Cable TV'],
    isFavorite: false,
    ownerInfo: {
      avatar: 'https://picsum.photos/74/74',
      name: 'Max',
      isPro: false,
    },
    reviews: reviews[1],
  },
  {
    id: generateId(),
    photos: ['https://picsum.photos/260/200','https://picsum.photos/260/200','https://picsum.photos/260/200','https://picsum.photos/260/200'],
    title: 'Morbi congue porta ex, id convallis est mattis nec.',
    description: 'Sed vitae nunc vitae massa varius aliquam sit amet id ante. Maecenas at accumsan quam. Proin quis enim vulputate, suscipit dui non, luctus justo.',
    type: 'villa',
    isPremium: true,
    stars: 4,
    bedrooms: 5,
    guestsMax: 14,
    price: 15757,
    householdItems: ['Wifi', 'Kitchen', 'Cable TV', 'Pool', 'Backyard'],
    isFavorite: true,
    ownerInfo: {
      avatar: 'https://picsum.photos/74/74',
      name: 'Sergei',
      isPro: true,
    },
    reviews: reviews[2],
  },
  {
    id: generateId(),
    photos: ['https://picsum.photos/260/200','https://picsum.photos/260/200','https://picsum.photos/260/200','https://picsum.photos/260/200'],
    title: 'Donec viverra orci dui, eu placerat arcu malesuada ac.',
    description: 'Ut mollis nisl eu arcu hendrerit pulvinar. Donec eget leo elementum nisl malesuada viverra. Mauris eu semper velit. Ut mattis nisl vel dui ultrices sagittis. ',
    type: 'atelier',
    isPremium: false,
    stars: 5,
    bedrooms: 1,
    guestsMax: 2,
    price: 3435,
    householdItems: ['Wifi', 'Kitchen', 'Cable TV', 'Balcony'],
    isFavorite: true,
    ownerInfo: {
      avatar: 'https://picsum.photos/74/74',
      name: 'Nika',
      isPro: false,
    },
    reviews: reviews[3],
  },
];