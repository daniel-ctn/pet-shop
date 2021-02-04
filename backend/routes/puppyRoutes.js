import express from 'express'
import asyncHandler from 'express-async-handler'

import Puppy from '../models/puppyModel.js'

const router = express.Router()

router.get('/', asyncHandler(async (req, res) => {
  const puppies = await Puppy.find({})
  res.json(puppies)
}))

router.get('/:id', asyncHandler(async (req, res) => {
  const puppy = await Puppy.findById(req.params.id)

  if(puppy) res.json(puppy)
  else res.status(404).json({message: 'Not found'})
}))

export default router
