import { Router } from 'express'
const userRequest = require('../controllers/userRequest.controller')
const router = Router()

// router.get('/', userRequest.getUserRequests)

router.post('/', userRequest.createUserRequest)

export default router