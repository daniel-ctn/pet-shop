import mongoose from 'mongoose'

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.DATABASE_CONNECTION, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    })

  } catch (e) {
    console.log(e.message.red.underline.bold)
    process.exit(1)
  }
}

export default connectDB
