export interface PuppyModel {
  _id: string;
  name: string;
  image: string;
  description: string;
  origin: string;
  temperament: string;
  price: number;
  countInStock: number;
  rating: number;
  numReviews: number;
}

const puppies: PuppyModel[] = [
  {
    _id: '1',
    name: 'Chow Chow',
    image: '/images/chowchow.jpg',
    description:
      'The Chow Chow is a dog breed originally from northern China. The Chow Chow is a sturdily built dog, square in profile, with a broad skull and small, triangular, erect ears with rounded tips. The breed is known for a very dense double coat that is either smooth or rough.',
    origin: 'China',
    temperament: 'Aloof, Independent, Loyal, Quiet',
    price: 89.99,
    countInStock: 10,
    rating: 4.5,
    numReviews: 12,
  },
  {
    _id: '2',
    name: 'Pembroke Welsh Corgi',
    image: '/images/corgi.jpg',
    description:
      'The Pembroke Welsh Corgi is a cattle herding dog breed that originated in Pembrokeshire, Wales. It is one of two breeds known as a Welsh Corgi. The other is the Cardigan Welsh Corgi, and both descend from the line of northern spitz-type dogs.',
    origin: 'Pembrokeshire',
    temperament: 'Tenacious, Friendly, Bold, Outgoing, Playful, Protective',
    price: 599.99,
    countInStock: 7,
    rating: 4.0,
    numReviews: 8,
  },
  {
    _id: '3',
    name: 'Golden Retriever',
    image: '/images/golden.jpg',
    description:
      'The Golden Retriever is a medium-large gun dog that was bred to retrieve shot waterfowl, such as ducks and upland game birds, during hunting and shooting parties. The name "retriever" refers to the breed\'s ability to retrieve shot game undamaged due to their soft mouth.',
    origin: 'United Kingdom',
    temperament: 'Friendly, Intelligent, Reliable, Kind, Trustworthy, Confident',
    price: 929.99,
    countInStock: 5,
    rating: 3,
    numReviews: 12,
  },
  {
    _id: '4',
    name: 'Chihuahua',
    image: '/images/chihuahua.jpg',
    description:
      'The Chihuahua is one of the smallest breeds of dog, and is named after the Mexican state of Chihuahua.',
    origin: 'Mexico',
    temperament: 'Devoted, Lively, Alert, Courageous, Quick',
    price: 399.99,
    countInStock: 11,
    rating: 5,
    numReviews: 12,
  },
  {
    _id: '5',
    name: 'Pomeranian',
    image: '/images/pomeranian.jpg',
    description:
      'The Pomeranian is a breed of dog of the Spitz type that is named for the Pomerania region in north-west Poland and north-east Germany in Central Europe. Classed as a toy dog breed because of its small size, the Pomeranian is descended from larger Spitz-type dogs, specifically the German Spitz.',
    origin: 'Germany, Poland',
    temperament: 'Friendly, Intelligent, Sociable, Extroverted, Playful, Active',
    price: 49.99,
    countInStock: 7,
    rating: 3.5,
    numReviews: 10,
  },
  {
    _id: '6',
    name: 'Shetland Sheepdog',
    image: '/images/shetland.jpg',
    description:
      'The Shetland Sheepdog, often known as the Sheltie, is a breed of herding dog that originated in the Shetland Islands of Scotland. The original name was Shetland Collie, but this caused controversy among the Rough Collie breeders of the time, so the breed\'s name was formally changed.',
    origin: 'Scotland',
    temperament: 'Affectionate, Reserved, Intelligent, Lively, Responsive, Alert, Playful, Loyal, Gentle, Active, Trainable, Strong',
    price: 29.99,
    countInStock: 0,
    rating: 4,
    numReviews: 12,
  },
]

export default puppies
