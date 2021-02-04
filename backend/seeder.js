import dotenv from 'dotenv'
import colors from 'colors'

import connectDB from './config/db.js'
import Puppy from './models/puppyModel.js'
import User from './models/userModel.js'
import users from './data/users.js'
import puppies from './data/puppies.js'

dotenv.config()

connectDB().then(() => console.log('connect database successful!!!!!'))

const importData = async () => {
  try {
    // delete all existing data
    await Puppy.deleteMany()
    await User.deleteMany()

    // add users from dump data file
    const createdUsers = await User.insertMany(users)

    // set user props is admin user
    const adminUser = createdUsers[0]._id
    const samplePuppies = puppies.map(p => {
      return { ...p, user: adminUser }
    })
    await Puppy.insertMany(samplePuppies)
    console.log('Data imported'.green.inverse)
    process.exit()
  } catch (e) {
    console.log(e.message.red.inverse)
    process.exit(1)
  }
}

const destroyData = async () => {
  try {
    // delete all existing data
    await Puppy.deleteMany()
    await User.deleteMany()

    process.exit()
  } catch (e) {
    console.log(e.message.red.inverse)
    process.exit(1)
  }
}

// call function via npm script
if(process.argv[2] === '-d') destroyData()
else importData()
