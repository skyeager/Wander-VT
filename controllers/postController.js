const createPost = (request, response) => {
  response.send({
    message: 'testing create'
  })
}

const readPost = (request, response) => {
  response.send({
    title: 'test',
    message: 'test',
    authorName: 'test',
    image: 'kjdfng'
  })
}

const updatePost = (request, response) => {
  response.send({
    message: 'testing update'
  })
}

const deletePost = (request, response) => {
  response.send({
    message: 'testing delete'
  })
}

module.exports = {
  createPost,
  readPost,
  updatePost,
  deletePost
}
