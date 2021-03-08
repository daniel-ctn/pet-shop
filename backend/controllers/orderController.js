import Order from '../models/orderModel.js'

export const addOrderItems = async (req, res) => {
  try {
    const {orderItems, shippingAddress, paymentMethod, prices} = req.body

    if(orderItems && orderItems.length === 0) {
      res.status(400).json({message: 'No order items'})
    } else {
      const order = new Order({
        orderItems, shippingAddress, paymentMethod,
        itemsPrice: prices.itemsPrice,
        taxPrice: prices.taxPrice,
        shippingPrice: prices.shippingPrice,
        totalPrice: prices.totalPrice,
        user: req.user._id
      })
      const createdOrder = await order.save()

      res.status(201).json(createdOrder)
    }
  }catch (e) {
    console.log(e)
    res.status(500).json({message: 'An error occur'})
  }



}
