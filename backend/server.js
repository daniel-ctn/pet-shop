import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'

import puppies from './data/puppies.js'
import connectDB from './config/db.js'

dotenv.config()

connectDB().then(() => console.log('connect db success'.cyan.underline))

const app = express()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/api/puppies', (req, res) => {
  res.json(puppies)
})

app.get('/api/puppy/:id', (req, res) => {
  const puppy = puppies.find(p => p._id === req.params.id)
  res.json(puppy)
})

app.listen(process.env.PORT || 5000, () => console.log('server running!'.yellow.bold))
