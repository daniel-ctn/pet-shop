import jwt from 'jsonwebtoken'
import expressAsyncHandler from 'express-async-handler'
import User from '../models/userModel.js'

export const protect = expressAsyncHandler(async (req, res, next) => {
  let token
  const receivedToken = req.headers.authorization

  if (receivedToken && receivedToken.startsWith('Bearer')) {
    try {
      token = receivedToken.split(' ')[1]
      const decoded = jwt.verify(token, process.env.JWT_SECRET)
      req.user = await User.findById(decoded.id).select('-password')

      next()
    } catch (e) {
      res.status(401).json({ message: 'Not authorized, Invalid/ Expired token' })
    }
  }

  if (!token) res.status(401).json({ message: 'Not authorized, no token' })

  next()
})
