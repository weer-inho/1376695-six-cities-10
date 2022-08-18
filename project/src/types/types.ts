export type ownerType = {
  avatar: string,
  name: string,
  isPro: boolean,
}

export type offerType = {
  id: string,
  images: string[],
  title: string,
  description: string;
  type: string,
  isPremium: boolean,
  stars: number,
  city: cityType,
  bedrooms: number,
  guestsMax: number,
  price: number,
  householdItems: string[],
  isFavorite: boolean,
  ownerInfo: ownerType,
  reviews: reviewType[],
  location: LocationType,
}

export type reviewType = {
  avatar: string,
  name: string,
  score: number,
  date: string,
  reviewText: string,
}

export type cityType = {
  name: string,
  location: LocationType,
  cityId: number,
}

export type Cities = offerType[];

export type LocationType = {
  latitude: number,
  longitude: number,
  zoom: number,
}

export type City = {
  title: string;
  lat: number;
  lng: number;
  zoom: number;
};

export type mainCity = {
  name: string,
  cityId: number,
  location: {
    lat: number,
    lng: number,
    zoom: number
  }
};

export type Point = {
  title: string;
  lat: number;
  lng: number;
};

export type AuthData = {
  login: string;
  password: string;
};

export type UserData = {
  id: number;
  email: string;
  token: string;
};

export type Points = Point[];
