import asyncHandler from 'express-async-handler'
import Puppy from '../models/puppyModel.js'

export const getPuppyList = asyncHandler(async (req, res) => {
  const puppies = await Puppy.find({})
  res.json(puppies)
})

export const getPuppyById = asyncHandler(async (req, res) => {
  const puppy = await Puppy.findById(req.params.id)

  if(puppy) res.json(puppy)
  else res.status(404).json({message: 'Not found'})
})
