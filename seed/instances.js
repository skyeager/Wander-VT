const db = require('../db')
const { Instance } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const instances = [
    {
      // id: 1,
      title: 'test',
      message: 'test',
      authorName: 'test',
      image: 'kjdfng'
    }
  ]

  await Instance.insertMany(instances)
}
const run = async () => {
  await main()
  db.close()
}

run()
