const { VillaModel } = require("../model/villa.model")
const { Op } = require('sequelize');

const villaAdd = async (req, res) => {
  const payload = req.body
  console.log(payload)
  try {
    const order = new VillaModel(payload)
    await order.save()
    res.status(200).send({ msg: 'Product has been added' })
  } catch (err) {
    res.status(400).send({ err: err.message })
  }
}


const villaGet = async (req, res) => {
  const query=req.query.q
    
  try {
    if(query){
      const villas = await VillaModel.findAll({
        where: {
          [Op.or]: [
            {
              name: {
                [Op.like]: `%${query}%`,
              },
            },
            {
              state: {
                [Op.like]: `%${query}%`,
              },
            },
            {
              city: {
                [Op.like]: `%${query}%`,
              },
            }
          ],
        },
      });
    res.status(200).send(villas)
    }else{
      const villas = await VillaModel.findAll()
      res.status(200).send(villas)
    }
  } catch (err) {
    res.status(400).send({ msg: err.message })
  }
}

const singleVilla = async (req, res) => {
  const { slug } = req.params
  try {
    const villa = await VillaModel.findOne({where:{ slug: slug }})
    res.status(200).send(villa)
  } catch (err) {
    res.status(400).send({ msg: err.message })
  }
}

const updatevilla = async (req, res) => {
  let productId = req.params.productId
  console.log(productId, req.body)
  try {
    const products = await VillaModel.update(
      req.body,{where:{ _id: productId }}
    )

    res.status(200).send({ msg: 'A new Product has been updated' })
  } catch (err) {
    res.status(400).send({ msg: err.message })
  }
}

const deleteVilla = async (req, res) => {
  let id = req.params.id
  try {
    const villa = await VillaModel.destroy({ where: { _id: id } })
    res.status(200).send({ msg: 'Villa has been Deleted' })
  } catch (err) {
    res.status(400).send({ msg: err.message })
  }
}

module.exports = { villaAdd, villaGet, singleVilla, updatevilla, deleteVilla }