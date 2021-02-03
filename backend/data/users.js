const users = [
  {
    name: 'Admin',
    email: 'admin@admin.com',
    password: bcrypt.hashSync('1234565', 10),
    isAdmin: true,
  },
  {
    name: 'Daniel',
    email: 'daniel@puppy.com',
    password: bcrypt.hashSync('1234565', 10),
  },
  {
    name: 'Jennie',
    email: 'jennie@puppy.com',
    password: bcrypt.hashSync('1234565', 10),
  }
]

export default users
