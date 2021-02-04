import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'

import connectDB from './config/db.js'
import puppyRoutes from './routes/puppyRoutes.js'

dotenv.config()

connectDB().then(() => console.log('connect db success'.cyan.underline))

const app = express()

app.get('/', (req, res) => {
  res.send('Welcome to Puppy Store!')
})

app.use('/api/puppy', puppyRoutes)

app.listen(process.env.PORT || 5000, () => console.log('server running!'.yellow.bold))
