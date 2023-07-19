const { BookingModel } = require("../model/booking.model")

const bookingAdd = async (req, res) => {
    const payload = req.body
    console.log(payload)
    try {
      const order = new BookingModel(payload)
      await order.save()
      res.status(200).send({ msg: 'Product has been added' })
    } catch (err) {
      res.status(400).send({ err: err.message })
    }
  }

  const bookingGet = async  (req, res) => {
    //const query=req.query
    // console.log('cartbody', req.body)
    try {
      const order = await BookingModel.findAll()
      res.status(200).send(order)
    } catch (err) {
      res.status(400).send({ msg: err.message })
    }
  }
  
  const bookingGetAll = async  (req, res) => {
    //const query=req.query
    // console.log('cartbody', req.body)
    try {
      const order = await BookingModel.findAll({where:{userId: req.body.userId}})
      res.status(200).send(order)
    } catch (err) {
      res.status(400).send({ msg: err.message })
    }
  }
  
  
  const deletebooking = async (req, res) => {
    let id = req.params.id
    try {
      const booking = await BookingModel.destroy({where:{ _id: id }})
      res.status(200).send({ msg: 'Booking has been Deleted' })
    } catch (err) {
      res.status(400).send({ msg: err.message })
    }
  }
module.exports={bookingAdd, bookingGet, bookingGetAll, deletebooking}