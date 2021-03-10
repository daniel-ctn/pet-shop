import express from 'express'
import { addOrderItems, getOrderById, updateOrderPaid } from '../controllers/orderController.js'
import { protect } from '../middleware/authMiddleware.js'

const router = express.Router()

router.route('/').post(protect, addOrderItems)
router.route('/:id').get(getOrderById)
router.route('/:id/pay').put(updateOrderPaid)

export default router
