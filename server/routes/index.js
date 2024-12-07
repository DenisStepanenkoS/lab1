const { Router } = require('express')
const usersRouter = require('./usersRouter')

// /api
const router = Router()

router.use('/users', usersRouter)

module.exports = router
