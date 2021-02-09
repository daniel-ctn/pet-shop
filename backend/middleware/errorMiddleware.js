export const handleError = (error, req, res, next) => {
  if(res.headersSent) return next(error)

  res.status(error.code || 500)
  res.json({message: error.message || 'An unknown error occurred!'})
}
