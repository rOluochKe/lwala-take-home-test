import { Router } from 'express'
const commodity = require('../controllers/commodity.controller')
const router = Router()

router.post('/', commodity.createCommodity)

export default router