const db = require('../db')
const { Hike } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const hikes = [
    {
      title: "Camel's Hump",
      elevation: 4083,
      difficulty: 'Hard',
      distance: 31680,
      image:
        'https://duxburyvermont.org/vertical/Sites/%7B00B6C2A9-912C-4C60-B699-582A202A10A3%7D/uploads/imagesCA50SV2L_Web.jpg'
    },
    {
      title: 'Colchester Pond',
      elevation: 394,
      difficulty: 'Easy',
      distance: 16368,
      image:
        'https://www.onlyinyourstate.com/wp-content/uploads/2021/05/Screen-Shot-2021-05-17-at-6.55.38-PM.png'
    },
    {
      title: 'Snake Mountain',
      elevation: 1287,
      difficulty: 'Moderate',
      distance: 28512,
      image:
        'https://npr.brightspotcdn.com/35/34/b3285b11420cb3e63148d87b6766/snake-mountain-view-ncpr-emily-russell-20210820.jpeg'
    }
    // {
    //   title: ,
    //   elevation: ,
    //   difficulty: ,
    //   distance: ,
    //   image:
    // },
    // {
    //   title: ,
    //   elevation: ,
    //   difficulty: ,
    //   distance: ,
    //   image:
    // },
    // {
    //   title: ,
    //   elevation: ,
    //   difficulty: ,
    //   distance: ,
    //   image:
    // },
    // {
    //   title: ,
    //   elevation: ,
    //   difficulty: ,
    //   distance: ,
    //   image:
    // },
    // {
    //   title: ,
    //   elevation: ,
    //   difficulty: ,
    //   distance: ,
    //   image:
    // },
    // {
    //   title: ,
    //   elevation: ,
    //   difficulty: ,
    //   distance: ,
    //   image:
    // },
    // {
    //   title: ,
    //   elevation: ,
    //   difficulty: ,
    //   distance: ,
    //   image:
    // },
    // {
    //   title: ,
    //   elevation: ,
    //   difficulty: ,
    //   distance: ,
    //   image:
    // },
    // {
    //   title: ,
    //   elevation: ,
    //   difficulty: ,
    //   distance: ,
    //   image:
    // },
    // {
    //   title: ,
    //   elevation: ,
    //   difficulty: ,
    //   distance: ,
    //   image:
    // },
    // {
    //   title: ,
    //   elevation: ,
    //   difficulty: ,
    //   distance: ,
    //   image:
    // },
    // {
    //   title: ,
    //   elevation: ,
    //   difficulty: ,
    //   distance: ,
    //   image:
    // },
    // {
    //   title: ,
    //   elevation: ,
    //   difficulty: ,
    //   distance: ,
    //   image:
    // },
    // {
    //   title: ,
    //   elevation: ,
    //   difficulty: ,
    //   distance: ,
    //   image:
    // },
  ]

  await Hike.insertMany(hikes)
  console.log('Created hikes! yay!')
}
const run = async () => {
  await main()
  db.close()
}

run()
