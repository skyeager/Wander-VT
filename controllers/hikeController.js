const readHike = (request, response) => {
  response.send({
    title: 'Snake Mountain',
    elevation: 1287,
    difficulty: 'Moderate',
    distance: 28512,
    image:
      'https://npr.brightspotcdn.com/35/34/b3285b11420cb3e63148d87b6766/snake-mountain-view-ncpr-emily-russell-20210820.jpeg',
    instance_id: '1'
  })
}

module.exports = {
  readHike
}
