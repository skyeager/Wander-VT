const createPost = (request, response) => {
  response.send({
    msg: 'testing createPost'
  })
}

const readPost = (request, response) => {
  response.send({
    msg: 'testing getPost'
  })
}

const updatePost = (request, response) => {
  response.send({
    msg: 'testing updatePost'
  })
}

const deletePost = (request, response) => {
  response.send({
    msg: 'testing deletePost'
  })
}

module.exports = {
  createPost,
  readPost,
  updatePost,
  deletePost
}
