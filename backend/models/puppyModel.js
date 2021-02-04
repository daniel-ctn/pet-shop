import mongoose from 'mongoose'

const reviewSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  comment: {
    type: String,
    required: true,
  }
}, {timestamps: true})


const puppySchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  },
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  origin: {
    type: String,
    required: true
  },
  temperament: {
    type: String
  },
  description: {
    type: String
  },
  reviews: [reviewSchema],
  rating: {
    type: Number,
    required: true
  },
  numReviews: {
    type: Number,
    required: true,
    default: 0
  },
  price: {
    type: Number,
    required: true,
    default: 0
  },
  countInStock: {
    type: Number,
    required: true,
    default: 0
  },
}, {
  timestamps: true
})

const Puppy = mongoose.model('Puppy', puppySchema)

export default Puppy
