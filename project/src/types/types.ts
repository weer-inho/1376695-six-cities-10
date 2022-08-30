export type ownerType = {
  avatarUrl: string,
  name: string,
  isPro: boolean,
}

export type offerType = {
  id: number,
  images: string[],
  title: string,
  description: string;
  type: string,
  isPremium: boolean,
  rating: number,
  city: cityType,
  bedrooms: number,
  maxAdults: number,
  previewImage: string,
  price: number,
  goods: string[],
  isFavorite: boolean,
  host: ownerType,
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

export type commentType = {
  comment: string
  date: string
  id: number
  rating: number
  user: {
    avatarUrl: string
    id: number
    isPro: boolean
    name: string
  }
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

export type CommentData = {
  offerNumber: string | undefined;
  comment: string;
  rating: number | undefined;
}

export type UserData = {
  id: number;
  email: string;
  token: string;
};

export type Points = Point[];
