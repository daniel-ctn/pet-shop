import Order from '../models/orderModel.js'

export const addOrderItems = async (req, res) => {
  try {
    const { orderItems, shippingAddress, paymentMethod, prices } = req.body

    if (orderItems && orderItems.length === 0) {
      res.status(400).json({ message: 'No order items' })
    } else {
      const order = new Order({
        orderItems, shippingAddress, paymentMethod,
        itemsPrice: prices.itemsPrice,
        taxPrice: prices.taxPrice,
        shippingPrice: prices.shippingPrice,
        totalPrice: prices.totalPrice,
        user: req.user._id,
      })
      const createdOrder = await order.save()

      res.status(201).json(createdOrder)
    }
  } catch (e) {
    console.log(e)
    res.status(500).json({ message: 'An error occur' })
  }
}

export const getOrderById = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id)

    if (!order) res.status(404).send()

    res.send(order)
  } catch (e) {
    res.status(500).send()
  }
}

export const updateOrderPaid = async (req, res) => {
  try {
    const order = await Order.findByIdAndUpdate(req.params.id,
      {
        isPaid: true,
        paidAt: Date.now(),
        paymentResult: {
          id: req.body.id,
          status: req.body.status,
          update_time: req.body.update_time,
          email_address: req.body.payer.email_address,
        }
      })

    if (!order) res.status(404).send()

    res.send(order)
  } catch (e) {
    res.status(500).send()
  }
}
