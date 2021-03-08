import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'

import connectDB from './config/db.js'
import puppyRoutes from './routes/puppyRoutes.js'
import userRoutes from './routes/userRoutes.js'
import orderRoutes from './routes/orderRoutes.js'

dotenv.config()

connectDB().then(() => console.log(`Connect MongoDB success...`.cyan.underline))

const app = express()
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Welcome to Puppy Store!')
})

app.use('/api/puppy', puppyRoutes)
app.use('/api/user', userRoutes)
app.use('/api/order', orderRoutes)

app.listen(process.env.PORT || 5000,
  () => console.log(`Server is running in ${process.env.NODE_ENV} mode on port ${process.env.PORT}!`.yellow.bold))
