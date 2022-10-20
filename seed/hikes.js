const db = require('../db')
const { Hike } = require('../models')


db.on('error', console.error.bind(console, 'MongoDB connection error:'))


const main =async ()=>{
  const hikes=[
    {title:'test', elevation:300, difficulty:'easy', distance:700, image:'', instance_id:}
  ]

  await Hike.insertMany(hikes)
}
const run= async()=>{await.main()
db.close()
}

run()