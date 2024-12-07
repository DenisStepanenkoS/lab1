const { Router } = require('express')
const { usersController } = require('../controllers')

// /api/users
const usersRouter = Router()

usersRouter
  .route('/')
  .post(usersController.createUser)
  .get(usersController.getAllUsers)

module.exports = usersRouter
