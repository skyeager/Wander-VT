const db = require('../db')
const { Hike, Instance } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const hikes = [
    {
      title: 'Bolton Valley',
      elevation: '3,688 ft',
      difficulty: 'moderate',
      distance: '4.4 miles',
      image:
        'https://www.scenesofvermont.com/vermont-areas-and-towns/images/bvskiscene.jpg'
    },
    {
      title: "Camel's Hump",
      elevation: '4083 ft',
      difficulty: 'Hard',
      distance: '6 miles',
      image:
        'https://duxburyvermont.org/vertical/Sites/%7B00B6C2A9-912C-4C60-B699-582A202A10A3%7D/uploads/imagesCA50SV2L_Web.jpg'
    },
    {
      title: 'Colchester Pond',
      elevation: '394 ft',
      difficulty: 'Easy',
      distance: '3.1 miles',
      image:
        'https://www.onlyinyourstate.com/wp-content/uploads/2021/05/Screen-Shot-2021-05-17-at-6.55.38-PM.png'
    },
    {
      title: 'Duxbury Window',
      elevation: '1900 ft',
      difficulty: 'moderate',
      distance: '5.1 miles',
      image: ' https://i.redd.it/mkvre9wrgt291.jpg'
    },
    {
      title: 'Lake Shaftsbury',
      elevation: '840 ft',
      difficulty: 'easy',
      distance: '1 mile',
      image:
        'https://backroadramblers.com/wp-content/uploads/2017/05/DSCN7023-1024x683.jpg'
    },
    {
      title: 'Laraway Mountain',
      elevation: '2795 ft',
      difficulty: 'moderate',
      distance: '3.6 miles',
      image:
        'http://www.lowmileage.com/2015/2015_08/2015_Vermont/Aug_10/p1230517_8_tonemapped.jpg'
    },
    {
      title: 'Lone Rock Point',
      elevation: '157 ft',
      difficulty: 'easy',
      distance: '1.2 miles',
      image:
        'http://blog.uvm.edu/pstollst/files/2018/10/4D2A6739-Lone-Rock-Sunset-New-2-300x189.jpg'
    },
    {
      title: 'Lye Brook Falls',
      elevation: '1640 ft',
      difficulty: 'easy',
      distance: '6 miles',
      image:
        'https://newenglandwaterfalls.com/standardpics/vt-lyebrookfalls-pic1.jpg'
    },
    {
      title: 'Mount Ascutney',
      elevation: '3144 ft',
      difficulty: 'hard',
      distance: '5.7 miles',
      image: 'https://live.staticflickr.com/3556/3763557116_1ded1f0e2f_b.jpg'
    },
    {
      title: 'Mount Elmore',
      elevation: '2608 ft',
      difficulty: 'moderate',
      distance: '5.4 miles',
      image:
        'https://static.wixstatic.com/media/e3d92d_952ae94d7a234409964f737c57714418~mv2.jpg/v1/fit/w_2500,h_1330,al_c/e3d92d_952ae94d7a234409964f737c57714418~mv2.jpg'
    },
    {
      title: 'Mount Killington',
      elevation: '1841 ft',
      difficulty: 'hard',
      distance: '7.2 miles',
      image:
        'https://viatravelers.com/wp-content/uploads/2022/09/Killington-Mountain-1.jpg'
    },
    {
      title: 'Mount Mansfield',
      elevation: '4395 ft',
      difficulty: 'Hard',
      distance: '7.7 miles',
      image:
        'https://cdn.britannica.com/29/117929-050-8A11FCAD/Mount-Mansfield-Burlington-Vt.jpg'
    },
    {
      title: 'Mount Pisgah',
      elevation: '5721 ft',
      difficulty: 'moderate',
      distance: '4.1 miles',
      image:
        'https://i0.wp.com/bterps.com/wp-content/uploads/2021/07/DSC_5313-scaled.jpg?resize=1080%2C720&ssl=1'
    },
    {
      title: 'Snake Mountain',
      elevation: '1287 ft',
      difficulty: 'Moderate',
      distance: '5.4 miles',
      image:
        'https://npr.brightspotcdn.com/35/34/b3285b11420cb3e63148d87b6766/snake-mountain-view-ncpr-emily-russell-20210820.jpeg'
    }
  ]
  await Hike.deleteMany()
  await Instance.deleteMany()
  await Hike.insertMany(hikes)
  console.log('Created hikes! yay!')
}
const run = async () => {
  await main()
  db.close()
}

run()
