import {offerType} from '../types/types';

export const offers: offerType[] = [
  {
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
  },
  {
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
  },
  {
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
  },
  {
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
  },
]

export type reviewType = {
  avatar: string,
  name: string,
  score: number,
  date: string,
  reviewText: string,
}
