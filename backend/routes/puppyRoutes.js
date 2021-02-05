import express from 'express'

import { getPuppyById, getPuppyList } from '../controllers/puppyController.js'

const router = express.Router()

router.route('/').get(getPuppyList)
router.route('/:id').get(getPuppyById)

export default router
